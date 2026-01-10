import type { Lang } from "@/lib/i18n";
import type { SiteCopy } from "@/lib/content";
import { Container } from "./Container";

export function Footer({ copy }: { lang: Lang; copy: SiteCopy }) {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-zinc-200/80 bg-white">
      <Container>
        <div className="grid gap-4 py-10 sm:grid-cols-2 sm:items-center">
          <div>
            <p className="font-heading text-sm font-semibold text-zinc-950">
              {copy.companyName}
            </p>
            <p className="mt-1 text-xs text-zinc-600">{copy.footerStatement}</p>
          </div>
          <p className="text-xs text-zinc-600 sm:text-right">
            © {year} {copy.companyName}. All rights reserved.
          </p>
        </div>
      </Container>
    </footer>
  );
}
