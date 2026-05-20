import type { Metadata } from "next";
import "./globals.css";
import { SiteNav } from "@/components/SiteNav";
import { SiteFooter } from "@/components/SiteFooter";
import { Reveal } from "@/components/Reveal";

export const metadata: Metadata = {
  metadataBase: new URL("https://kronisksyg.dk"),
  title: {
    default: "Kronisk Syg — AI-band og musikalsk fortælleunivers",
    template: "%s · Kronisk Syg",
  },
  description:
    "Kronisk Syg er et dansk AI-band og musikalsk fortælleunivers om kronisk sygdom, neurodivergens, sårbarhed, værdighed, humor og fællesskab. Hør konceptalbummet ‘Fest i Hvalen’.",
  openGraph: {
    type: "website",
    locale: "da_DK",
    title: "Kronisk Syg — AI-band og musikalsk fortælleunivers",
    description:
      "Velkommen ombord på Fest i Hvalen — et flydende festivalpalads og et fællesskab for alle, der stadig vil synge, grine, danse, hvile og fylde.",
    images: ["/images/hero-ship-1600.webp"],
  },
  twitter: { card: "summary_large_image" },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="da">
      <body className="overflow-x-hidden">
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:fixed focus:top-3 focus:left-3 focus:z-50 focus:bg-ocean-800 focus:px-4 focus:py-2 focus:text-amber-glow focus:shadow-brass"
        >
          Spring til hovedindhold
        </a>
        <SiteNav />
        <Reveal />
        <main id="main">{children}</main>
        <SiteFooter />
      </body>
    </html>
  );
}
