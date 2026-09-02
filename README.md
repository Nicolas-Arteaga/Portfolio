# Portfolio — Nicolás Arteaga

React + Vite + three.js (base: JavaScript Mastery 3D portfolio, MIT).

```bash
npm install
npm run dev
```

## Formulario de contacto

El form postea a `/api/contact` (Vercel Serverless Function, `api/contact.js`),
que envía el mensaje por **Resend** a nicolasmarceloarteaga@gmail.com.

Requiere en Vercel la env var (Production + Preview):

    RESEND_API_KEY = re_xxxxxxxx   (de resend.com/api-keys)

Remitente: `onboarding@resend.dev` (sandbox de Resend, no requiere dominio
propio porque el destino es la casilla dueña de la cuenta).
