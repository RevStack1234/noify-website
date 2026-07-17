import { useState, type FormEvent } from "react"
import { motion } from "motion/react"
import { Reveal, RevealLeft, RevealRight } from "./motion/Reveal"

const enquiryOptions = [
  {
    id: "general" as const,
    number: "01",
    title: "General Enquiry",
    description: "For product questions, sales enquiries and technical queries.",
    suitable: "Suitable for: Product Questions · Sales Enquiries · Technical Queries",
  },
  {
    id: "dealer" as const,
    number: "02",
    title: "Dealer / Channel Partner Enquiry",
    description: "For dealer registration, distribution and OEM collaborations.",
    suitable:
      "Suitable for: Dealer Registration · Distribution Partnerships · OEM Collaborations",
  },
]

type EnquiryId = (typeof enquiryOptions)[number]["id"]

const indianStates = [
  "Andhra Pradesh",
  "Assam",
  "Bihar",
  "Chhattisgarh",
  "Delhi",
  "Goa",
  "Gujarat",
  "Haryana",
  "Himachal Pradesh",
  "Jharkhand",
  "Karnataka",
  "Kerala",
  "Madhya Pradesh",
  "Maharashtra",
  "Odisha",
  "Punjab",
  "Rajasthan",
  "Tamil Nadu",
  "Telangana",
  "Uttar Pradesh",
  "Uttarakhand",
  "West Bengal",
] as const

const contactInfo = [
  { label: "Address", value: "Noida , India", href: undefined },
  { label: "Phone", value: "8369457406", href: "tel:8369457406" },
  { label: "Email", value: "priyanshu@noifyenergy.com", href: "mailto:priyanshu@noifyenergy.com" },
] as const

const fieldClass =
  "h-10 w-full appearance-none rounded-lg bg-noify-input px-5 font-jakarta text-base leading-[1.36] tracking-[0.01em] text-white outline-none transition-colors placeholder:text-[#575656] focus:ring-1 focus:ring-[#68b400]/50"

const selectClass = `${fieldClass} cursor-pointer pr-10 text-white`

type FormState = {
  enquiryType: EnquiryId
  fullName: string
  companyName: string
  state: string
  phone: string
  email: string
  message: string
}

const initialForm: FormState = {
  enquiryType: "general",
  fullName: "",
  companyName: "",
  state: "",
  phone: "",
  email: "",
  message: "",
}

export function ContactSection() {
  const [form, setForm] = useState<FormState>(initialForm)
  const [status, setStatus] = useState<"idle" | "sending" | "sent">("idle")
  const [errors, setErrors] = useState<Partial<Record<keyof FormState | "submit", string>>>({})

  const update = <K extends keyof FormState>(key: K, value: FormState[K]) => {
    setForm((prev) => ({ ...prev, [key]: value }))
    setStatus("idle")
    setErrors((prev) => ({ ...prev, [key]: "", submit: "" }))
  }

  const selectEnquiry = (id: EnquiryId) => {
    update("enquiryType", id)
  }

  const validate = () => {
    const errs: Partial<Record<keyof FormState | "submit", string>> = {}

    if (!form.fullName.trim()) errs.fullName = "Full name is required."

    if (!form.state.trim()) errs.state = "Please select a state."

    const phoneDigits = form.phone.replace(/\D/g, "")
    if (!form.phone.trim() || phoneDigits.length < 10)
      errs.phone = "Please enter a valid 10-digit phone number."

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!form.email.trim() || !emailRegex.test(form.email.trim()))
      errs.email = "Please enter a valid email address."

    if (!form.message.trim()) errs.message = "Message is required."

    setErrors(errs)
    return Object.keys(errs).length === 0
  }

  const onSubmit = (e: FormEvent) => {
    e.preventDefault()
    if (!validate()) return

    setStatus("sending")

    fetch("/api/send-email", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        enquiry_type: form.enquiryType === "dealer" ? "Dealer / Channel Partner Enquiry" : "General Enquiry",
        full_name: form.fullName,
        company_name: form.companyName,
        state: form.state,
        phone: form.phone,
        email: form.email,
        message: form.message,
      }),
    })
      .then((res) => {
        if (!res.ok) throw new Error()
        setStatus("sent")
        setForm({ ...initialForm, enquiryType: form.enquiryType })
        setErrors({})
      })
      .catch(() => {
        setErrors({ submit: "Failed to send. Please try again." })
        setStatus("idle")
      })
  }

  const whatsappMessage = encodeURIComponent(
    `Hi Noify, I'd like to discuss a ${
      form.enquiryType === "dealer" ? "Dealer / Channel Partner" : "General"
    } enquiry.`,
  )

  return (
    <section id="contact" className="bg-noify-bg px-4 pb-6 pt-8 sm:px-6 lg:px-10 lg:pb-8 lg:pt-10">
      <Reveal>
        <div className="mx-auto max-w-[1360px] rounded-lg bg-noify-surface p-5 sm:p-8 lg:p-[60px]">
          <div className="grid gap-10 lg:grid-cols-2 lg:gap-12">
            <RevealLeft className="flex flex-col gap-6 sm:gap-7">
              <span className="btn-green inline-flex h-8 w-fit items-center justify-center rounded-lg px-3.5 font-jakarta text-xs font-semibold tracking-[0.04em] text-white">
                Get in touch
              </span>

              <div className="flex flex-col gap-3">
                <h2 className="max-w-[527px] font-space text-[24px] leading-tight tracking-[-0.005em] text-white sm:text-[28px] lg:text-[32px]">
                  Tell us what you need — we&apos;ll route it correctly.
                </h2>
                <p className="font-inter text-sm font-semibold tracking-[0.04em] text-[#707070]">
                  Choose the enquiry type that fits you best. It helps us get you to the right team
                  faster.
                </p>
              </div>

              <div className="flex flex-col gap-4">
                {enquiryOptions.map((type) => {
                  const selected = form.enquiryType === type.id
                  return (
                    <motion.button
                      key={type.id}
                      type="button"
                      onClick={() => selectEnquiry(type.id)}
                      whileTap={{ scale: 0.99 }}
                      className={`rounded-2xl px-5 py-4 text-left transition-colors sm:px-[34px] sm:py-[15px] sm:pb-6 ${
                        selected
                          ? "border border-[rgba(45,130,2,0.5)] bg-noify-form"
                          : "border border-transparent bg-noify-form hover:border-white/10"
                      }`}
                    >
                      <div className="flex items-start justify-between gap-4">
                        <div className="flex flex-col gap-4">
                          <div className="flex flex-col gap-2">
                          <h3 className="font-jakarta text-lg font-medium leading-[1.36] text-white sm:text-xl">
                            {type.title}
                          </h3>
                            <p className="font-inter text-sm tracking-[0.01em] text-noify-text-sub">
                              {type.description}
                            </p>
                          </div>
                          <p className="max-w-[390px] font-inter text-sm font-medium tracking-[0.01em] text-[#636E69]">
                            {type.suitable}
                          </p>
                        </div>
                        <span
                          className={`font-inter text-sm tracking-[0.01em] ${
                            selected ? "text-noify-accent" : "text-white/40"
                          }`}
                        >
                          {type.number}
                        </span>
                      </div>
                    </motion.button>
                  )
                })}
              </div>

              <div className="flex flex-col">
                {contactInfo.map((info, i) => (
                  <div key={info.label}>
                    <div className="flex items-center justify-between py-4">
                      <span className="font-jakarta text-base font-medium leading-[1.36] text-[#9C9C9C]">
                        {info.label}
                      </span>
                      {info.href ? (
                        <a
                          href={info.href}
                          className="font-inter text-base leading-[1.36] text-white transition-opacity hover:opacity-80"
                        >
                          {info.value}
                        </a>
                      ) : (
                        <span className="font-inter text-base leading-[1.36] text-white">
                          {info.value}
                        </span>
                      )}
                    </div>
                    {i < contactInfo.length - 1 && <div className="h-px bg-white/15" />}
                  </div>
                ))}
              </div>

              <a
                href={`https://wa.me/918369457406?text=${whatsappMessage}`}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-green inline-flex w-fit items-center justify-center rounded-lg px-3.5 py-4 font-jakarta text-xs font-semibold tracking-[0.04em] text-white"
              >
                Chat on Whatsapp
              </a>
            </RevealLeft>

            <RevealRight>
              <div className="rounded-3xl bg-noify-form p-5 sm:p-8">
                <form id="contact-form" className="flex flex-col gap-5" onSubmit={onSubmit}>
                    <div className="flex flex-col gap-2">
                      <label className="font-jakarta text-sm leading-[1.36] tracking-[0.01em] text-noify-text-label">
                        ENQUIRY TYPE
                      </label>
                      <div className="relative">
                        <select
                          value={form.enquiryType}
                          onChange={(e) => selectEnquiry(e.target.value as EnquiryId)}
                          className={`${selectClass} ${errors.enquiryType ? "ring-1 ring-red-500/60" : ""}`}
                        >
                          {enquiryOptions.map((opt) => (
                            <option key={opt.id} value={opt.id} className="bg-noify-form text-white">
                              {opt.title}
                            </option>
                          ))}
                        </select>
                        <img
                          src="/images/arrow-down.svg"
                          alt=""
                          className="pointer-events-none absolute right-3 top-1/2 h-6 w-6 -translate-y-1/2"
                        />
                      </div>
                      {errors.enquiryType && (
                        <p className="font-inter text-xs text-red-400">{errors.enquiryType}</p>
                      )}
                    </div>

                  <div className="flex flex-col gap-2">
                    <label className="font-jakarta text-sm leading-[1.36] tracking-[0.01em] text-noify-text-label">
                      FULL NAME <span className="text-red-400">*</span>
                    </label>
                    <input
                      type="text"
                      value={form.fullName}
                      onChange={(e) => update("fullName", e.target.value)}
                      placeholder="Your Name"
                      className={`${fieldClass} ${errors.fullName ? "ring-1 ring-red-500/60" : ""}`}
                      required
                    />
                    {errors.fullName && (
                      <p className="font-inter text-xs text-red-400">{errors.fullName}</p>
                    )}
                  </div>

                  <div className="flex flex-col gap-5">
                    <label className="font-jakarta text-sm leading-[1.36] tracking-[0.01em] text-noify-text-label">
                      COMPANY NAME
                    </label>
                    <input
                      type="text"
                      value={form.companyName}
                      onChange={(e) => update("companyName", e.target.value)}
                      className={fieldClass}
                    />
                  </div>

                  <div className="flex flex-col gap-2">
                    <label className="font-jakarta text-sm leading-[1.36] tracking-[0.01em] text-noify-text-label">
                      STATE <span className="text-red-400">*</span>
                    </label>
                    <div className="relative">
                      <select
                        value={form.state}
                        onChange={(e) => update("state", e.target.value)}
                        className={`${selectClass} ${errors.state ? "ring-1 ring-red-500/60" : ""} ${!form.state ? "text-[#575656]" : ""}`}
                      >
                        <option value="" className="bg-noify-form text-[#575656]">
                          Select state
                        </option>
                        {indianStates.map((state) => (
                          <option key={state} value={state} className="bg-noify-form text-white">
                            {state}
                          </option>
                        ))}
                      </select>
                      <img
                        src="/images/arrow-down.svg"
                        alt=""
                        className="pointer-events-none absolute right-3 top-1/2 h-6 w-6 -translate-y-1/2"
                      />
                    </div>
                    {errors.state && (
                      <p className="font-inter text-xs text-red-400">{errors.state}</p>
                    )}
                  </div>

                  <div className="flex flex-col gap-2">
                    <label className="font-jakarta text-sm leading-[1.36] tracking-[0.01em] text-noify-text-label">
                      PHONE <span className="text-red-400">*</span>
                    </label>
                    <input
                      type="tel"
                      value={form.phone}
                      onChange={(e) => update("phone", e.target.value)}
                      placeholder="+ 91"
                      className={`${fieldClass} ${errors.phone ? "ring-1 ring-red-500/60" : ""}`}
                      required
                    />
                    {errors.phone && (
                      <p className="font-inter text-xs text-red-400">{errors.phone}</p>
                    )}
                  </div>

                  <div className="flex flex-col gap-2">
                    <label className="font-jakarta text-sm leading-[1.36] tracking-[0.01em] text-noify-text-label">
                      EMAIL <span className="text-red-400">*</span>
                    </label>
                    <input
                      type="email"
                      value={form.email}
                      onChange={(e) => update("email", e.target.value)}
                      className={`${fieldClass} ${errors.email ? "ring-1 ring-red-500/60" : ""}`}
                      required
                    />
                    {errors.email && (
                      <p className="font-inter text-xs text-red-400">{errors.email}</p>
                    )}
                  </div>

                  <div className="flex flex-col gap-2">
                    <label className="font-jakarta text-sm leading-[1.36] tracking-[0.01em] text-noify-text-label">
                      MESSAGE <span className="text-red-400">*</span>
                    </label>
                    <textarea
                      value={form.message}
                      onChange={(e) => update("message", e.target.value)}
                      placeholder="Tell us what you are looking for"
                      rows={4}
                      className={`w-full resize-none rounded-lg bg-noify-input px-5 py-4 font-jakarta text-base leading-[1.36] tracking-[0.01em] text-white outline-none transition-colors placeholder:text-[#535353] focus:ring-1 focus:ring-[#68b400]/50 ${errors.message ? "ring-1 ring-red-500/60" : ""}`}
                    />
                    {errors.message && (
                      <p className="font-inter text-xs text-red-400">{errors.message}</p>
                    )}
                  </div>

                  {errors.submit && (
                    <p className="font-inter text-sm text-red-400">{errors.submit}</p>
                  )}
                  {status === "sent" && (
                    <p className="font-inter text-sm text-[#7DC553]">
                      Enquiry sent. Our team will get back to you shortly.
                    </p>
                  )}

                  <button
                    type="submit"
                    disabled={status === "sending"}
                    className="btn-green mt-2 flex h-11 w-full items-center justify-center font-inter text-sm font-semibold tracking-[0.04em] text-white disabled:opacity-70"
                  >
                    {status === "sending" ? "Sending..." : "Send Enquiry"}
                  </button>
                </form>
              </div>
            </RevealRight>
          </div>
        </div>
      </Reveal>
    </section>
  )
}
