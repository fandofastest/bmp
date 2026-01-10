"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

function normalize(path: string) {
  if (path.length > 1 && path.endsWith("/")) return path.slice(0, -1);
  return path;
}

export function NavLink({
  href,
  children,
  className,
  activeClassName,
  exact,
  onClick,
}: {
  href: string;
  children: React.ReactNode;
  className?: string;
  activeClassName?: string;
  exact?: boolean;
  onClick?: () => void;
}) {
  const pathname = usePathname();
  const current = normalize(pathname ?? "");
  const target = normalize(href);

  const isActive = exact ? current === target : current === target || current.startsWith(`${target}/`);

  const merged = `${className ?? ""} ${isActive ? activeClassName ?? "" : ""}`.trim();

  return (
    <Link href={href} className={merged} aria-current={isActive ? "page" : undefined} onClick={onClick}>
      {children}
    </Link>
  );
}
