"use client";

import React from "react";
import { useLanguage } from "@/context/LanguageContext";

const Stats: React.FC = () => {
  const { language } = useLanguage();
  const isEnglish = language === "en";

  const activities = isEnglish
    ? [
        {
          icon: "icofont-education",
          title: "Professional Education",
          text: "Courses, workshops and conferences that strengthen professional skills.",
        },
        {
          icon: "icofont-users-alt-4",
          title: "Networking",
          text: "Connecting anesthesia, intensive care and transfusion professionals.",
        },
        {
          icon: "icofont-handshake-deal",
          title: "Collaboration",
          text: "Cooperation with national and international healthcare organizations.",
        },
        {
          icon: "icofont-heart-beat-alt",
          title: "Support & Solidarity",
          text: "Ethical values, teamwork and mutual support among healthcare workers.",
        },
      ]
    : [
        {
          icon: "icofont-education",
          title: "Stručna edukacija",
          text: "Kursevi, radionice i konferencije za razvoj profesionalnih vještina.",
        },
        {
          icon: "icofont-users-alt-4",
          title: "Umrežavanje",
          text: "Povezivanje stručnjaka iz anestezije, intenzivne njege i transfuzije.",
        },
        {
          icon: "icofont-handshake-deal",
          title: "Saradnja",
          text: "Saradnja sa domaćim i međunarodnim zdravstvenim organizacijama.",
        },
        {
          icon: "icofont-heart-beat-alt",
          title: "Podrška i solidarnost",
          text: "Etičke vrijednosti, timski rad i međusobna podrška zdravstvenih radnika.",
        },
      ];

  return (
    <section className="counter-area" aria-label={isEnglish ? "Our activities" : "Naše aktivnosti"}>
      <div className="container">
        <div className="row counter-bg association-facts">
          {activities.map((activity) => (
            <div className="col-sm-6 col-lg-3 activity-column" key={activity.title}>
              <div className="association-fact">
                <span className="fact-icon" aria-hidden="true">
                  <i className={activity.icon}></i>
                </span>
                <div>
                  <h3>{activity.title}</h3>
                  <p>{activity.text}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <style jsx>{`
        .association-facts {
          overflow: hidden;
          padding: 18px;
          background-image: url(/images/map-bg.png);
          background-position: center;
          background-size: cover;
          background-repeat: no-repeat;
        }

        .activity-column {
          padding: 0;
        }

        .association-fact {
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: flex-start;
          min-height: 225px;
          height: 100%;
          padding: 22px 18px 20px;
          text-align: center;
          background: transparent;
        }

        .fact-icon {
          display: flex;
          flex: 0 0 auto;
          align-items: center;
          justify-content: center;
          width: 58px;
          height: 58px;
          margin-bottom: 14px;
          color: #0052c9;
        }

        .fact-icon i {
          font-size: 50px;
        }

        .association-fact h3 {
          margin-bottom: 10px;
          color: #0052c9;
          font-size: 20px;
          font-weight: 800;
          line-height: 1.3;
        }

        .association-fact p {
          margin: 0;
          color: #344c5d;
          font-size: 14px;
          font-weight: 600;
          line-height: 1.55;
        }

        @media (min-width: 992px) {
          .association-fact {
            border-right: 1px solid #e6e9ed;
          }

          .association-facts > :last-child .association-fact {
            border-right: 0;
          }
        }

        @media (max-width: 991px) {
          .association-facts {
            padding: 16px;
          }

          .association-fact {
            min-height: 220px;
            border-right: 1px solid #e6e9ed;
            border-bottom: 1px solid #e6e9ed;
          }

          .association-facts > :nth-child(even) .association-fact {
            border-right: 0;
          }

          .association-facts > :nth-child(n + 3) .association-fact {
            border-bottom: 0;
          }
        }

        @media (max-width: 575px) {
          .association-facts {
            padding: 14px;
          }

          .association-fact {
            min-height: 210px;
            padding: 22px 18px 20px;
            border-right: 0;
            border-bottom: 1px solid #e6e9ed;
          }

          .association-facts > :nth-child(n + 3) .association-fact {
            border-bottom: 1px solid #e6e9ed;
          }

          .association-facts > :last-child .association-fact {
            border-bottom: 0;
          }

          .fact-icon {
            margin-bottom: 12px;
          }

          .fact-icon i {
            font-size: 46px;
          }

          .association-fact h3 {
            font-size: 20px;
          }
        }
      `}</style>
    </section>
  );
};

export default Stats;
