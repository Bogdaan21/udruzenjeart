import React from "react";
import TopHeader from "../../components/Layouts/TopHeader";
import Navbar from "../../components/Layouts/Navbar";
import PageBanner from "../../components/Common/PageBanner";
import Footer from "../../components/Layouts/Footer";
import AppointmentForm from "../../components/Appointment/AppointmentForm";

export const metadata = {
  title: "Prijava | Udruženje ART Crne Gore",
  description:
    "Pridružite se Udruženju anestezičara, tehničara intenzivne njege i transfuzije Crne Gore (ART). Popunite prijavni formular i postanite dio naše zajednice stručnjaka.",
  keywords: [
    "ART Crna Gora",
    "Udruženje anestezičara",
    "intenzivna njega",
    "transfuzija",
    "zdravstveni radnici",
    "prijava članstva",
  ],
  openGraph: {
    title: "Pridružite se Udruženju ART Crne Gore",
    description:
      "Popunite prijavni formular i postanite dio profesionalne zajednice zdravstvenih radnika iz oblasti anestezije, intenzivne njege i transfuzije.",
    url: "https://udruzenjeart.me/appointment",
    siteName: "Udruženje ART",
    images: [
      {
        url: "/images/page-banner2.jpg",
        width: 1200,
        height: 630,
        alt: "Prijava u Udruženje ART Crne Gore",
      },
    ],
    locale: "me_ME",
    type: "website",
  },
};

export default function Page() {
  return (
    <>
      <TopHeader />

      <Navbar />

      {/* <PageBanner
        pageTitle="Appointment"
        homePageUrl="/"
        homePageText="Home"
        activePageText="Appointment"
        bgImage="/images/page-banner2.jpg"
      /> */}

      <AppointmentForm />

      <Footer />
    </>
  );
}
