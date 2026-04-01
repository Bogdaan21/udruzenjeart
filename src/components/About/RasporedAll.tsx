"use client";

import React from "react";
import { useLanguage } from "@/context/LanguageContext";
import Link from "next/link";

const RasporedAll = () => {
  const { language } = useLanguage();

const rasporedAgenda =
  language === "en"
    ? [
        {
          section: "DAY 1 – FRIDAY, 17 APRIL 2026",
          items: [
            { time: "16:00 – 18:00", title: "Participant registration" },
            { time: "18:00 – 19:00", title: "Opening ceremony" },
            {
              time: "19:00 – 19:30",
              title: "Review of Montenegrin medical uniforms through history",
            },
            { time: "19:30 – 20:00", title: "Plenary lecture" },
            {
              time: "",
              title:
                "“Challenges, opportunities and future of specialist nursing on a global level”",
            },
            {
              time: "",
              title: "Doc. dr. sc. Adriano Friganović, FESNO, FFNMCRSI",
            },
            { time: "", title: "President of ESNO" },
            { time: "20:00 – 24:00", title: "Cocktail dinner" },
          ],
        },
        {
          section: "DAY 2 – SATURDAY, 18 APRIL 2026",
          items: [
            { time: "09:00 – 10:00", title: "Registration and sponsor visit" },
            {
              time: "10:00 – 11:30",
              title: "Session 1 – Anesthesia: modern approaches and clinical practice",
            },
            { time: "11:30 – 12:00", title: "Coffee break" },
            {
              time: "12:00 – 12:30",
              title:
                "Lecture: “Development of nursing in Montenegro – between tradition and modern practice”",
            },
            {
              time: "",
              title: "mr.sc. Maja Keković, Science Center KCCG",
            },
            {
              time: "12:30 – 13:30",
              title:
                "Panel discussion: “Nursing in the process of change, specialization and impact on the healthcare system”",
            },
            {
              time: "",
              title: "prof.dr. Vedrana Vejzović, Malmö University, Sweden",
            },
            {
              time: "",
              title:
                "doc.dr.sc. Adriano Friganović, FESNO, FFNMCRSI, President of ESNO",
            },
            { time: "13:30 – 15:00", title: "Lunch break" },
            {
              time: "15:00 – 16:00",
              title:
                "Workshop-round table: Gordana Dragošev, president of UINARS, head nurse of the Clinic for Anesthesia, Reanimation and Intensive Care UKC Niš: “Stress and how to overcome it – red zones within us”",
            },
            { time: "16:00 – 17:00", title: "Small hall 1: Workshop 1" },
            {
              time: "16:00 – 18:00",
              title: "Small hall 2: Session 2 – Intensive care – current topics",
            },
            { time: "17:00 – 18:00", title: "Small hall 1: Workshop 2" },
            { time: "20:00", title: "Ceremonial dinner" },
          ],
        },
        {
          section: "DAY 3 – SUNDAY, 19 APRIL 2026",
          items: [
            { time: "10:00 – 10:30", title: "Mandatory ART Association meeting" },
            { time: "", title: "After the meeting – hotel check-out" },
            { time: "12:00", title: "Cruise on Lake Skadar" },
            {
              time: "",
              title: "Departure from Virpazar for all congress participants.",
            },
          ],
        },
      ]
    : [
        {
          section: "PRVI DAN – PETAK, 17. APRIL 2026.",
          items: [
            { time: "16:00 – 18:00", title: "Prijava učesnika" },
            { time: "18:00 – 19:00", title: "Svečano otvaranje" },
            {
              time: "19:00 – 19:30",
              title: "Revija crnogorskih medicinskih uniformi kroz istoriju",
            },
            { time: "19:30 – 20:00", title: "Plenarno predavanje" },
            {
              time: "",
              title:
                "„Izazovi, prilike i budućnost specijalističkog sestrinstva na globalnoj razini”",
            },
            {
              time: "",
              title: "Doc. dr. sc. Adriano Friganović, FESNO, FFNMCRSI",
            },
            { time: "", title: "Predsjednik ESNO" },
            { time: "20:00 – 24:00", title: "Koktel večera" },
          ],
        },
        {
          section: "DRUGI DAN – SUBOTA, 18. APRIL 2026.",
          items: [
            { time: "09:00 – 10:00", title: "Registracija i obilazak sponzora" },
            {
              time: "10:00 – 11:30",
              title: "Sesija 1 – Anestezija: savremeni pristupi i klinička praksa",
            },
            { time: "11:30 – 12:00", title: "Kafe pauza" },
            {
              time: "12:00 – 12:30",
              title:
                "Predavanje: „Razvoj sestrinstva i Crnoj Gori – između tradicije i savremene prakse”",
            },
            {
              time: "",
              title: "mr.sc. Maja Keković, Centar za nauku KCCG",
            },
            {
              time: "12:30 – 13:30",
              title:
                "Panel diskusija: „Sestrinstvo u procesu promjena, specijalizacija i uticaj na zdravstveni sistem”",
            },
            {
              time: "",
              title: "prof.dr. Vedrana Vejzović, Univerzitet Malmo, Švedska",
            },
            {
              time: "",
              title:
                "doc.dr.sc. Adriano Friganović, FESNO, FFNMCRSI, Predsjednik ESNO",
            },
            { time: "13:30 – 15:00", title: "Pauza za ručak" },
            {
              time: "15:00 – 16:00",
              title:
                "Radionica-okrugli sto: Gordana Dragošev, predsjednica UINARS, glavna sestra klinike za anesteziju, reanimaciju i intenzivnu njegu UKC Niš: „Stres i kako ga prevazići – crvene zone u nama”",
            },
            { time: "16:00 – 17:00", title: "Mala sala 1: Radionica 1" },
            {
              time: "16:00 – 18:00",
              title: "Mala sala 2: Sesija 2 – Intenzivna njega – aktuelne teme",
            },
            { time: "17:00 – 18:00", title: "Mala sala 1: Radionica 2" },
            { time: "20:00", title: "Svečana večera" },
          ],
        },
        {
          section: "TREĆI DAN – NEDELJA, 19. APRIL 2026.",
          items: [
            { time: "10:00 – 10:30", title: "Obavezan sastanak Udruženja ART" },
            { time: "", title: "Nakon sastanka Odjava iz hotela" },
            { time: "12:00", title: "Krstarenje Skadarskim jezerom" },
            {
              time: "",
              title: "Polazak iz Virpazara za sve učesnike kongresa.",
            },
          ],
        },
      ];

  return (
    <div style={{ padding: "40px 20px" }}>
      <h2 style={{ marginBottom: "30px", color: "#1e3a8a", textAlign: "center" }}>
        {language === "en" ? "Agenda & Schedule" : "Agenda i raspored"}
      </h2>

      <div className="d-flex justify-content-center">
        <Link
          href="/doc/schedule.pdf"
          target="_blank"
          style={{ marginBottom: "30px", color: "#1e3a8a", textAlign: "center", textDecoration: "underline" }}
        >
          {language === "en" ? "Download Schedule" : "Preuzmite raspored"}
        </Link>
      </div>

      {rasporedAgenda.map((section, i) => (
        <div key={i} style={{ marginBottom: "40px" }}>
          <h3 style={{ marginBottom: "15px", color: "#1e3a8a" }}>{section.section}</h3>

          {section.items.map((item, j) => (
            <div key={j} style={{ marginBottom: "10px", lineHeight: "1.6" }}>
              <strong>{item.time}</strong>
              {item.time ? " — " : ""}
              {item.title}
            </div>
          ))}
        </div>
      ))}
    </div>
  );
};

export default RasporedAll;
