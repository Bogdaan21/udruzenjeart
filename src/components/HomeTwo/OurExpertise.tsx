"use client";

import React from "react";
import Image from "next/image";
import { useLanguage } from "@/context/LanguageContext";

const OurExpertise: React.FC = () => {
  const { language } = useLanguage();

  // 🇲🇪 Crnogorski tekst
  const contentME = {
    subtitle: "Udruženje ART",
    title: "Naša misija i ciljevi",
    items: [
      {
        title: "Unapređenje struke",
        text: "Razvijamo i promovišemo profesionalne standarde u oblastima anestezije, intenzivne njege i transfuzije.",
      },
      {
        title: "Edukacija i usavršavanje",
        text: "Organizujemo seminare, radionice i stručne skupove radi stalnog obrazovanja članova.",
      },
      {
        title: "Saradnja",
        text: "Gradimo veze sa domaćim i međunarodnim zdravstvenim institucijama i udruženjima.",
      },
      {
        title: "Etika i humanost",
        text: "Promovišemo solidarnost, empatiju i etičke principe kao temelj profesionalnog rada.",
      },
    ],
    contact: "Kontakt",
  };

  // 🇬🇧 Engleski tekst
  const contentEN = {
    subtitle: "ART Association",
    title: "Our Mission and Goals",
    items: [
      {
        title: "Professional Advancement",
        text: "We develop and promote high professional standards in anesthesia, intensive care, and transfusion.",
      },
      {
        title: "Education and Training",
        text: "We organize seminars, workshops, and professional gatherings for continuous member education.",
      },
      {
        title: "Collaboration",
        text: "We build partnerships with national and international healthcare organizations.",
      },
      {
        title: "Ethics and Humanity",
        text: "We promote solidarity, empathy, and ethical principles as the foundation of professional work.",
      },
    ],
    contact: "Contact",
  };

  const content = language === "en" ? contentEN : contentME;

  return (
    <>
      <div className="speciality-area pb-100">
        <div className="container-fluid p-0">
          <div className="row m-0">
            {/* LEFT SIDE */}
            <div className="col-lg-7">
              <div className="speciality-left">
                <div className="section-title-two">
                  <span>{content.subtitle}</span>
                  <h2>{content.title}</h2>
                </div>

                <div className="speciality-item">
                  <div className="row m-0">
                    {content.items.map((item, index) => (
                      <div className="col-sm-6 col-lg-6" key={index}>
                        <div className="speciality-inner equal-box">
                          <i className="icofont-check-circled"></i>
                          <h3>{item.title}</h3>
                          <p>{item.text}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* RIGHT SIDE */}
            <div className="col-lg-5 pr-0">
              <div
                className="speciality-item speciality-right"
                style={{ backgroundImage: `url(/images/about-team.jpg)` }}
              >
                <Image
                  src="/images/about-team.jpg"
                  alt={language === "en" ? "About ART Association" : "O Udruženju ART"}
                  width={845}
                  height={850}
                />

                <div className="speciality-emergency">
                  <div className="speciality-icon">
                    <i className="icofont-ui-call"></i>
                  </div>
                  <h3>{content.contact}</h3>
                  <p>+382 69 820 006</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Stilizacija kocki */}
      <style jsx>{`
        .equal-box {
          height: 220px;
          display: flex;
          flex-direction: column;
          justify-content: center;
          text-align: left;
          background: #fff;
          border-radius: 8px;
          box-shadow: 0 2px 8px rgba(0, 0, 0, 0.05);
          padding: 20px;
          transition: all 0.3s ease;
        }

        .equal-box:hover {
          transform: translateY(-5px);
          box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
        }

        .equal-box h3 {
          font-size: 18px;
          font-weight: 600;
          margin-top: 10px;
          color: #1f2937;
        }

        .equal-box p {
          margin-top: 8px;
          color: #4b5563;
          font-size: 15px;
        }

        .equal-box i {
          font-size: 24px;
          color: #0d6efd;
        }
      `}</style>
    </>
  );
};

export default OurExpertise;
