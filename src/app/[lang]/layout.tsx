import type { Metadata } from "next";
import { notFound } from "next/navigation";
import type { ReactNode } from "react";
import { Footer } from "@/components/Footer";
import { FloatingWhatsApp } from "@/components/FloatingWhatsApp";
import { Header } from "@/components/Header";
import { getCopy } from "@/lib/content";
import { isLang, SUPPORTED_LANGS, type Lang } from "@/lib/i18n";

export function generateStaticParams() {
  return SUPPORTED_LANGS.map((lang) => ({ lang }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ lang: string }>;
}): Promise<Metadata> {
  const { lang } = await params;
  if (!isLang(lang)) return {};

  const copy = getCopy(lang);
  const title =
    lang === "en" ? "Corporate Profile" : "Profil Perusahaan";

  return {
    title,
    description:
      lang === "en"
        ? "Corporate profile website of PT Brilliand Makmur Perkasa (BMP)."
        : "Website profil perusahaan PT Brilliand Makmur Perkasa (BMP).",
    alternates: {
      languages: {
        id: "/id",
        en: "/en",
      },
    },
    openGraph: {
      title: `${title} | ${copy.companyName}`,
      description:
        lang === "en"
          ? "Strategic partnerships for UMKM development and industrial packaging."
          : "Kemitraan strategis untuk pengembangan UMKM dan pabrik kemasan industri.",
      locale: lang === "en" ? "en_US" : "id_ID",
      type: "website",
    },
  };
}

export default async function LangLayout({
  children,
  params,
}: {
  children: ReactNode;
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;
  if (!isLang(lang)) notFound();

  const typedLang = lang as Lang;
  const copy = getCopy(typedLang);

  return (
    <div className="min-h-screen">
      <Header lang={typedLang} copy={copy} />
      <main>{children}</main>
      <FloatingWhatsApp lang={typedLang} />
      <Footer lang={typedLang} copy={copy} />
    </div>
  );
}
