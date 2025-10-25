import React from "react";
import TopHeader from "../../components/Layouts/TopHeader";
import Navbar from "../../components/Layouts/Navbar";
import PageBanner from "../../components/Common/PageBanner";
import OurExpertise from "../../components/HomeOne/OurExpertise";
import ServiceDetailsContent from "@/components/Services/ServiceDetailsContent";
import Footer from "../../components/Layouts/Footer";

export default function Page() {
  return (
    <>
      <TopHeader />

      <Navbar />

      <PageBanner
        pageTitle="Congress"
        homePageUrl="/"
        homePageText="Home"
        activePageText="Congress"
        bgImage="/images/page-banner3.jpg"
      />

      <ServiceDetailsContent />

      <Footer />
    </>
  );
}
