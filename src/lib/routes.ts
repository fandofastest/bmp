import type { Lang } from "./i18n";

export function withLang(lang: Lang, path: string) {
  const normalized = path.startsWith("/") ? path : `/${path}`;
  return `/${lang}${normalized === "/" ? "" : normalized}`;
}

export const ROUTES = {
  home: "/",
  about: "/about",
  visionMission: "/vision-mission",
  services: "/services",
  milestones: "/milestones",
  partnersCompliance: "/partners-compliance",
  contact: "/contact",
} as const;
