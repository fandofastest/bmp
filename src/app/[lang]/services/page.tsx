import Image from "next/image";
import { Container } from "@/components/Container";
import { Section } from "@/components/Section";
import { getCopy } from "@/lib/content";
import { isLang, type Lang } from "@/lib/i18n";

const SERVICE_ICON_SRC = [
  "/icons/service-minyak-goreng.svg",
  "/icons/service-amdk.svg",
  "/icons/service-gula.svg",
  "/icons/service-beras.svg",
  "/icons/service-tepung.svg",
] as const;

export default async function ServicesPage({
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
      <Section title={copy.services.title} eyebrow={copy.companyName}>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {copy.services.items.map((item, idx) => (
            <article
              key={item}
              className="group rounded-2xl border border-zinc-200 bg-white p-6 shadow-sm transition-transform hover:-translate-y-0.5"
            >
              <div className="flex items-start gap-4">
                <div className="mt-0.5 inline-flex h-16 w-16 items-center justify-center rounded-full border border-bmp-gold/35 bg-white transition-colors group-hover:border-bmp-gold/60">
                  <Image
                    src={SERVICE_ICON_SRC[idx] ?? SERVICE_ICON_SRC[0]}
                    alt=""
                    width={64}
                    height={64}
                  />
                </div>
                <div>
                  <h3 className="font-heading text-base font-semibold text-zinc-950">
                    {item}
                  </h3>
                  <p className="mt-2 text-sm leading-6 text-zinc-700">
                    {typedLang === "en"
                      ? "Planning, development, and partnership-based execution for industrial packaging facilities."
                      : "Perencanaan, pembangunan, dan pelaksanaan berbasis kemitraan untuk fasilitas kemasan industri."}
                  </p>
                </div>
              </div>
            </article>
          ))}
        </div>
      </Section>
    </Container>
  );
}
