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

import { LanguageProvider } from "@/context/LanguageContext";

const poppins = Poppins({
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Udruženje arh Crne Gore",
  description:
    "Zvanični sajt Udruženja anestezičara, tehničara intenzivne njege i transfuzije Crne Gore.",
icons: {
  icon: "/favicon_io/favicon.ico",
  shortcut: "/favicon_io/favicon-32x32.png",
  apple: "/favicon_io/apple-touch-icon.png",
},
manifest: "/favicon_io/site.webmanifest",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={poppins.className}>
        <LanguageProvider>{children}</LanguageProvider>
        <GoTop />
      </body>
    </html>
  );
}
