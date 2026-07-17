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

    const contactFields = [
      { label: "Full Name", value: full_name },
      { label: "Email Address", value: email },
      { label: "Phone Number", value: phone },
      { label: "Company", value: company_name || "N/A" },
      { label: "State", value: state || "N/A" },
    ].filter((f) => f.value && String(f.value).trim())

    const esc = (v) =>
      String(v)
        .replace(/&/g, "&amp;")
        .replace(/</g, "&lt;")
        .replace(/>/g, "&gt;")

    const text = [
      `Enquiry Type: ${enquiry_type}`,
      ...contactFields.map((f) => `${f.label}: ${f.value}`),
      message ? `Message: ${message}` : ""
    ].filter(Boolean).join("\n")

    const rows = contactFields
      .map(
        (f) => `
          <tr>
            <td style="padding:12px 0;font-family:Arial,Helvetica,sans-serif;font-size:13px;color:#9ca3af;width:160px;vertical-align:top;">${esc(f.label)}</td>
            <td style="padding:12px 0;font-family:Arial,Helvetica,sans-serif;font-size:14px;color:${
              f.label === "Email Address" || f.label === "Phone Number" ? "#68b400" : "#ffffff"
            };font-weight:500;white-space:pre-line;">${
              f.label === "Email Address"
                ? `<a href="mailto:${esc(f.value)}" style="color:#68b400;text-decoration:none;">${esc(f.value)}</a>`
                : f.label === "Phone Number"
                ? `<a href="tel:${esc(f.value)}" style="color:#68b400;text-decoration:none;">${esc(f.value)}</a>`
                : esc(f.value)
            }</td>
          </tr>`,
      )
      .join("")

    const html = `
      <div style="background:#0a0a0a;padding:48px 16px;min-height:100vh;">
        <table role="presentation" cellpadding="0" cellspacing="0" width="100%" style="max-width:600px;margin:0 auto;background:#171717;border-radius:12px;overflow:hidden;border:1px solid #262626;">
          <tr>
            <td style="padding:40px 32px 0 32px;text-align:center;">
              <span style="font-family:Arial,Helvetica,sans-serif;font-size:24px;font-weight:800;color:#ffffff;letter-spacing:1px;">NOIFY <span style="color:#68b400;">ENERGY</span></span>
            </td>
          </tr>
          <tr>
            <td style="padding:24px 32px 16px 32px;text-align:center;">
              <h2 style="margin:0;font-family:Arial,Helvetica,sans-serif;font-size:22px;color:#ffffff;font-weight:600;">New ${esc(enquiry_type)}</h2>
            </td>
          </tr>
          <tr>
            <td style="padding:16px 32px;">
              <h3 style="margin:0 0 16px 0;font-family:Arial,Helvetica,sans-serif;font-size:12px;font-weight:700;color:#68b400;letter-spacing:1px;text-transform:uppercase;">Contact Details</h3>
              <table role="presentation" cellpadding="0" cellspacing="0" width="100%">
                ${rows}
              </table>
            </td>
          </tr>
          ${
            message
              ? `
          <tr>
            <td style="padding:16px 32px 32px 32px;">
              <div style="background:#1c1c1c;border-radius:8px;padding:24px;">
                <h3 style="margin:0 0 16px 0;font-family:Arial,Helvetica,sans-serif;font-size:12px;font-weight:700;color:#68b400;letter-spacing:1px;text-transform:uppercase;">Message</h3>
                <div style="border-left:2px solid #68b400;padding-left:16px;">
                  <p style="margin:0;font-family:Arial,Helvetica,sans-serif;font-size:14px;color:#e5e5e5;line-height:1.6;white-space:pre-line;">${esc(message)}</p>
                </div>
              </div>
            </td>
          </tr>
          `
              : ""
          }
          <tr>
            <td style="padding:24px 32px;border-top:1px solid #262626;text-align:center;">
              <p style="margin:0;font-family:Arial,Helvetica,sans-serif;font-size:12px;color:#737373;">This email was automatically generated from your website contact form.</p>
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
