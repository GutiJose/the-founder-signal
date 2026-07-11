# The Founder Signal

Diagnóstico rápido para emprendedores: 10 preguntas → score 0–100 del estágio de tu startup + 3 prioridades de enfoque. Trilingüe (EN/ES/PT).

## Ejecutar en local

```bash
npm install
npm start
```

Abre http://localhost:3000

## Estructura

```
package.json      → dependencias (solo Express)
server.js         → sirve /public y guarda leads en leads.json
public/index.html → landing + quiz + resultado
public/style.css  → tema oscuro responsive
public/script.js  → preguntas, traducciones, score y recomendaciones
```

Los emails capturados quedan en `leads.json` en el servidor.

## Despliegue (GitHub → Render → GoDaddy)

### 1. Subir a GitHub
1. Crea un repo nuevo en github.com (ej. `the-founder-signal`).
2. En esta carpeta:
   ```bash
   git init
   git add .
   git commit -m "The Founder Signal MVP"
   git branch -M main
   git remote add origin https://github.com/TU-USUARIO/the-founder-signal.git
   git push -u origin main
   ```

### 2. Desplegar en Render (gratis)
1. Crea cuenta en render.com (puedes entrar con GitHub).
2. **New → Web Service** → conecta tu repo.
3. Configuración:
   - Runtime: **Node**
   - Build command: `npm install`
   - Start command: `npm start`
   - Plan: **Free**
4. Deploy. Tendrás una URL tipo `the-founder-signal.onrender.com`.
5. A partir de ahora, cada `git push` redespliega automáticamente.

### 3. Conectar thefoundersignal.com (GoDaddy)
1. En Render: tu servicio → **Settings → Custom Domains** → añade `thefoundersignal.com` y `www.thefoundersignal.com`. Render te mostrará los valores DNS exactos.
2. En GoDaddy: **My Products → DNS** de tu dominio:
   - Registro **A** para `@` → la IP que indica Render (ej. `216.24.57.1`)
   - Registro **CNAME** para `www` → `the-founder-signal.onrender.com`
3. Espera la propagación DNS (minutos a pocas horas). Render emite el certificado HTTPS solo.

## Limitaciones del plan gratis de Render
- El servidor "duerme" tras 15 min sin tráfico → la primera visita tarda ~30 s.
- `leads.json` se borra en cada redeploy o reinicio. Para leads persistentes: plan Starter ($7/mes) con disco, o migrar a una base de datos.

## Ver los leads capturados
En Render: tu servicio → **Shell** → `cat leads.json`
