import Link from "next/link";
import { Container } from "@/components/Container";
import { ContactForm } from "@/components/ContactForm";
import { Section } from "@/components/Section";
import { getCopy } from "@/lib/content";
import { isLang, type Lang } from "@/lib/i18n";

export default async function ContactPage({
  params,
}: {
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;
  if (!isLang(lang)) return null;

  const typedLang = lang as Lang;
  const copy = getCopy(typedLang);

  const email = "briliandmakmurperkasa@gmail.com";
  const phone = "088283317272";
  const social = "@PT_BMP";
  const coords = { lat: 0.4740661, lng: 101.4348907 };
  const mapsUrl = `https://www.google.com/maps?q=${coords.lat},${coords.lng}&z=17&hl=${typedLang}`;

  return (
    <Container>
      <Section title={copy.contact.title} eyebrow={copy.companyName}>
        <p className="max-w-3xl text-sm leading-6 text-zinc-700">
          {copy.contact.subtitle}
        </p>

        <div className="mt-8 grid gap-6 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <div className="grid gap-4">
              <div className="rounded-2xl border border-zinc-200 bg-white p-6 shadow-sm">
                <p className="text-xs font-semibold tracking-[0.22em] text-bmp-maroon/90">
                  {copy.contact.emailLabel}
                </p>
                <Link
                  href={`mailto:${email}`}
                  className="mt-2 inline-flex text-sm font-semibold text-zinc-950 hover:underline"
                >
                  {email}
                </Link>
              </div>

              <div className="rounded-2xl border border-zinc-200 bg-white p-6 shadow-sm">
                <p className="text-xs font-semibold tracking-[0.22em] text-bmp-maroon/90">
                  {copy.contact.phoneLabel}
                </p>
                <Link
                  href={`https://wa.me/62${phone.replace(/^0/, "")}`}
                  className="mt-2 inline-flex text-sm font-semibold text-zinc-950 hover:underline"
                  target="_blank"
                  rel="noreferrer"
                >
                  {phone}
                </Link>
              </div>

              <div className="rounded-2xl border border-zinc-200 bg-white p-6 shadow-sm">
                <p className="text-xs font-semibold tracking-[0.22em] text-bmp-maroon/90">
                  {copy.contact.socialLabel}
                </p>
                <p className="mt-2 text-sm font-semibold text-zinc-950">{social}</p>
              </div>

              <div className="rounded-2xl border border-zinc-200 bg-white p-6 shadow-sm">
                <p className="text-xs font-semibold tracking-[0.22em] text-bmp-maroon/90">
                  {typedLang === "en" ? "Office Location" : "Lokasi Kantor"}
                </p>
                <Link
                  href={mapsUrl}
                  className="mt-2 inline-flex text-sm font-semibold text-zinc-950 hover:underline"
                  target="_blank"
                  rel="noreferrer"
                >
                  {typedLang === "en" ? "Open in Google Maps" : "Buka di Google Maps"}
                </Link>
              </div>
            </div>
          </div>

          <div className="lg:col-span-7">
            <ContactForm copy={copy} />

            <div className="mt-6 overflow-hidden rounded-2xl border border-zinc-200 bg-white shadow-sm">
              <div className="aspect-[16/10] w-full">
                <iframe
                  title={typedLang === "en" ? "Office location map" : "Peta lokasi kantor"}
                  src={`https://www.google.com/maps?q=${coords.lat},${coords.lng}&z=17&output=embed`}
                  width="100%"
                  height="100%"
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  style={{ border: 0 }}
                />
              </div>
            </div>
          </div>
        </div>
      </Section>
    </Container>
  );
}
