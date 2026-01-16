import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  const siteUrl =
    process.env.NEXT_PUBLIC_SITE_URL ?? "https://www.brilliandmp.co.id";

  const base = siteUrl.startsWith("http") ? siteUrl : `https://${siteUrl}`;

  return {
    rules: {
      userAgent: "*",
      allow: "/",
    },
    sitemap: `${base}/sitemap.xml`,
  };
}
