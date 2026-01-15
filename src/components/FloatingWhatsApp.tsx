import type { Lang } from "@/lib/i18n";

function WhatsAppIcon() {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <path
        d="M20.7 11.9c0 4.8-3.9 8.7-8.7 8.7-1.5 0-3-.4-4.3-1.1L3.3 20.7l1.2-4.2c-.7-1.3-1.1-2.8-1.1-4.3C3.4 7.1 7.2 3.3 12 3.3c4.8 0 8.7 3.9 8.7 8.6Z"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinejoin="round"
      />
      <path
        d="M9.2 8.6c.2-.4.4-.5.8-.5h.6c.2 0 .4.1.5.4l.8 1.9c.1.3.1.5-.1.7l-.5.6c-.1.2-.2.3-.1.5.3.7 1.3 1.9 2.6 2.4.2.1.4 0 .5-.1l.7-.8c.2-.2.4-.3.7-.2l2 .8c.3.1.4.3.4.6v.6c0 .4-.2.6-.5.8-.6.4-1.7.8-2.9.5-1.8-.4-3.4-1.8-4.6-3.2-1.3-1.6-2.1-3.6-1.6-5 .1-.5.5-1.1.6-1.4Z"
        fill="currentColor"
        opacity="0.9"
      />
    </svg>
  );
}

export function FloatingWhatsApp({ lang }: { lang: Lang }) {
  const phoneDisplay = "+62 822-8331-7272";
  const waNumber = "6282283317272";

  const label =
    lang === "en" ? "Chat via WhatsApp" : "Hubungi via WhatsApp";

  return (
    <a
      href={`https://wa.me/${waNumber}`}
      target="_blank"
      rel="noreferrer"
      aria-label={label}
      className="fixed bottom-5 right-5 z-50 inline-flex items-center gap-2 rounded-full border border-bmp-gold/40 bg-bmp-maroon px-4 py-3 text-sm font-semibold text-white shadow-lg shadow-bmp-maroon/25 transition-transform hover:-translate-y-0.5 hover:bg-bmp-maroon/90 focus:outline-none focus:ring-2 focus:ring-bmp-gold"
    >
      <span className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-white/10">
        <WhatsAppIcon />
      </span>
      <span className="hidden sm:inline">{label}</span>
      <span className="hidden md:inline text-white/80">{phoneDisplay}</span>
    </a>
  );
}
