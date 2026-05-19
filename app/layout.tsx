import "./globals.css";
import { Inter } from "next/font/google";
import type { Metadata } from "next";
import CookieConsent from "../components/CookieConsent";

export const metadata: Metadata = {
  title: "L.I Leads Imobiliários — Tráfego Pago para o Mercado Imobiliário",
  description: "Gestão estratégica de tráfego pago no Meta + Social Media para corretores e imobiliárias que querem resultados reais, sem enrolação.",
  keywords: ["tráfego pago", "mercado imobiliário", "leads imobiliários", "corretores de imóveis", "marketing imobiliário", "gestão de anúncios", "meta ads imobiliária"],
  openGraph: {
    title: "L.I Leads Imobiliários — Tráfego Pago",
    description: "Gestão estratégica de tráfego pago no Meta + Social Media para corretores e imobiliárias que querem resultados reais.",
    url: "https://www.lileads.com.br", // Troque pelo seu domínio oficial futuramente
    siteName: "L.I Leads Imobiliários",
    locale: "pt_BR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "L.I Leads Imobiliários",
    description: "Gestão estratégica de tráfego pago para o mercado imobiliário.",
  },
  icons: {
    icon: "/images/favicon.ico",
  },
  robots: "index, follow",
};

const inter = Inter({ subsets: ["latin"], display: "swap" });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR" suppressHydrationWarning className={inter.className}>
      <body suppressHydrationWarning className="antialiased text-slate-900 bg-slate-50 selection:bg-fuchsia-200 selection:text-fuchsia-900">
        {children}
        <CookieConsent />
      </body>
    </html>
  );
}