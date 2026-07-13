// The Founder Signal - servidor Express
// 1) sirve los archivos de /public
// 2) guarda cada lead de forma duradera en una hoja de Google (vía LEADS_WEBHOOK_URL)
//    y mantiene una copia local en leads.json como respaldo.
//
// Nota: en el plan Free de Render el disco es efímero (leads.json se borra al
// redeploy o al reiniciar). Por eso el lead se reenvía a un webhook externo
// (Google Apps Script -> Google Sheet), definido en la variable de entorno
// LEADS_WEBHOOK_URL. Si esa variable no está configurada, se guarda solo local.

const express = require("express");
const fs = require("fs");
const path = require("path");

const app = express();
const PORT = process.env.PORT || 3000; // Render define PORT automáticamente
const LEADS_FILE = path.join(__dirname, "leads.json");
const LEADS_WEBHOOK_URL = process.env.LEADS_WEBHOOK_URL || ""; // hoja de Google (opcional pero recomendado)

app.use(express.json());
app.use(express.static(path.join(__dirname, "public")));

// Lee los leads locales (o lista vacía si el archivo no existe)
function readLeads() {
  try {
    return JSON.parse(fs.readFileSync(LEADS_FILE, "utf8"));
  } catch {
    return [];
  }
}

// Copia de respaldo local (best-effort: si el disco es efímero, no pasa nada)
function saveLocal(lead) {
  try {
    const leads = readLeads();
    leads.push(lead);
    fs.writeFileSync(LEADS_FILE, JSON.stringify(leads, null, 2));
  } catch (err) {
    console.warn("No se pudo escribir leads.json (disco efímero):", err.message);
  }
}

// Reenvía el lead a la hoja de Google. Duradero e independiente del disco de Render.
async function saveRemote(lead) {
  if (!LEADS_WEBHOOK_URL) return false;
  if (typeof fetch !== "function") {
    console.warn("fetch no disponible (se necesita Node 18+); se omite el webhook.");
    return false;
  }
  try {
    const controller = new AbortController();
    const timeout = setTimeout(() => controller.abort(), 8000);
    const resp = await fetch(LEADS_WEBHOOK_URL, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(lead),
      signal: controller.signal
    });
    clearTimeout(timeout);
    return resp.ok;
  } catch (err) {
    console.warn("Fallo al reenviar el lead al webhook:", err.message);
    return false;
  }
}

// POST /api/lead - guarda el email junto con el resultado del diagnóstico
app.post("/api/lead", async (req, res) => {
  const { email, quiz, score, stage, language } = req.body;

  // Validación simple del email
  if (typeof email !== "string" || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return res.status(400).json({ ok: false, error: "Invalid email" });
  }

  const lead = {
    email: email.trim().toLowerCase(),
    quiz: String(quiz || "maturity"),   // maturity | leverage | disruption
    score: Number(score) || 0,
    stage: String(stage || ""),
    language: String(language || "en"),
    date: new Date().toISOString()
  };

  saveLocal(lead);          // respaldo local (best-effort)
  await saveRemote(lead);   // almacenamiento duradero en Google Sheet

  // Respondemos ok aunque el webhook falle: no bloqueamos la revelación del score.
  res.json({ ok: true });
});

app.listen(PORT, () => {
  console.log(`The Founder Signal running on http://localhost:${PORT}`);
});
