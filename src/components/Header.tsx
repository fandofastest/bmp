import Link from "next/link";
import type { Lang } from "@/lib/i18n";
import { otherLang } from "@/lib/i18n";
import { ROUTES, withLang } from "@/lib/routes";
import type { SiteCopy } from "@/lib/content";
import { Container } from "./Container";
import { Logo } from "./Logo";
import { MobileNav } from "./MobileNav";

export function Header({ lang, copy }: { lang: Lang; copy: SiteCopy }) {
  const altLang = otherLang(lang);

  return (
    <header className="sticky top-0 z-40 border-b border-zinc-200/70 bg-white/85 backdrop-blur">
      <Container>
        <div className="flex h-16 items-center justify-between gap-4">
          <Logo lang={lang} />

          <MobileNav lang={lang} copy={copy} />

          <nav className="hidden items-center gap-6 text-sm font-medium text-zinc-700 lg:flex">
            <Link
              className="whitespace-nowrap transition-colors hover:text-zinc-950"
              href={withLang(lang, ROUTES.home)}
            >
              {copy.nav.home}
            </Link>
            <Link
              className="whitespace-nowrap transition-colors hover:text-zinc-950"
              href={withLang(lang, ROUTES.about)}
            >
              {copy.nav.about}
            </Link>
            <Link
              className="whitespace-nowrap transition-colors hover:text-zinc-950"
              href={withLang(lang, ROUTES.visionMission)}
            >
              {copy.nav.visionMission}
            </Link>
            <Link
              className="whitespace-nowrap transition-colors hover:text-zinc-950"
              href={withLang(lang, ROUTES.services)}
            >
              {copy.nav.services}
            </Link>
            <Link
              className="whitespace-nowrap transition-colors hover:text-zinc-950"
              href={withLang(lang, ROUTES.milestones)}
            >
              {copy.nav.milestones}
            </Link>
            <Link
              className="whitespace-nowrap transition-colors hover:text-zinc-950"
              href={withLang(lang, ROUTES.partnersCompliance)}
            >
              {copy.nav.partnersCompliance}
            </Link>
            <Link
              className="whitespace-nowrap transition-colors hover:text-zinc-950"
              href={withLang(lang, ROUTES.contact)}
            >
              {copy.nav.contact}
            </Link>
          </nav>

          <div className="flex items-center gap-3">
            <Link
              href={withLang(altLang, ROUTES.home)}
              className="inline-flex items-center justify-center rounded-full border border-zinc-200 bg-white px-3 py-1.5 text-xs font-semibold tracking-wide text-zinc-800 transition-colors hover:border-bmp-gold/50 hover:bg-zinc-50"
              aria-label={lang === "id" ? "Switch to English" : "Ganti ke Bahasa Indonesia"}
            >
              {lang === "id" ? "EN" : "ID"}
            </Link>
            <Link
              href={withLang(lang, ROUTES.contact)}
              className="hidden rounded-full bg-bmp-maroon px-4 py-2 text-xs font-semibold tracking-wide text-white shadow-sm shadow-bmp-maroon/20 transition-colors hover:bg-bmp-maroon/90 sm:inline-flex"
            >
              {copy.nav.contact}
            </Link>
          </div>
        </div>
      </Container>
    </header>
  );
}
