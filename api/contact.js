// Vercel Serverless Function — recibe el form de contacto y manda un email
// directo a la casilla de Nicolás vía Resend. La API key vive solo en el
// servidor (env var RESEND_API_KEY), nunca llega al navegador.

const TO = "nicolasmarceloarteaga@gmail.com";
// Remitente: dominio sandbox de Resend. No requiere verificar ningún dominio
// porque el destino es la propia casilla. Si algún día se verifica un dominio
// propio en Resend, cambiar este valor por algo como "web@tudominio.com".
const FROM = "Portfolio <onboarding@resend.dev>";

export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  const { name, email, message, company } = req.body || {};

  // honeypot: si el campo oculto "company" viene lleno, es un bot
  if (company) return res.status(200).json({ ok: true });

  if (!name || !email || !message) {
    return res.status(400).json({ error: "Faltan campos" });
  }
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return res.status(400).json({ error: "Email inválido" });
  }
  if (String(message).length > 5000) {
    return res.status(400).json({ error: "Mensaje demasiado largo" });
  }

  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) {
    return res.status(500).json({ error: "RESEND_API_KEY no configurada" });
  }

  const safe = (s) =>
    String(s).replace(/[<>&]/g, (c) => ({ "<": "&lt;", ">": "&gt;", "&": "&amp;" }[c]));

  try {
    const r = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${apiKey}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        from: FROM,
        to: [TO],
        reply_to: email,
        subject: `Portfolio · mensaje de ${name}`,
        html: `
          <h2>Nuevo mensaje desde el portfolio</h2>
          <p><strong>Nombre:</strong> ${safe(name)}</p>
          <p><strong>Email:</strong> ${safe(email)}</p>
          <p><strong>Mensaje:</strong></p>
          <p style="white-space:pre-wrap">${safe(message)}</p>
        `,
      }),
    });

    if (!r.ok) {
      const detail = await r.text();
      return res.status(502).json({ error: "Resend falló", detail });
    }
    return res.status(200).json({ ok: true });
  } catch (err) {
    return res.status(500).json({ error: "Error enviando el email" });
  }
}
