import { motion, useReducedMotion } from "motion/react"

const WHATSAPP_NUMBER = "918369457406"
const WHATSAPP_URL = `https://wa.me/${WHATSAPP_NUMBER}`

function WhatsAppIcon({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 32 32"
      fill="currentColor"
      aria-hidden
    >
      <path d="M16.04 3C9.37 3 3.96 8.4 3.96 15.07c0 2.12.56 4.18 1.62 6.01L3.5 28.5l7.63-2.01a12.05 12.05 0 0 0 4.91 1.05h.01c6.67 0 12.08-5.4 12.08-12.07C28.13 8.4 22.71 3 16.04 3zm0 22.07h-.01a10.03 10.03 0 0 1-5.11-1.4l-.37-.22-4.53 1.19 1.21-4.41-.24-.38a10.01 10.01 0 0 1-1.54-5.35c0-5.54 4.51-10.05 10.06-10.05 5.54 0 10.05 4.51 10.05 10.05 0 5.54-4.51 10.07-10.05 10.07zm5.52-7.52c-.3-.15-1.78-.88-2.06-.98-.27-.1-.47-.15-.67.15-.2.3-.77.98-.95 1.18-.17.2-.35.22-.65.07-.3-.15-1.26-.46-2.4-1.48-.89-.79-1.49-1.77-1.66-2.07-.17-.3-.02-.46.13-.61.13-.13.3-.35.45-.52.15-.17.2-.3.3-.5.1-.2.05-.37-.02-.52-.08-.15-.67-1.61-.92-2.21-.24-.58-.49-.5-.67-.51h-.57c-.2 0-.52.07-.79.37-.27.3-1.04 1.02-1.04 2.48s1.07 2.88 1.22 3.08c.15.2 2.1 3.21 5.09 4.5.71.31 1.27.49 1.7.63.72.23 1.37.2 1.89.12.58-.09 1.78-.73 2.03-1.43.25-.7.25-1.3.17-1.43-.07-.12-.27-.2-.57-.35z" />
    </svg>
  )
}

export function WhatsAppFloat() {
  const reduce = useReducedMotion()

  return (
    <motion.a
      href={WHATSAPP_URL}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat on WhatsApp"
      className="safe-float fixed z-[100] flex h-12 w-12 items-center justify-center rounded-full bg-[#25D366] text-white shadow-[0_8px_28px_rgba(37,211,102,0.45)] transition-shadow hover:shadow-[0_10px_32px_rgba(37,211,102,0.6)] sm:h-14 sm:w-14 md:h-[60px] md:w-[60px]"
      initial={reduce ? false : { opacity: 0, scale: 0.7, y: 16 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      transition={{ delay: 0.6, duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
      whileHover={reduce ? undefined : { scale: 1.08 }}
      whileTap={{ scale: 0.95 }}
    >
      {!reduce && (
        <span className="pointer-events-none absolute inset-0 animate-ping rounded-full bg-[#25D366]/35 [animation-duration:2.4s]" />
      )}
      <WhatsAppIcon className="relative z-10 h-6 w-6 sm:h-7 sm:w-7 md:h-8 md:w-8" />
    </motion.a>
  )
}
