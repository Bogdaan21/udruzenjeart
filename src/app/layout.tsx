import "../../styles/bootstrap.min.css";
import "../../styles/animate.css";
import "../../styles/icofont.min.css";
import "../../styles/meanmenu.css";
import "react-tabs/style/react-tabs.css";
import "react-accessible-accordion/dist/fancy-example.css";
import "swiper/css";
import "swiper/css/bundle";

// Global Styles
import "../../styles/style.css";
import "../../styles/responsive.css";

import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import GoTop from "@/components/Layouts/GoTop";
import Script from "next/script";

import { LanguageProvider } from "@/context/LanguageContext";

const poppins = Poppins({
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://udruzenjeart.me"),
  title: {
    default: "Udruženje ART Crne Gore",
    template: "%s | Udruženje ART Crne Gore",
  },
  description:
    "Zvanični sajt Udruženja anestezičara, tehničara intenzivne njege i transfuzije Crne Gore. Edukacije, kongresi i povezivanje stručnjaka iz oblasti zdravstva.",
  keywords: [
    "Udruženje ART",
    "anestezičari Crna Gora",
    "intenzivna njega",
    "transfuzija",
    "zdravstvo Crna Gora",
    "kongres medicinara",
  ],
  openGraph: {
    type: "website",
    url: "https://udruzenjeart.me",
    title: "Udruženje ART Crne Gore",
    description:
      "Udruženje anestezičara, tehničara intenzivne njege i transfuzije Crne Gore — profesionalno udruženje posvećeno unapređenju znanja i zdravstvene njege.",
    siteName: "Udruženje ART Crne Gore",
    images: [
      {
        url: "/images/og-cover.jpg",
        width: 1200,
        height: 630,
        alt: "Udruženje ART Crne Gore – Kongres i edukacija",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Udruženje ART Crne Gore",
    description: "Zvanični sajt Udruženja anestezičara, tehničara intenzivne njege i transfuzije Crne Gore.",
    images: ["/images/og-cover.jpg"],
  },
  alternates: {
    canonical: "https://udruzenjeart.me",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="me">
      <body className={poppins.className}>
        <LanguageProvider>{children}</LanguageProvider>
        <GoTop />

        {/* ✅ Google Analytics (GA4) */}
        <Script src="https://www.googletagmanager.com/gtag/js?id=G-5L0ZJ6EVNQ" strategy="afterInteractive" />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-5L0ZJ6EVNQ', {
              page_path: window.location.pathname,
            });
          `}
        </Script>
      </body>
    </html>
  );
}
