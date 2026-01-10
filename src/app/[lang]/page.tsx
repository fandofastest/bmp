import Image from "next/image";
import Link from "next/link";
import { Container } from "@/components/Container";
import { Section } from "@/components/Section";
import { getCopy } from "@/lib/content";
import { isLang, type Lang } from "@/lib/i18n";
import { ROUTES, withLang } from "@/lib/routes";

const FOCUS_ICON_SRC = [
  "/icons/umkm.svg",
  "/icons/factory.svg",
  "/icons/supply-chain.svg",
  "/icons/partnership.svg",
] as const;

export default async function LangHome({
  params,
}: {
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;
  if (!isLang(lang)) return null;

  const typedLang = lang as Lang;
  const copy = getCopy(typedLang);

  return (
    <>
      <section className="relative overflow-hidden bg-white">
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute -top-24 -right-24 h-72 w-72 rounded-full border border-bmp-gold/30" />
          <div className="absolute top-24 -right-8 h-44 w-44 rounded-full border border-bmp-gold/15" />
          <div className="absolute -bottom-32 -left-28 h-80 w-80 rounded-full border border-bmp-gold/25" />
        </div>

        <Container>
          <div className="grid gap-10 py-14 sm:py-16 lg:grid-cols-12 lg:items-center lg:py-20">
            <div className="animate-fade-up lg:col-span-7">
              <p className="text-xs font-semibold tracking-[0.22em] text-bmp-maroon/90">
                {copy.tagline}
              </p>
              <h1 className="font-heading mt-4 text-3xl font-semibold leading-tight tracking-tight text-zinc-950 sm:text-4xl lg:text-5xl">
                {copy.heroHeadline}
              </h1>
              <p className="mt-5 max-w-2xl text-base leading-7 text-zinc-700">
                {typedLang === "en"
                  ? "BMP is focused on building credible UMKM partnerships and strategic industrial initiatives across packaging plants and the food & beverage supply chain."
                  : "BMP berfokus pada pembangunan kemitraan UMKM yang kredibel dan inisiatif industri strategis pada pengembangan pabrik kemasan serta rantai pasok makanan & minuman."}
              </p>

              <div className="mt-7 flex flex-col gap-3 sm:flex-row">
                <Link
                  href={withLang(typedLang, ROUTES.about)}
                  className="inline-flex h-11 items-center justify-center rounded-xl bg-bmp-maroon px-5 text-sm font-semibold text-white shadow-sm shadow-bmp-maroon/20 transition-colors hover:bg-bmp-maroon/90"
                >
                  {copy.heroCtaAbout}
                </Link>
                <Link
                  href={withLang(typedLang, ROUTES.contact)}
                  className="inline-flex h-11 items-center justify-center rounded-xl border border-zinc-200 bg-white px-5 text-sm font-semibold text-zinc-900 transition-colors hover:border-bmp-gold/50 hover:bg-zinc-50"
                >
                  {copy.heroCtaContact}
                </Link>
              </div>
            </div>

            <div className="lg:col-span-5">
              <div className="relative mx-auto w-full max-w-sm rounded-3xl border border-zinc-200 bg-white p-8 shadow-sm">
                <div className="absolute -top-6 -right-6 h-16 w-16 rounded-full border border-bmp-gold/30" />
                <div className="absolute -bottom-8 -left-8 h-20 w-20 rounded-full border border-bmp-gold/20" />
                <div className="flex items-center justify-center">
                  <Image
                    src="/logo.jpeg"
                    alt="BMP Logo"
                    width={180}
                    height={180}
                    priority
                    className="rounded-3xl object-cover"
                  />
                </div>
                <p className="mt-6 text-center text-sm font-semibold tracking-wide text-zinc-900">
                  {copy.companyName}
                </p>
                <p className="mt-2 text-center text-xs text-zinc-600">
                  {typedLang === "en"
                    ? "Corporate Company Profile"
                    : "Profil Perusahaan"}
                </p>
              </div>
            </div>
          </div>
        </Container>
      </section>

      <Container>
        <Section title={copy.home.focusTitle}>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {copy.home.focusItems.map((item, idx) => (
              <div
                key={item}
                className="rounded-2xl border border-zinc-200 bg-white p-5 shadow-sm transition-transform hover:-translate-y-0.5"
              >
                <div className="mb-3 inline-flex h-14 w-14 items-center justify-center rounded-full border border-bmp-gold/40 bg-white">
                  <Image
                    src={FOCUS_ICON_SRC[idx] ?? FOCUS_ICON_SRC[0]}
                    alt=""
                    width={56}
                    height={56}
                  />
                </div>
                <p className="text-sm font-semibold text-zinc-950">{item}</p>
              </div>
            ))}
          </div>
        </Section>

        <Section title={copy.home.highlightsTitle}>
          <div className="grid gap-4 lg:grid-cols-3">
            {copy.home.highlights.map((h) => (
              <div
                key={h.title}
                className="rounded-2xl border border-zinc-200 bg-white p-6 shadow-sm"
              >
                <p className="font-heading text-base font-semibold text-zinc-950">
                  {h.title}
                </p>
                <p className="mt-2 text-sm leading-6 text-zinc-700">
                  {h.description}
                </p>
              </div>
            ))}
          </div>
        </Section>
      </Container>
    </>
  );
}
