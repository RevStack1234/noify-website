import { useState, type FormEvent } from "react"
import { motion } from "motion/react"
import { Reveal } from "../motion/Reveal"

const formFields = [
  { key: "companyName", label: "Company Entity / Registration Legal Name", type: "text" },
  { key: "application", label: "Target Application Grid", type: "text" },
  { key: "orderVolume", label: "Estimated Order Volume", type: "text" },
  { key: "email", label: "Direct Procurement Officer Corporate Email", type: "email" },
] as const

type FieldKey = (typeof formFields)[number]["key"]

type FormState = Record<FieldKey, string>

const initialForm: FormState = {
  companyName: "",
  application: "",
  orderVolume: "",
  email: "",
}

export function FleetIntegrationSection() {
  const [form, setForm] = useState<FormState>(initialForm)
  const [status, setStatus] = useState<"idle" | "sending" | "sent">("idle")
  const [errors, setErrors] = useState<Partial<Record<FieldKey | "submit", string>>>({})

  const update = (key: FieldKey, value: string) => {
    setForm((prev) => ({ ...prev, [key]: value }))
    setStatus("idle")
    setErrors((prev) => ({ ...prev, [key]: "", submit: "" }))
  }

  const validate = () => {
    const errs: Partial<Record<FieldKey | "submit", string>> = {}

    if (!form.companyName.trim()) errs.companyName = "Company name is required."
    if (!form.application.trim()) errs.application = "Target application is required."
    if (!form.orderVolume.trim()) errs.orderVolume = "Estimated order volume is required."

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!form.email.trim() || !emailRegex.test(form.email.trim()))
      errs.email = "Please enter a valid corporate email address."

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
        enquiry_type: "Commercial Fleet Integration",
        full_name: form.companyName,
        company_name: form.companyName,
        state: "",
        phone: "",
        email: form.email,
        message:
          `Target Application Grid: ${form.application}\n` +
          `Estimated Order Volume: ${form.orderVolume}`,
      }),
    })
      .then((res) => {
        if (!res.ok) throw new Error()
        setStatus("sent")
        setForm(initialForm)
        setErrors({})
      })
      .catch(() => {
        setErrors({ submit: "Failed to send. Please try again." })
        setStatus("idle")
      })
  }

  return (
    <section className="px-4 pb-12 pt-4 sm:px-6 lg:px-[64px] lg:pb-20 lg:pt-6">
      <Reveal>
        <div className="mx-auto flex max-w-[1312px] flex-col items-center rounded-2xl border border-white/30 bg-[#111111] px-4 py-8 sm:px-6 sm:py-10 lg:min-h-[617px] lg:justify-center lg:px-16 lg:py-14">
          <div className="flex w-full max-w-[1045px] flex-col items-center text-center">
            <h2 className="font-jakarta text-[24px] font-extrabold tracking-[0.05em] text-white sm:text-[28px] lg:text-[32px]">
              Initiate Commercial Fleet Integration
            </h2>
            <p className="mt-4 font-inter text-sm tracking-[0.01em] text-[rgba(148,163,184,0.86)] sm:text-base">
              Submit your system requirements to connect with our regional energy engineering
              distribution team. Bulk volume contracts unlock custom logistics timelines and
              dedicated account management support structures.
            </p>
          </div>

          <form
            className="mt-8 w-full max-w-[1045px] sm:mt-10 lg:mt-12"
            onSubmit={onSubmit}
          >

            <div className="grid grid-cols-1 items-start gap-x-6 gap-y-6 sm:gap-y-8 lg:grid-cols-[auto_minmax(0,1fr)] lg:gap-y-10">
              {formFields.map((field) => (
                <div key={field.key} className="contents">
                  <label className="font-jakarta text-sm tracking-[0.04em] text-white sm:text-base lg:whitespace-nowrap lg:text-lg lg:tracking-[0.05em] lg:pt-1">
                    {field.label}
                  </label>
                  <div className="flex w-full min-w-0 flex-col gap-1">
                    <input
                      type={field.type}
                      aria-label={field.label}
                      value={form[field.key]}
                      onChange={(e) => update(field.key, e.target.value)}
                      className={`h-8 w-full min-w-0 border-0 border-b bg-transparent font-jakarta text-base text-white outline-none focus:border-white/60 lg:h-7 ${errors[field.key] ? "border-red-500/70" : "border-white/30"}`}
                    />
                    {errors[field.key] && (
                      <p className="font-inter text-xs text-red-400">{errors[field.key]}</p>
                    )}
                  </div>
                </div>
              ))}
            </div>

            {errors.submit && (
              <p className="mt-6 text-center font-inter text-sm text-red-400">{errors.submit}</p>
            )}
            {status === "sent" && (
              <p className="mt-6 text-center font-inter text-sm text-[#7DC553]">
                Proposal submitted. Our distribution team will get back to you shortly.
              </p>
            )}

            <div className="mt-10 flex justify-center lg:mt-16">
              <motion.button
                type="submit"
                disabled={status === "sending"}
                className="btn-green flex h-12 w-full max-w-[456px] items-center justify-center rounded-lg px-4 font-jakarta text-sm font-bold tracking-[0.05em] text-white disabled:opacity-70 sm:text-base lg:text-lg"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                {status === "sending" ? "SUBMITTING..." : "SUBMIT TECHNICAL PROPOSAL"}
              </motion.button>
            </div>
          </form>
        </div>
      </Reveal>
    </section>
  )
}
