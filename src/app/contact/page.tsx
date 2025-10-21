"use client";

import React from "react";
import TopHeader from "../../components/Layouts/TopHeader";
import Navbar from "../../components/Layouts/Navbar";
import PageBanner from "../../components/Common/PageBanner";
import ContactInfo from "../../components/Contact/ContactInfo";
// import ContactForm from "../../components/Contact/ContactForm";
import GoogleMap from "../../components/Contact/GoogleMap";
import Footer from "../../components/Layouts/Footer";
import { useLanguage } from "@/context/LanguageContext";

export default function Page() {
  const { language } = useLanguage();

  // 🇲🇪 / 🇬🇧 sadržaj
  const content = {
    pageTitle: language === "en" ? "Contact Us" : "Kontakt",
    homePageText: language === "en" ? "Home" : "Početna",
    activePageText: language === "en" ? "Contact Us" : "Kontakt",
  };

  return (
    <>
      <TopHeader />
      <Navbar />

      <PageBanner
        pageTitle={content.pageTitle}
        homePageUrl="/"
        homePageText={content.homePageText}
        activePageText={content.activePageText}
        bgImage="/images/page-banner3.jpg"
      />

      <ContactInfo />
      {/* <ContactForm /> */}
      <GoogleMap />
      <Footer />
    </>
  );
}
