import React from "react";
import TopHeader from "../../components/Layouts/TopHeader";
import Navbar from "../../components/Layouts/Navbar";
import PageBanner from "../../components/Common/PageBanner";
import ServiceDetailsContent from "@/components/Services/ServiceDetailsContent";
import Footer from "../../components/Layouts/Footer";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Hotel Princess Bar | Udruženje ART Crne Gore",
  description:
    "Hotel Princess Bar — zvanični hotel I Kongresa Udruženja ART Crne Gore. Otkrijte udoban smještaj, savršenu lokaciju i vrhunsku uslugu za učesnike kongresa u Baru.",
  keywords: [
    "Hotel Princess Bar",
    "kongres ART Crna Gora",
    "smještaj Bar",
    "Udruženje ART",
    "anestezičari Crna Gora",
    "intenzivna njega",
    "transfuzija",
    "kongres medicinara",
  ],
  alternates: {
    canonical: "https://udruzenjeart.me/congress",
  },
  openGraph: {
    type: "website",
    url: "https://udruzenjeart.me/congress",
    title: "Hotel Princess Bar | Udruženje ART Crne Gore",
    description:
      "Zvanični hotel I Kongresa Udruženja ART Crne Gore. Hotel Princess Bar pruža idealan spoj luksuza, udobnosti i predivnog pogleda na Jadransko more.",
    siteName: "Udruženje ART Crne Gore",
    images: [
      {
        url: "/images/princess-bar2.jpg",
        width: 1200,
        height: 630,
        alt: "Hotel Princess Bar - zvanični hotel kongresa Udruženja ART",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Hotel Princess Bar | Udruženje ART Crne Gore",
    description: "Saznajte više o Hotelu Princess Bar — zvaničnom hotelu I Kongresa Udruženja ART Crne Gore.",
    images: ["/images/princess-bar2.jpg"],
  },
};

export default function Page() {
  return (
    <>
      <TopHeader />

      <Navbar />

      <PageBanner
        pageTitle="Hotel Princess Bar"
        homePageUrl="/"
        homePageText="Home"
        activePageText="Congress"
        bgImage="/images/princess-bar2.jpg"
      />

      <ServiceDetailsContent />

      <Footer />
    </>
  );
}
