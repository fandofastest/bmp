import type { MetadataRoute } from "next";

const SUPPORTED_LANGS = ["id", "en"] as const;

const PAGES = [
  "",
  "/about",
  "/vision-mission",
  "/services",
  "/milestones",
  "/partners-compliance",
  "/contact",
] as const;

export default function sitemap(): MetadataRoute.Sitemap {
  const siteUrl =
    process.env.NEXT_PUBLIC_SITE_URL ?? "https://www.brilliandmp.co.id";

  const base = siteUrl.startsWith("http") ? siteUrl : `https://${siteUrl}`;

  const lastModified = new Date();

  const urls: MetadataRoute.Sitemap = [];

  urls.push({
    url: `${base}/`,
    lastModified,
    changeFrequency: "weekly",
    priority: 1,
  });

  for (const lang of SUPPORTED_LANGS) {
    for (const page of PAGES) {
      urls.push({
        url: `${base}/${lang}${page}`,
        lastModified,
        changeFrequency: "monthly",
        priority: page === "" ? 0.9 : 0.7,
      });
    }
  }

  return urls;
}
