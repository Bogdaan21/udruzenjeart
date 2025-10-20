"use client";

import React from "react";
import { useLanguage } from "@/context/LanguageContext";

const Stats: React.FC = () => {
  const { language } = useLanguage();

  return (
    <>
      <div className="counter-area">
        <div className="container">
          <div
            className="row counter-bg"
            style={{ backgroundImage: `url(/images/map-bg.png)` }}
          >
            {/* 🧩 1️⃣ Članstvo */}
            <div className="col-sm-6 col-md-3 col-lg-3">
              <div className="counter-item">
                <i className="icofont-users-social"></i>
                <h3 className="counter">
                  {language === "en" ? "Membership" : "Članstvo"}
                </h3>
                <p>
                  {language === "en"
                    ? "Healthcare professionals in anesthesia, intensive care, and transfusion"
                    : "Zdravstveni radnici iz oblasti anestezije, intenzivne njege i transfuzije"}
                </p>
              </div>
            </div>

            {/* 🧩 2️⃣ Edukacija */}
            <div className="col-sm-6 col-md-3 col-lg-3">
              <div className="counter-item">
                <i className="icofont-education"></i>
                <h3 className="counter">
                  {language === "en" ? "Education" : "Edukacija"}
                </h3>
                <p>
                  {language === "en"
                    ? "Continuous professional development and national conferences"
                    : "Kontinuirano stručno usavršavanje i nacionalni skupovi"}
                </p>
              </div>
            </div>

            {/* 🧩 3️⃣ Saradnja */}
            <div className="col-sm-6 col-md-3 col-lg-3">
              <div className="counter-item">
                <i className="icofont-handshake-deal"></i>
                <h3 className="counter">
                  {language === "en" ? "Collaboration" : "Saradnja"}
                </h3>
                <p>
                  {language === "en"
                    ? "Partnership with domestic and international organizations"
                    : "Partnerstvo sa domaćim i međunarodnim organizacijama"}
                </p>
              </div>
            </div>

            {/* 🧩 4️⃣ Osnivanje */}
            <div className="col-sm-6 col-md-3 col-lg-3">
              <div className="counter-item">
                <i className="icofont-history"></i>
                <h3 className="counter">
                  {language === "en" ? "Foundation" : "Osnivanje"}
                </h3>
                <p>
                  {language === "en"
                    ? "Association in the process of formal establishment and network expansion"
                    : "Udruženje u fazi formalnog osnivanja i širenja mreže članova"}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Stats;