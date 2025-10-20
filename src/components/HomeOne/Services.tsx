"use client";

import React from "react";
import Link from "next/link";
import { useLanguage } from "@/context/LanguageContext";

const Services: React.FC = () => {
  const { language } = useLanguage();

  // 🇲🇪 Crnogorski sadržaj
  const contentME = {
    title: "Naše aktivnosti",
    activities: [
      {
        icon: "icofont-education",
        title: "Stručna edukacija",
        text: "Organizujemo kurseve, radionice i konferencije radi unapređenja profesionalnih vještina.",
      },
      {
        icon: "icofont-users-alt-4",
        title: "Umrežavanje",
        text: "Povezujemo stručnjake iz oblasti anestezije, intenzivne njege i transfuzije širom Crne Gore.",
      },
      {
        icon: "icofont-handshake-deal",
        title: "Saradnja",
        text: "Saradnja sa domaćim i međunarodnim zdravstvenim organizacijama i udruženjima.",
      },
      {
        icon: "icofont-heart-beat-alt",
        title: "Podrška i solidarnost",
        text: "Promovišemo etičke vrijednosti, timski rad i međusobnu podršku među zdravstvenim radnicima.",
      },
    ],
  };

  // 🇬🇧 Engleski sadržaj
  const contentEN = {
    title: "Our Activities",
    activities: [
      {
        icon: "icofont-education",
        title: "Professional Education",
        text: "Organizing courses, workshops, and conferences to improve professional skills.",
      },
      {
        icon: "icofont-users-alt-4",
        title: "Networking",
        text: "Connecting anesthetists, intensive care, and transfusion professionals across Montenegro.",
      },
      {
        icon: "icofont-handshake-deal",
        title: "Collaboration",
        text: "Cooperation with domestic and international health organizations and associations.",
      },
      {
        icon: "icofont-heart-beat-alt",
        title: "Support & Solidarity",
        text: "Promoting ethical values, teamwork, and mutual support among healthcare professionals.",
      },
    ],
  };

  const content = language === "en" ? contentEN : contentME;

  return (
    <>
      <div className="services-area pb-70">
        <div className="container">
          <div className="section-title">
            <h2>{content.title}</h2>
          </div>

          <div className="row justify-content-center">
            {content.activities.map((activity, index) => (
              <div className="col-sm-6 col-lg-3" key={index}>
                <div className="service-item">
                  <div className="service-front">
                    <i className={activity.icon}></i>
                    <Link href="#">
                      <h3>{activity.title}</h3>
                    </Link>
                    <p>{activity.text}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Services;