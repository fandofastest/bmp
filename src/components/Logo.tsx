import Image from "next/image";
import Link from "next/link";
import type { Lang } from "@/lib/i18n";
import { withLang } from "@/lib/routes";

export function Logo({ lang }: { lang: Lang }) {
  return (
    <Link
      href={withLang(lang, "/")}
      className="inline-flex items-center gap-3"
      aria-label="PT Brilliand Makmur Perkasa (BMP)"
    >
      <span className="relative grid h-10 w-10 place-items-center">
        <span className="absolute inset-0 rounded-full border border-bmp-gold/40" />
        <span className="absolute inset-1 rounded-full border border-bmp-gold/20" />
        <Image
          src="/logo.jpeg"
          alt="BMP logo"
          width={40}
          height={40}
          priority
          className="rounded-full object-cover"
        />
      </span>
      <span className="leading-tight">
        <span className="block font-heading text-base font-semibold tracking-tight text-zinc-950">
          PT Brilliand Makmur Perkasa
        </span>
        <span className="block text-xs font-medium tracking-[0.2em] text-bmp-maroon/80">
          BMP
        </span>
      </span>
    </Link>
  );
}
