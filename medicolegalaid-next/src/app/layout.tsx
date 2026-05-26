import type { Metadata } from "next";
import { Playfair_Display, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import Providers from "@/components/Providers";
import { Toaster } from "@/components/ui/sonner";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-serif",
  display: "swap",
});

const plusJakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

export const metadata: Metadata = {
  title: "MedicoLegalAid — Medico-Legal Masters Course for Indian Doctors",
  description: "Protect your medical practice and reputation. Practical, case-based masterclasses on consent, documentation, consumer court, and legal issues for Indian doctors by Dr. Vinaykumar S.",
  keywords: ["medicolegal", "medical law India", "doctor defense", "medical negligence", "consent form", "medical documentation", "consumer court doctor"],
  metadataBase: new URL("https://medicolegalaid.com"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "MedicoLegalAid — Protect Your Practice & Reputation",
    description: "Case-based masterclasses on consent, documentation, consumer court, and legal defense for Indian doctors.",
    url: "https://medicolegalaid.com",
    siteName: "MedicoLegalAid",
    images: [
      {
        url: "/logo.png",
        width: 800,
        height: 800,
        alt: "MedicoLegalAid Logo",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary",
    title: "MedicoLegalAid — Protect Your Practice & Reputation",
    description: "Case-based masterclasses on consent, documentation, consumer court, and legal defense for Indian doctors.",
    images: ["/logo.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "MedicoLegalAid",
    "url": "https://medicolegalaid.com",
    "logo": "https://medicolegalaid.com/logo.png",
    "sameAs": [
      "https://wa.me/919108764680"
    ],
    "contactPoint": {
      "@type": "ContactPoint",
      "telephone": "+919108764680",
      "contactType": "customer service",
      "areaServed": "IN"
    }
  };

  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body
        className={`${plusJakarta.variable} ${playfair.variable} font-sans antialiased bg-background text-foreground`}
      >
        <Providers>
          <Navbar />
          <main className="min-h-screen">
            {children}
          </main>
          <Footer />
          <WhatsAppButton />
          <Toaster />
        </Providers>
      </body>
    </html>
  );
}
