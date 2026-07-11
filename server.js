// The Founder Signal - servidor Express
// Hace dos cosas: 1) sirve los archivos de /public  2) guarda leads en leads.json

const express = require("express");
const fs = require("fs");
const path = require("path");

const app = express();
const PORT = process.env.PORT || 3000; // Render define PORT automáticamente
const LEADS_FILE = path.join(__dirname, "leads.json");

app.use(express.json());
app.use(express.static(path.join(__dirname, "public")));

// Lee los leads existentes (o devuelve una lista vacía si el archivo no existe)
function readLeads() {
  try {
    return JSON.parse(fs.readFileSync(LEADS_FILE, "utf8"));
  } catch {
    return [];
  }
}

// POST /api/lead - guarda el email opcional junto con el resultado del quiz
app.post("/api/lead", (req, res) => {
  const { email, score, stage, language } = req.body;

  // Validación simple del email
  if (typeof email !== "string" || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return res.status(400).json({ ok: false, error: "Invalid email" });
  }

  const leads = readLeads();
  leads.push({
    email: email.trim().toLowerCase(),
    score: Number(score) || 0,
    stage: String(stage || ""),
    language: String(language || "en"),
    date: new Date().toISOString()
  });

  fs.writeFileSync(LEADS_FILE, JSON.stringify(leads, null, 2));
  res.json({ ok: true });
});

app.listen(PORT, () => {
  console.log(`The Founder Signal running on http://localhost:${PORT}`);
});
