export type Lang = "id" | "en";

export const SUPPORTED_LANGS: Lang[] = ["id", "en"];

export function isLang(value: string): value is Lang {
  return (SUPPORTED_LANGS as readonly string[]).includes(value);
}

export function otherLang(lang: Lang): Lang {
  return lang === "id" ? "en" : "id";
}
