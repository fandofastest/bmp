"use client";

import { useEffect, useMemo, useState } from "react";
import Link from "next/link";
import type { Lang } from "@/lib/i18n";
import { ROUTES, withLang } from "@/lib/routes";
import type { SiteCopy } from "@/lib/content";

function MenuIcon({ open }: { open: boolean }) {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
      className="text-zinc-900"
    >
      {open ? (
        <>
          <path d="M6 6l12 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
          <path d="M18 6L6 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
        </>
      ) : (
        <>
          <path d="M4 7h16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
          <path d="M4 12h16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
          <path d="M4 17h16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
        </>
      )}
    </svg>
  );
}

export function MobileNav({ lang, copy }: { lang: Lang; copy: SiteCopy }) {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (!open) return;
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [open]);

  const items = useMemo(
    () => [
      { href: ROUTES.home, label: copy.nav.home },
      { href: ROUTES.about, label: copy.nav.about },
      { href: ROUTES.visionMission, label: copy.nav.visionMission },
      { href: ROUTES.services, label: copy.nav.services },
      { href: ROUTES.milestones, label: copy.nav.milestones },
      { href: ROUTES.partnersCompliance, label: copy.nav.partnersCompliance },
      { href: ROUTES.contact, label: copy.nav.contact },
    ],
    [copy],
  );

  return (
    <div className="lg:hidden">
      <button
        type="button"
        className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-zinc-200 bg-white shadow-sm"
        aria-label={open ? "Close menu" : "Open menu"}
        aria-expanded={open}
        onClick={() => setOpen((v) => !v)}
      >
        <MenuIcon open={open} />
      </button>

      {open ? (
        <>
          <button
            type="button"
            className="fixed inset-0 z-40 bg-black/30"
            aria-label="Close menu overlay"
            onClick={() => setOpen(false)}
          />
          <div className="fixed left-0 right-0 top-16 z-50 border-b border-zinc-200 bg-white shadow-lg">
            <div className="mx-auto w-full max-w-6xl px-5 py-4">
              <nav className="grid gap-1">
                {items.map((item) => (
                  <Link
                    key={item.href}
                    href={withLang(lang, item.href)}
                    className="rounded-xl px-3 py-2 text-sm font-semibold text-zinc-900 transition-colors hover:bg-zinc-50"
                    onClick={() => setOpen(false)}
                  >
                    {item.label}
                  </Link>
                ))}
              </nav>
            </div>
          </div>
        </>
      ) : null}
    </div>
  );
}
