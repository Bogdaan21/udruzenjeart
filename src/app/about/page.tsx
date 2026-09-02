"use client";

import React from "react";
import TopHeader from "../../components/Layouts/TopHeader";
import Navbar from "../../components/Layouts/Navbar";
import PageBanner from "../../components/Common/PageBanner";
import Footer from "../../components/Layouts/Footer";
import OurExpertise from "../../components/HomeTwo/OurExpertise";
import AboutContent from "../../components/About/AboutContent";
import { useLanguage } from "@/context/LanguageContext";

export default function Page() {
  const { language } = useLanguage();

  // 🇲🇪 / 🇬🇧 tekstovi
  const content = {
    pageTitle: language === "en" ? "About" : "O udruženju",
    homePageText: language === "en" ? "Home" : "Početna",
    activePageText: language === "en" ? "About" : "O udruženju",
  };

  return (
    <>
      <TopHeader />
      <Navbar />

      {/* <PageBanner
        pageTitle={content.pageTitle}
        homePageUrl="/"
        homePageText={content.homePageText}
        activePageText={content.activePageText}
        bgImage="/images/home-one/home-slider-bg.jpg"
      /> */}

      <AboutContent />
      <OurExpertise />
      <Footer />
    </>
  );
}