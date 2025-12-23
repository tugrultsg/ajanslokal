import type { Metadata } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import GoogleAnalytics from "./components/GoogleAnalytics";
import "./globals.css";

const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-plus-jakarta",
  display: "swap",
});

export const metadata: Metadata = {
  title: "ajanslokal - Türkiye'nin Yerel İşletmelerine Dijital Pazarlama Çözümleri",
  description: "Google, Facebook, Instagram ve 60+ platformda işletmenizin görünürlüğünü artırın. Yapay zeka destekli yorum yönetimi, sosyal medya ve SEO hizmetleri.",
  keywords: "dijital pazarlama, yerel seo, google business, sosyal medya yönetimi, yorum yönetimi, işletme listesi",
  openGraph: {
    title: "ajanslokal - Dijital Pazarlama Çözümleri",
    description: "Türk işletmeleri için yapay zeka destekli dijital pazarlama platformu",
    url: "https://ajanslokal.com",
    siteName: "ajanslokal",
    locale: "tr_TR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "ajanslokal - Dijital Pazarlama Çözümleri",
    description: "Türk işletmeleri için yapay zeka destekli dijital pazarlama platformu",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="tr" className={plusJakartaSans.variable}>
      <body className={plusJakartaSans.className}>
        <GoogleAnalytics />
        {children}
      </body>
    </html>
  );
}
