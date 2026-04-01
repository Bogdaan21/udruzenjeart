import React from "react";
import TopHeader from "../../components/Layouts/TopHeader";
import Navbar from "../../components/Layouts/Navbar";
import PageBanner from "../../components/Common/PageBanner";
import ServiceDetailsContent from "@/components/Services/ServiceDetailsContent";
import Footer from "../../components/Layouts/Footer";
import Agenda from "@/components/About/AgendaContent";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Agenda i program | I Kongres Udruženja ART Crne Gore",
  description:
    "Pogledajte kompletnu agendu i raspored sesija I Kongresa Udruženja ART Crne Gore. Predavanja, radionice, panel diskusije i stručni program iz oblasti anestezije i intenzivne njege.",

  keywords: [
    "agenda kongres ART",
    "program kongresa Crna Gora",
    "anestezija kongres raspored",
    "intenzivna njega sesije",
    "medicinski kongres Bar",
    "Udruženje ART agenda",
    "radionice anestezija",
    "panel diskusija zdravstvo",
  ],

  alternates: {
    canonical: "https://udruzenjeart.me/congress/agenda",
  },

  openGraph: {
    type: "website",
    url: "https://udruzenjeart.me/congress/agenda",
    title: "Agenda i program | I Kongres Udruženja ART Crne Gore",
    description:
      "Detaljan raspored sesija, radionica i predavanja na I Kongresu Udruženja ART Crne Gore. Pratite najnovije teme iz anestezije i intenzivne medicine.",
    siteName: "Udruženje ART Crne Gore",
    images: [
      {
        url: "/images/princess-bar2.jpg",
        width: 1200,
        height: 630,
        alt: "Agenda kongresa Udruženja ART Crne Gore",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Agenda i program | I Kongres Udruženja ART Crne Gore",
    description:
      "Kompletan raspored kongresa – sesije, radionice i predavanja iz oblasti anestezije i intenzivne njege.",
    images: ["/images/congress-agenda.jpg"],
  },
};

export default function Page() {
  return (
    <>
      <TopHeader />

      <Navbar />

      <Agenda />

      <Footer />
    </>
  );
}
