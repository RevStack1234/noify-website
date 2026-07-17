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

    const text =
      `Enquiry Type: ${enquiry_type}\n` +
      `Full Name: ${full_name}\n` +
      `Company: ${company_name}\n` +
      `State: ${state}\n` +
      `Phone: ${phone}\n` +
      `Email: ${email}\n` +
      `Message: ${message}`

    await transporter.sendMail({
      from: process.env.SMTP_FROM || process.env.SMTP_USER,
      to: process.env.SMTP_TO || process.env.SMTP_USER,
      subject: `New ${enquiry_type} from ${full_name}`,
      text,
    })

    res.json({ success: true })
  } catch {
    res.status(500).json({ error: "Internal server error" })
  }
}
