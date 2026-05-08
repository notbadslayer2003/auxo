import { NextRequest, NextResponse } from 'next/server'

interface ContactPayload {
    nom:       string
    prenom:    string
    email:     string
    telephone?: string
    service?:  string
    message:   string
}

export async function POST(req: NextRequest) {
    try {
        const body: ContactPayload = await req.json()

        // Basic server-side validation
        if (!body.nom || !body.prenom || !body.email || !body.message) {
            return NextResponse.json(
                { error: 'Champs requis manquants' },
                { status: 400 }
            )
        }

        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
        if (!emailRegex.test(body.email)) {
            return NextResponse.json(
                { error: 'Email invalide' },
                { status: 400 }
            )
        }

        // ─── Option A : Nodemailer (décommenter + installer nodemailer) ───
        // const transporter = nodemailer.createTransport({
        //   host: process.env.SMTP_HOST,
        //   port: Number(process.env.SMTP_PORT),
        //   auth: { user: process.env.SMTP_USER, pass: process.env.SMTP_PASS },
        // })
        // await transporter.sendMail({
        //   from: `"Site AUXO" <${process.env.SMTP_USER}>`,
        //   to: 'hello@auxoagency.be',
        //   subject: `[AUXO] Nouveau contact — ${body.service || 'Site web'}`,
        //   html: buildEmailHtml(body),
        // })

        // ─── Option B : Resend (décommenter + installer resend) ───
        // const resend = new Resend(process.env.RESEND_API_KEY)
        // await resend.emails.send({
        //   from: 'contact@auxoagency.be',
        //   to: 'hello@auxoagency.be',
        //   subject: `[AUXO] Nouveau contact — ${body.service || 'Site web'}`,
        //   html: buildEmailHtml(body),
        // })

        // ─── Fallback : log en dev, retourne 200 en prod ───
        if (process.env.NODE_ENV === 'development') {
            console.log('[AUXO Contact Form]', body)
        }

        return NextResponse.json({ success: true }, { status: 200 })

    } catch (err) {
        console.error('[AUXO Contact] Error:', err)
        return NextResponse.json(
            { error: 'Erreur serveur' },
            { status: 500 }
        )
    }
}

function buildEmailHtml(body: ContactPayload): string {
    return `
    <!DOCTYPE html>
    <html lang="fr">
    <head><meta charset="UTF-8"><style>
      body { font-family: Inter, sans-serif; background: #f7f7f7; margin: 0; padding: 40px 20px; }
      .card { background: white; border-radius: 8px; padding: 40px; max-width: 560px; margin: 0 auto; border-top: 3px solid #ff8d41; }
      h1 { font-size: 1.3rem; color: #121b1f; margin: 0 0 24px; }
      .row { margin-bottom: 16px; }
      .label { font-size: 0.72rem; font-weight: 600; text-transform: uppercase; letter-spacing: 0.1em; color: #999; }
      .value { font-size: 0.95rem; color: #222; margin-top: 4px; }
      .message { white-space: pre-wrap; line-height: 1.65; }
      .footer { margin-top: 32px; padding-top: 16px; border-top: 1px solid #eee; font-size: 0.75rem; color: #aaa; }
    </style></head>
    <body>
      <div class="card">
        <h1>📩 Nouveau message — Site AUXO</h1>
        <div class="row"><div class="label">Nom complet</div><div class="value">${body.prenom} ${body.nom}</div></div>
        <div class="row"><div class="label">Email</div><div class="value"><a href="mailto:${body.email}">${body.email}</a></div></div>
        ${body.telephone ? `<div class="row"><div class="label">Téléphone</div><div class="value">${body.telephone}</div></div>` : ''}
        ${body.service   ? `<div class="row"><div class="label">Service</div><div class="value">${body.service}</div></div>`   : ''}
        <div class="row"><div class="label">Message</div><div class="value message">${body.message}</div></div>
        <div class="footer">Envoyé depuis auxoagency.be — ${new Date().toLocaleString('fr-BE')}</div>
      </div>
    </body>
    </html>
  `
}