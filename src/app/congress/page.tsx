import React from "react";
import TopHeader from "../../components/Layouts/TopHeader";
import Navbar from "../../components/Layouts/Navbar";
import ServiceDetailsContent from "@/components/Services/ServiceDetailsContent";
import Footer from "../../components/Layouts/Footer";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "I Kongres Udruženja ART Crne Gore",
  description:
    "Detaljan osvrt na I Kongres Udruženja ART Crne Gore sa međunarodnim učešćem, održan u Baru od 17. do 19. aprila 2026. godine.",
  keywords: [
    "I Kongres Udruženja ART",
    "kongres ART Crna Gora",
    "kongres sa međunarodnim učešćem",
    "Hotel Princess Bar",
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
    type: "article",
    url: "https://udruzenjeart.me/congress",
    title: "I Kongres Udruženja ART Crne Gore",
    description:
      "Stručna predavanja, praktične radionice, međunarodna saradnja i najvažniji trenuci I Kongresa Udruženja ART u Baru.",
    siteName: "Udruženje ART Crne Gore",
    images: [
      {
        url: "/images/congress-april-bar/1.jpg",
        width: 1200,
        height: 630,
        alt: "Učesnici I Kongresa Udruženja ART Crne Gore",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "I Kongres Udruženja ART Crne Gore",
    description: "Detaljan osvrt i galerija fotografija sa I Kongresa Udruženja ART Crne Gore u Baru.",
    images: ["/images/congress-april-bar/1.jpg"],
  },
};

export default function Page() {
  return (
    <>
      <TopHeader />

      <Navbar />

      <ServiceDetailsContent />

      <Footer />
    </>
  );
}
