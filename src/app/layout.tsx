import type { Metadata } from "next";
import { Outfit, Inter } from "next/font/google";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { siteConfig, contact } from "@/lib/constants/site";
import "./globals.css";

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
  weight: ["500", "600", "700", "800"],
  display: "swap",
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: `${siteConfig.name} — DJ, Sonido e Iluminación para Eventos`,
    template: `%s | ${siteConfig.name}`,
  },
  description: siteConfig.description,
  keywords: siteConfig.keywords,
  authors: [{ name: siteConfig.name }],
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "48x48" },
      { url: "/icon.png", type: "image/png", sizes: "512x512" },
    ],
    apple: "/apple-icon.png",
  },
  openGraph: {
    type: "website",
    locale: siteConfig.locale,
    url: siteConfig.url,
    siteName: siteConfig.name,
    title: `${siteConfig.name} — DJ, Sonido e Iluminación para Eventos`,
    description: siteConfig.description,
    images: [{ url: "/logo.png", width: 500, height: 500, alt: siteConfig.name }],
  },
  twitter: {
    card: "summary",
    title: `${siteConfig.name} — DJ, Sonido e Iluminación para Eventos`,
    description: siteConfig.description,
    images: ["/logo.png"],
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "EntertainmentBusiness",
  name: siteConfig.name,
  description: siteConfig.description,
  url: siteConfig.url,
  image: `${siteConfig.url}/logo.png`,
  telephone: contact.whatsappDisplay,
  sameAs: [contact.instagram],
  hasMap: contact.maps,
  address: {
    "@type": "PostalAddress",
    addressLocality: siteConfig.location.city,
    addressCountry: "UY",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: siteConfig.location.lat,
    longitude: siteConfig.location.lng,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className={`${outfit.variable} ${inter.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col bg-brand-bg">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <a href="#main-content" className="skip-link">
          Saltar al contenido principal
        </a>
        <Header />
        <main id="main-content" className="flex-1">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
