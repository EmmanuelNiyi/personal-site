import type { Metadata } from "next";
import { Inter, Space_Grotesk } from "next/font/google";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { WaterBackground } from "@/components/water-background";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: {
    default: "Emmanuel Niyi-Oriolowo",
    template: "%s · Emmanuel Niyi-Oriolowo",
  },
  description:
    "Data scientist working in healthcare. Medical doctor with software engineering experience and an applied machine learning focus.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className={`${inter.variable} ${spaceGrotesk.variable}`}>
      <body>
        <WaterBackground />
        <SiteHeader />
        <main className="main">{children}</main>
        <SiteFooter />
      </body>
    </html>
  );
}
