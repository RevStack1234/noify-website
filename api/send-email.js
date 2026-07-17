import nodemailer from "nodemailer"

export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" })
  }

  try {
    const { enquiry_type, full_name, company_name, state, phone, email, message } = req.body

    const transporter = nodemailer.createTransport({
      service: process.env.SMTP_SERVICE || "gmail",
      host: process.env.SMTP_HOST || "smtp.gmail.com",
      port: Number(process.env.SMTP_PORT) || 587,
      secure: process.env.SMTP_SECURE === "true",
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    })

    const fields = [
      { label: "Enquiry Type", value: enquiry_type },
      { label: "Full Name", value: full_name },
      { label: "Company", value: company_name },
      { label: "State", value: state },
      { label: "Phone", value: phone },
      { label: "Email", value: email },
      { label: "Message", value: message },
    ].filter((f) => f.value && String(f.value).trim())

    const esc = (v) =>
      String(v)
        .replace(/&/g, "&amp;")
        .replace(/</g, "&lt;")
        .replace(/>/g, "&gt;")

    const text = fields.map((f) => `${f.label}: ${f.value}`).join("\n")

    const rows = fields
      .map(
        (f) => `
          <tr>
            <td style="padding:12px 16px;border-bottom:1px solid #eef0ee;font-family:Arial,Helvetica,sans-serif;font-size:13px;color:#6b7280;font-weight:600;width:180px;vertical-align:top;">${esc(f.label)}</td>
            <td style="padding:12px 16px;border-bottom:1px solid #eef0ee;font-family:Arial,Helvetica,sans-serif;font-size:14px;color:#111827;white-space:pre-line;">${esc(f.value)}</td>
          </tr>`,
      )
      .join("")

    const html = `
      <div style="background:#f4f6f4;padding:32px 16px;">
        <table role="presentation" cellpadding="0" cellspacing="0" width="100%" style="max-width:600px;margin:0 auto;background:#ffffff;border-radius:12px;overflow:hidden;border:1px solid #e5e7eb;">
          <tr>
            <td style="background:#0f0f0f;padding:24px 28px;">
              <span style="font-family:Arial,Helvetica,sans-serif;font-size:20px;font-weight:700;color:#ffffff;letter-spacing:0.5px;">NOIFY <span style="color:#68b400;">ENERGY</span></span>
            </td>
          </tr>
          <tr>
            <td style="padding:28px 28px 8px 28px;">
              <h2 style="margin:0 0 4px 0;font-family:Arial,Helvetica,sans-serif;font-size:18px;color:#111827;">New ${esc(enquiry_type)}</h2>
              <p style="margin:0;font-family:Arial,Helvetica,sans-serif;font-size:13px;color:#6b7280;">A new enquiry was submitted through the Noify website.</p>
            </td>
          </tr>
          <tr>
            <td style="padding:16px 28px 28px 28px;">
              <table role="presentation" cellpadding="0" cellspacing="0" width="100%" style="border:1px solid #eef0ee;border-radius:8px;overflow:hidden;">
                ${rows}
              </table>
            </td>
          </tr>
          <tr>
            <td style="background:#f9fafb;padding:16px 28px;border-top:1px solid #e5e7eb;">
              <p style="margin:0;font-family:Arial,Helvetica,sans-serif;font-size:12px;color:#9ca3af;">This email was sent automatically from the Noify Energy website contact form.</p>
            </td>
          </tr>
        </table>
      </div>`

    await transporter.sendMail({
      from: process.env.SMTP_FROM || process.env.SMTP_USER,
      to: process.env.SMTP_TO || process.env.SMTP_USER,
      replyTo: email || undefined,
      subject: `New ${enquiry_type} from ${full_name}`,
      text,
      html,
    })

    res.json({ success: true })
  } catch {
    res.status(500).json({ error: "Internal server error" })
  }
}
