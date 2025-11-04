import TopHeader from "../components/Layouts/TopHeader";
import Navbar from "../components/Layouts/Navbar";
import HeroSlider from "../components/HomeFour/MainBanner";
import Stats from "../components/HomeOne/Stats";
import AboutSection from "../components/HomeOne/AboutSection";
import Services from "../components/HomeOne/Services";
import Footer from "../components/Layouts/Footer";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Udruženje ART Crne Gore | Anestezija, njega i transfuzija",
  description:
    "Zvanični sajt Udruženja anestetičara, tehničara intenzivne njege i transfuzije Crne Gore (ART). Naša misija je unapređenje znanja, etike i saradnje u zdravstvenoj zajednici.",
  keywords: [
    "Udruženje ART",
    "Udruženje ART Crne Gore",
    "anestezija Crna Gora",
    "intenzivna njega",
    "transfuzija",
    "medicinski tehničari Crna Gora",
  ],
  openGraph: {
    title: "Udruženje ART Crne Gore",
    description:
      "Udruženje anestetičara, tehničara intenzivne njege i transfuzije Crne Gore (ART) okuplja zdravstvene radnike posvećene znanju, humanosti i profesionalnom razvoju.",
    url: "https://udruzenjeart.me",
    siteName: "Udruženje ART",
    locale: "me_ME",
    type: "website",
    images: [
      {
        url: "https://udruzenjeart.me/images/insta-logo-white.png", // ✅ apsolutna adresa
        width: 1200,
        height: 630,
        alt: "Udruženje ART Crne Gore",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Udruženje ART Crne Gore",
    description: "Zvanični sajt Udruženja anestezičara, tehničara intenzivne njege i transfuzije Crne Gore.",
    images: ["https://udruzenjeart.me/images/insta-logo-white.png"], // ✅ ista slika i za Twitter / Viber
  },
};

export default function Home() {
  return (
    <>
      <TopHeader />

      <Navbar />

      <HeroSlider />

      <Stats />

      <AboutSection />

      <Services />

      <Footer />
    </>
  );
}
