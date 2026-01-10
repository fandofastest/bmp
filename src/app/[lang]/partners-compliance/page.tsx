import { Container } from "@/components/Container";
import { Section } from "@/components/Section";
import { getCopy } from "@/lib/content";
import { isLang, type Lang } from "@/lib/i18n";

function PartnerMark({ name }: { name: string }) {
  const letters = name
    .replace(/[^A-Za-z0-9 ]/g, " ")
    .split(/\s+/)
    .filter(Boolean)
    .slice(0, 2)
    .map((p) => p[0]?.toUpperCase())
    .join("");

  return (
    <div className="flex items-center gap-4">
      <div className="relative grid h-12 w-12 place-items-center rounded-2xl border border-bmp-gold/40 bg-white">
        <span className="absolute -right-2 -top-2 h-6 w-6 rounded-full border border-bmp-gold/30" />
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          aria-hidden="true"
          className="text-bmp-maroon"
        >
          <path
            d="M6 14c2.2-3.7 4.8-5.5 7.8-5.5 2.4 0 4.5 1 6.2 3"
            stroke="currentColor"
            strokeWidth="1.6"
            strokeLinecap="round"
          />
          <path
            d="M6 17c2.6-2.5 5.3-3.7 8.2-3.7 2 0 3.9.6 5.8 1.9"
            stroke="currentColor"
            strokeWidth="1.6"
            strokeLinecap="round"
          />
          <path
            d="M7 7h10"
            stroke="#C9A14A"
            strokeWidth="1.8"
            strokeLinecap="round"
          />
        </svg>
      </div>

      <div className="min-w-0">
        <p className="font-heading truncate text-base font-semibold text-zinc-950">
          {name}
        </p>
        <p className="mt-1 inline-flex items-center gap-2 text-xs font-semibold tracking-wide text-zinc-600">
          <span className="grid h-5 w-8 place-items-center rounded-full border border-zinc-200 bg-white">
            {letters || "OK"}
          </span>
          <span className="truncate">Official partner / compliance</span>
        </p>
      </div>
    </div>
  );
}

export default async function PartnersCompliancePage({
  params,
}: {
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;
  if (!isLang(lang)) return null;

  const typedLang = lang as Lang;
  const copy = getCopy(typedLang);

  return (
    <Container>
      <Section title={copy.partnersCompliance.title} eyebrow={copy.companyName}>
        <p className="max-w-3xl text-sm leading-6 text-zinc-700">
          {copy.partnersCompliance.subtitle}
        </p>

        <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {copy.partnersCompliance.items.map((p) => (
            <div
              key={p.name}
              className="rounded-2xl border border-zinc-200 bg-white p-6 shadow-sm"
            >
              <PartnerMark name={p.name} />
              <p className="mt-3 text-sm text-zinc-700">{p.note}</p>
            </div>
          ))}
        </div>

        <div className="mt-10 rounded-2xl border border-dashed border-bmp-gold/40 bg-white p-6 text-sm text-zinc-700">
          {typedLang === "en"
            ? "Generic logo-style placeholders are used here. If you have official partner/compliance logos (and permission to use them), place files in /public and we can switch to the originals."
            : "Di sini menggunakan placeholder logo bergaya profesional (bukan logo resmi). Jika Anda memiliki logo resmi mitra/kepatuhan (dan memiliki izin pemakaian), taruh file di /public lalu kita bisa ganti ke logo aslinya."}
        </div>
      </Section>
    </Container>
  );
}
