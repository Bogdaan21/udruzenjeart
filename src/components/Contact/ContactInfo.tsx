"use client";

import React from "react";
import { useLanguage } from "@/context/LanguageContext";

const ContactInfo: React.FC = () => {
  const { language } = useLanguage();

  // 🇲🇪 / 🇬🇧 sadržaj
  const content = {
    locationTitle: language === "en" ? "Location" : "Lokacija",
    locationText:
      language === "en"
        ? "Podgorica, Montenegro"
        : "Podgorica, Crna Gora",
    emailTitle: language === "en" ? "Email" : "Email adresa",
    phoneTitle: language === "en" ? "Phone" : "Telefon",
    phoneNumbers: ["+382 69 820 006", "+382 69 820 006"],
  };

  return (
    <>
      <div className="location-area pt-100">
        <div className="container">
          <div className="row justify-content-center location-wrap">
            {/* ✅ Lokacija */}
            <div className="col-sm-6 col-lg-4">
              <div className="location-item">
                <i className="icofont-location-pin"></i>
                <h3>{content.locationTitle}</h3>
                <p>{content.locationText}</p>
              </div>
            </div>

            {/* ✅ Email */}
            <div className="col-sm-6 col-lg-4">
              <div className="location-item">
                <i className="icofont-ui-message"></i>
                <h3>{content.emailTitle}</h3>
                <p>info@udruzenjeart.me</p>
                <p>udruzenje.art.mne@gmail.com</p>
              </div>
            </div>

            {/* ✅ Telefon */}
            <div className="col-sm-6 col-lg-4">
              <div className="location-item">
                <i className="icofont-ui-call"></i>
                <h3>{content.phoneTitle}</h3>
                {content.phoneNumbers.map((number, index) => (
                  <p key={index}>
                    <a
                      href={`tel:${number.replace(/\s/g, "")}`}
                      style={{ color: "#333", textDecoration: "none" }}
                    >
                      {number}
                    </a>
                  </p>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ContactInfo;