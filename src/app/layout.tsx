import type { Metadata } from "next";
import type { Viewport } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";

const fontSans = Inter({
  variable: "--font-sans",
  subsets: ["latin"],
});

const fontSerif = Playfair_Display({
  variable: "--font-serif",
  subsets: ["latin"],
});

const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL ??
  process.env.VERCEL_URL ??
  "http://localhost:3000";

export const metadata: Metadata = {
  title: {
    default: "PT Brilliand Makmur Perkasa (BMP)",
    template: "%s | PT Brilliand Makmur Perkasa (BMP)",
  },
  description:
    "Corporate profile of PT Brilliand Makmur Perkasa (BMP) focused on UMKM development, industrial packaging plants, food & beverage supply chain, and strategic partnerships.",
  metadataBase: new URL(
    siteUrl.startsWith("http") ? siteUrl : `https://${siteUrl}`,
  ),
  verification: {
    google: "_kePZkMqyFu84u7EWdJgz2Z-osvgQ2ACIPTqE9taWEQ",
  },
};

export const viewport: Viewport = {
  colorScheme: "light",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id" className={`${fontSans.variable} ${fontSerif.variable}`}>
      <body
        className="min-h-screen bg-white text-zinc-950 antialiased"
      >
        {children}
      </body>
    </html>
  );
}
