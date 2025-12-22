import type { Metadata } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
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

// GA4 Measurement ID
const GA_MEASUREMENT_ID = "G-QDENMGV7VM";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="tr" className={plusJakartaSans.variable}>
      <head>
        {/* Google Analytics 4 - Direct Script */}
        <script
          async
          src={`https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`}
        />
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', '${GA_MEASUREMENT_ID}');
            `,
          }}
        />
      </head>
      <body className={plusJakartaSans.className}>
        {children}
      </body>
    </html>
  );
}
