import { Container } from "@/components/Container";
import { Section } from "@/components/Section";
import { getCopy } from "@/lib/content";
import { isLang, type Lang } from "@/lib/i18n";

export default async function AboutPage({
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
      <Section title={copy.about.title} eyebrow={copy.companyName}>
        <div className="grid gap-8 lg:grid-cols-12 lg:items-start">
          <div className="lg:col-span-8">
            <p className="text-base leading-7 text-zinc-700">
              {copy.about.description}
            </p>

            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              <div className="rounded-2xl border border-zinc-200 bg-white p-6 shadow-sm">
                <p className="font-heading text-base font-semibold text-zinc-950">
                  {copy.about.visionTitle}
                </p>
                <p className="mt-2 text-sm leading-6 text-zinc-700">
                  {typedLang === "en"
                    ? "Driving transformation with integrity and measurable impact."
                    : "Mendorong transformasi dengan integritas dan dampak yang terukur."}
                </p>
              </div>
              <div className="rounded-2xl border border-zinc-200 bg-white p-6 shadow-sm">
                <p className="font-heading text-base font-semibold text-zinc-950">
                  {copy.about.missionTitle}
                </p>
                <p className="mt-2 text-sm leading-6 text-zinc-700">
                  {typedLang === "en"
                    ? "Building capability, access, and partnerships for UMKM growth."
                    : "Membangun kapasitas, akses, dan kemitraan untuk pertumbuhan UMKM."}
                </p>
              </div>
            </div>
          </div>

          <aside className="lg:col-span-4">
            <div className="rounded-2xl border border-zinc-200 bg-white p-6 shadow-sm">
              <p className="text-xs font-semibold tracking-[0.22em] text-bmp-maroon/90">
                {typedLang === "en" ? "Established" : "Didirikan"}
              </p>
              <p className="mt-2 font-heading text-2xl font-semibold text-zinc-950">
                2023
              </p>
              <p className="mt-4 text-sm leading-6 text-zinc-700">
                {typedLang === "en"
                  ? "Focused on coaching and managing professional UMKM partners with clear business targets."
                  : "Berfokus pada pembinaan dan pengelolaan mitra UMKM profesional dengan target usaha yang jelas."}
              </p>
            </div>
          </aside>
        </div>
      </Section>
    </Container>
  );
}
