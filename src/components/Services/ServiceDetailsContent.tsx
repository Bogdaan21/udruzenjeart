"use client";

import React from "react";
import Image from "next/image";
import { useLanguage } from "@/context/LanguageContext";
import DetailsContent from "../Doctors/DetailsContent";

const ServiceDetailsContent: React.FC = () => {
  const { language } = useLanguage();

  return (
    <>
      <div className="service-details-area ptb-100">
        <div className="container">
          <DetailsContent />
        </div>
      </div>
    </>
  );
};

export default ServiceDetailsContent;
