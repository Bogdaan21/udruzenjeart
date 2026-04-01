"use client";

import React, { useState } from "react";
import { useLanguage } from "@/context/LanguageContext";
import RasporedAgenda from "@/components/About/RasporedAgenda";

const AboutContent: React.FC = () => {
  const { language } = useLanguage();
  const [activeDay, setActiveDay] = useState<"day1" | "day2" | "day3" | "rasporedAgenda">("day1");

  const day1Agenda =
    language === "en"
      ? [
          { time: "16:00 – 18:00", title: "Participant registration" },
          { time: "18:00 – 19:00", title: "Opening ceremony" },
          {
            time: "19:00 – 19:30",
            title: "Review of Montenegrin medical uniforms through history",
          },
          { time: "19:30 – 20:00", title: "Plenary lecture" },
          {
            time: "",
            title: "“Challenges, opportunities and future of specialist nursing on a global level”",
          },
          {
            time: "",
            title: "Doc. dr. sc. Adriano Friganović, FESNO, FFNMCRSI. <br/> President of ESNO",
          },
          { time: "20:00 – 24:00", title: "Cocktail dinner" },
        ]
      : [
          { time: "16:00 – 18:00", title: "Prijava učesnika" },
          { time: "18:00 – 19:00", title: "Svečano otvaranje" },
          {
            time: "19:00 – 19:30",
            title: "Revija crnogorskih medicinskih uniformi kroz istoriju",
          },
          { time: "19:30 – 20:00", title: "Plenarno predavanje" },
          {
            time: "",
            title: "„Izazovi, prilike i budućnost specijalističkog sestrinstva na globalnoj razini”",
          },
          {
            time: "",
            title: "Doc. dr. sc. Adriano Friganović, FESNO, FFNMCRSI <br/> predsjednik ESNO",
          },
          { time: "20:00 – 24:00", title: "Koktel večera" },
        ];

  const day2Agenda =
    language === "en"
      ? [
          { time: "09:00 – 10:00", title: "Participant registration and sponsor exhibition" },

          { time: "10:00 – 11:00", title: "Session 1 – Hall 1" },
          { time: "10:00 – 11:00", title: "Session 2 – Hall 2" },

          {
            time: "11:00 – 11:30",
            title: "Workshop – Optimization of IV therapy using Nexiva and BD solutions (Hall 2)",
          },

          { time: "11:30 – 12:00", title: "Coffee break" },

          {
            time: "12:00 – 12:30",
            title:
              "Lecture: Development of nursing in Montenegro – between tradition and modern practice (M.Sc. Maja Keković, Center for Science, Clinical Center of Montenegro)",
          },

          {
            time: "12:30 – 13:30",
            title:
              "Panel discussion: Nursing in the process of change, specialization, and its impact on the healthcare system (Prof. Dr. Vedrana Vejzović, Malmö University, Sweden; Assoc. Prof. Adriano Friganović, ESNO President)",
          },

          { time: "13:30 – 15:00", title: "Lunch break" },

          {
            time: "15:00 – 16:00",
            title:
              "Workshop round table: Stress and how to overcome it – the red zones within us (Gordana Dragošević, President of UINARS, Head Nurse, Clinic for Anesthesia, Resuscitation and Intensive Care, University Clinical Center Niš)",
          },

          {
            time: "16:00 – 16:45",
            title: "Workshop – Advanced resuscitation and modern solutions for safe intubation (Flexicare) – Hall 2",
          },

          { time: "16:45 – 17:40", title: "Session 3 – Hall 2" },

          { time: "16:00 – 17:40", title: "Session 4 – Hall 1" },

          { time: "20:00", title: "Gala dinner" },
        ]
      : [
          { time: "09:00 – 10:00", title: "Registracija učesnika i obilazak sponzora" },

          { time: "10:00 – 11:00", title: "Sesija 1 – Sala 1" },
          { time: "10:00 – 11:00", title: "Sesija 2 – Sala 2" },

          {
            time: "11:00 – 11:30",
            title: "Radionica: Optimizacija IV terapije uz Nexivu i BD rješenja (Sala 2)",
          },

          { time: "11:30 – 12:00", title: "Kafe pauza" },

          {
            time: "12:00 – 12:30",
            title: "Predavanje: Razvoj sestrinstva u Crnoj Gori – između tradicije i savremene prakse",
          },
          { time: "", title: "mr.sc. Maja Keković, Centar za nauku KCCG" },

          {
            time: "12:30 – 13:30",
            title: "Panel diskusija: Sestrinstvo u procesu promjena, specijalizacija i uticaj na zdravstveni sistem",
          },
          {
            time: "",
            title:
              "prof.dr. Vedrana Vejzović, Univerzitet Malmo, Švedska <br/> doc.dr.sc. Adriano Friganović, FESNO, FFNMCRSI, predsjednik ESNO",
          },

          { time: "13:30 – 15:00", title: "Pauza za ručak" },

          {
            time: "15:00 – 16:00",
            title: "Radionica – okrugli sto: Stres i kako ga prevazići – crvene zone u nama",
          },
          {
            time: "",
            title:
              "Gordana Dragošev, predsjednica UINARS, glavna sestra klinike za anesteziju, reanimaciju i intenzivnu njegu UKC Niš",
          },

          {
            time: "16:00 – 16:45",
            title: "Sala 2: Radionica – Napredna reanimacija i savremena rješenja za sigurnu intubaciju (Flexicare)",
          },

          { time: "16:45 – 17:40", title: "Sesija 3 – Sala 2" },

          { time: "16:00 – 17:40", title: "Sesija 4 – Sala 1" },

          { time: "20:00", title: "Svečana večera" },
        ];

  const day3Agenda =
    language === "en"
      ? [
          { time: "10:00 – 10:30", title: "Mandatory ART Association meeting" },
          { time: "", title: "After the meeting – hotel check-out" },
          { time: "12:00", title: "Cruise on Lake Skadar" },
          {
            time: "",
            title: "Departure from Virpazar for all congress participants.",
          },
        ]
      : [
          { time: "10:00 – 10:30", title: "Obavezan sastanak Udruženja ART" },
          { time: "", title: "Nakon sastanka odjava iz hotela" },
          { time: "12:00", title: "Krstarenje Skadarskim jezerom" },
          {
            time: "",
            title: "Polazak iz Virpazara za sve učesnike kongresa.",
          },
        ];

  const currentAgenda =
    activeDay === "day1" ? day1Agenda : activeDay === "day2" ? day2Agenda : activeDay === "day3" ? day3Agenda : [];

  const currentTitle =
    activeDay === "day1"
      ? language === "en"
        ? "DAY 1 – FRIDAY, 17 APRIL 2026."
        : "PRVI DAN – PETAK, 17. APRIL 2026."
      : activeDay === "day2"
        ? language === "en"
          ? "DAY 2 – SATURDAY, 18 APRIL 2026."
          : "DRUGI DAN – SUBOTA, 18. APRIL 2026."
        : activeDay === "day3"
          ? language === "en"
            ? "DAY 3 – SUNDAY, 19 APRIL 2026."
            : "TREĆI DAN – NEDELJA, 19. APRIL 2026."
          : language === "en"
            ? "Sessions"
            : "Sesije";

  return (
    <div
      style={{
        backgroundImage: `url(/images/map-bg.png)`,
        justifyContent: `center`,
        alignItems: `center`,
        gap: "30px",
      }}
      className="timeline-wrapper"
    >
      <h2 className="timeline-title">{language === "en" ? "Congress Agenda" : "Agenda kongresa"}</h2>

      <div className="day-switcher">
        <button className={activeDay === "day1" ? "day-btn active" : "day-btn"} onClick={() => setActiveDay("day1")}>
          {language === "en" ? "Day 1" : "Dan 1"}
        </button>

        <button className={activeDay === "day2" ? "day-btn active" : "day-btn"} onClick={() => setActiveDay("day2")}>
          {language === "en" ? "Day 2" : "Dan 2"}
        </button>

        <button className={activeDay === "day3" ? "day-btn active" : "day-btn"} onClick={() => setActiveDay("day3")}>
          {language === "en" ? "Day 3" : "Dan 3"}
        </button>

        <button
          className={activeDay === "rasporedAgenda" ? "day-btn active" : "day-btn"}
          onClick={() => setActiveDay("rasporedAgenda")}
        >
          {language === "en" ? "Sessions" : "Sesije"}
        </button>
      </div>

      <div className="day-label">{currentTitle}</div>

      {activeDay === "rasporedAgenda" ? (
        <RasporedAgenda />
      ) : (
        <div className="timeline">
          {currentAgenda.map((item, index) => {
            const isEven = index % 2 === 0;

            return (
              <div className="timeline-row" key={index}>
                <div className={`timeline-side left ${isEven ? "show" : ""}`}>
                  {isEven && item.time && <span className="time">{item.time}</span>}
                  {!isEven && <span className="title-text" dangerouslySetInnerHTML={{ __html: item.title }} />}
                </div>

                <div className="timeline-center">
                  <span className="dot"></span>
                  {index !== currentAgenda.length - 1 && <span className="line"></span>}
                </div>

                <div className={`timeline-side right ${!isEven ? "show" : ""}`}>
                  {isEven && <span className="title-text" dangerouslySetInnerHTML={{ __html: item.title }} />}
                  {!isEven && item.time && <span className="time">{item.time}</span>}
                </div>
              </div>
            );
          })}
        </div>
      )}

      <style jsx>{`
        .timeline-wrapper {
          background: #ffffff;
          padding: 80px 20px;
          max-width: 1100px;
          margin: 0 auto;
        }

        .timeline-title {
          text-align: center;
          color: #1e3a8a;
          font-size: 36px;
          font-weight: 700;
          margin-bottom: 30px;
        }

        .day-switcher {
          display: flex;
          justify-content: center;
          gap: 12px;
          flex-wrap: wrap;
          margin-bottom: 25px;
        }

        .day-btn {
          border: 1px solid #1e3a8a;
          background: #fff;
          color: #1e3a8a;
          padding: 10px 18px;
          border-radius: 8px;
          font-weight: 600;
          cursor: pointer;
          transition: 0.2s ease;
        }

        .day-btn.active {
          background: #1e3a8a;
          color: #fff;
        }

        .day-label {
          text-align: center;
          background: #1e3a8a;
          color: #fff;
          padding: 12px 20px;
          border-radius: 8px;
          font-size: 20px;
          font-weight: 700;
          margin: 0 auto 35px auto;
          width: fit-content;
        }

        .timeline {
          max-width: 1000px;
          margin: 0 auto;
        }

        .timeline-row {
          display: grid;
          grid-template-columns: 1fr 70px 1fr;
          align-items: flex-start;
          min-height: 160px;
        }

        .timeline-side {
          padding-top: 2px;
        }

        .timeline-side.left {
          text-align: right;
          padding-right: 24px;
        }

        .timeline-side.right {
          text-align: left;
          padding-left: 24px;
        }

        .timeline-center {
          display: flex;
          flex-direction: column;
          align-items: center;
          align-self: stretch; /* 🔥 KLJUČNO */
        }

        .dot {
          width: 18px;
          height: 18px;
          background: #9ca3af;
          border-radius: 50%;
          display: block;
          flex-shrink: 0;
        }

        .line {
          width: 4px;
          flex: 1;
          background: #d1d5db;
          margin-top: 8px;
        }

        .time {
          font-size: 22px;
          font-weight: 700;
          color: #6b7280;
          line-height: 1.35;
          display: inline-block;
        }

        .title-text {
          font-size: 28px;
          font-weight: 400;
          color: #111827;
          line-height: 1.35;
          display: inline-block;
          max-width: 100%;
        }

        @media (max-width: 768px) {
          .timeline-row {
            display: grid;
            grid-template-columns: 1fr 40px 1fr;
            align-items: center;
            min-height: 90px;
            margin-bottom: 18px;
          }

          .timeline-side.left,
          .timeline-side.right {
            width: 100%;
          }

          .timeline-side.left {
            text-align: right;
            padding-right: 12px;
          }

          .timeline-side.right {
            text-align: left;
            padding-left: 12px;
          }

          .timeline-center {
            display: flex;
            flex-direction: column;
            align-items: center;
            align-self: stretch;
          }

          .dot {
            width: 14px;
            height: 14px;
          }

          .line {
            width: 3px;
            flex: 1;
            margin-top: 6px;
            background: #d1d5db;
          }

          .time {
            font-size: 15px;
            line-height: 1.35;
            word-break: break-word;
          }

          .title-text {
            font-size: 17px;
            line-height: 1.4;
            word-break: break-word;
          }
        }
      `}</style>
    </div>
  );
};

export default AboutContent;
