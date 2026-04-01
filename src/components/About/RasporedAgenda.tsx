"use client";

import React from "react";
import { useLanguage } from "@/context/LanguageContext";
import Link from "next/link";

const RasporedAgenda = () => {
  const { language } = useLanguage();

  const rasporedAgenda =
    language === "en"
      ? [
          {
            section: "DAY 2 – SATURDAY – SESSION 1 – HALL 1",
            items: [
              {
                time: "",
                title: "Moderators: Olivera Ruža, Andrija Obradović, Miloš Marković",
              },
              {
                time: "10:00 - 10:10",
                title: "Monitoring of Swan Ganz catheter in cardiac surgery – Duško Stijepović, KCCG",
              },
              {
                time: "10:10 - 10:20",
                title:
                  "The role of the anesthetist in preoperative care of a patient with ruptured abdominal aortic aneurysm – Nemanja Vulić, KCCG",
              },
              {
                time: "10:20 - 10:30",
                title: "Hyperthermic intraperitoneal chemotherapy (HIPEC) – Pero Rogić, UKC Banja Luka",
              },
              {
                time: "10:30 - 10:40",
                title:
                  "Administration of chemotherapy immediately after cytoreductive surgery in hyperthermic conditions – Duško Radivojević, Institute for Oncology and Radiology of Serbia",
              },
              {
                time: "10:40 - 10:50",
                title: "Principles of thromboprophylaxis – Ivan Pavlović, Health Center Loznica",
              },
              {
                time: "10:50 - 11:00",
                title: "DISCUSSION",
              },
            ],
          },

          {
            section: "DAY 2 – SATURDAY – SESSION 2 – HALL 2",
            items: [
              {
                time: "",
                title: "Moderators: Kristina Novaković, Ivana Knežević, Marko Šćekić",
              },
              {
                time: "10:00 - 10:10",
                title: "Nursing care of patients before and after anesthesia – Dejan Mikulić, KCCG",
              },
              {
                time: "10:10 - 10:20",
                title:
                  "Communication in the operating room and its impact on patient safety – Milica Tucić, University Clinical Center of Vojvodina",
              },
              {
                time: "10:20 - 10:30",
                title: "Anesthesia then and now – Danijela Radulović, KCCG",
              },
              {
                time: "10:30 - 10:40",
                title: "Scope of anesthetists’ work in anesthesia – Slaviša Bučić, Health Center Loznica",
              },
              {
                time: "10:40 - 10:50",
                title: "Monitoring the depth of anesthesia – Mevludin Babajić, UKC Tuzla",
              },
              {
                time: "10:50 - 11:00",
                title: "DISCUSSION",
              },
              {
                time: "11:00 - 11:30",
                title: "Workshop: Optimization of IV therapy with Nexiva and BD solutions (Hall 2)",
              },
            ],
          },

          {
            section: "DAY 2 – SATURDAY – SESSION 3 – HALL 2",
            items: [
              {
                time: "16:00 - 16:45",
                title: "Modern solutions for safe intubation – FLEXICARE (Workshop)",
              },
              {
                time: "",
                title: "Moderators: Duško Sijepović, Slavko Šljukić, Milena Pešić",
              },
              {
                time: "16:45 - 17:00",
                title:
                  "Difficult airway – case presentation – Ljiljana Kaluđerović, Institute for Children's Diseases KCCG",
              },
              {
                time: "17:00 - 17:15",
                title:
                  "Unexpected difficult intubation – how to stay one step ahead of complications – Slobodan Radović, KCCG",
              },
              {
                time: "17:15 - 17:30",
                title: "The role of the anesthetist in difficult intubation – Ivana Konatar, OB Bijelo Polje",
              },
              {
                time: "17:30 - 17:40",
                title: "DISCUSSION",
              },
            ],
          },

          {
            section: "DAY 2 – SATURDAY – SESSION 4 – HALL 1",
            items: [
              {
                time: "",
                title: "Moderators: Dejan Mikulić, Bojan Bosnić, Bojana Dobrović",
              },
              {
                time: "16:00 - 16:10",
                title: "Procedural analgosedation and the role of the anesthetist – Bojan Mihaljević, KBC Kotor",
              },
              {
                time: "16:10 - 16:20",
                title: "Spinal (lumbar) anesthesia – Ognjen Putnik, University Clinical Center of Republika Srpska",
              },
              {
                time: "16:20 - 16:30",
                title: "Isolated limb perfusion – Novica Radovanović, Institute for Oncology and Radiology of Serbia",
              },
              {
                time: "16:30 - 16:40",
                title: "Safety and efficiency in cardiac surgery – Marko Šćekić, KCCG",
              },
              {
                time: "16:40 - 16:50",
                title: "Stress in the nursing profession – Olivera Jovanović, VMS Ćuprija",
              },
              {
                time: "16:50 - 17:00",
                title: "Nursing procedures for MSCT preparation – Nenad Banković, Military Medical Academy",
              },
              {
                time: "17:00 - 17:10",
                title: "The role of nurses in public health – Selma Krdzalić, ZZJZTK",
              },
              {
                time: "17:10 - 17:20",
                title: "The role of the anesthetist during surgical procedures in children – Radenka Ćiraković, Health Center Loznica",
              },
              {
                time: "17:20 - 17:30",
                title: "DISCUSSION",
              },
            ],
          },
        ]
      : [
          {
            section: "DAN 2 – SUBOTA – SESIJA 1 – SALA 1",
            items: [
              {
                time: "",
                title: "Moderatori: Olivera Ruža, Andrija Obradović, Miloš Marković",
              },
              {
                time: "10:00 - 10:10",
                title: "Monitoring Swan Ganz katetera u kardiohirurgiji – Duško Stijepović, KCCG",
              },
              {
                time: "10:10 - 10:20",
                title:
                  "Uloga anestetičara u preoperativnom zbrinjavanju pacijenta sa rupturom aneurizme abdominalne aorte – Nemanja Vulić, KCCG",
              },
              {
                time: "10:20 - 10:30",
                title: "Hipertermička intraperitonealna hemoterapija (HIPEC) – Pero Rogić, UKC Banja Luka",
              },
              {
                time: "10:30 - 10:40",
                title:
                  "Primena hemioterapije neposredno nakon citoreduktivne hirurgije u hipertermijskim uslovima – Duško Radivojević - Institut za onkologiju i radiologiju Srbije",
              },
              {
                time: "10:40 - 10:50",
                title: "Principi tromboprofilakse – Ivan Pavlović, Zdravstveni centar Loznica",
              },
              {
                time: "10:50 - 11:00",
                title: "DISKUSIJA",
              },
            ],
          },

          {
            section: "DAN 2 – SUBOTA – SESIJA 2 – SALA 2",
            items: [
              {
                time: "",
                title: "Moderatori: Kristina Novaković, Ivana Knežević, Marko Šćekić",
              },
              {
                time: "10:00 - 10:10",
                title: "Zdravstvena njega bolesnika prije i poslije anestezije – Dejan Mikulić, KCCG",
              },
              {
                time: "10:10 - 10:20",
                title:
                  "Komunikacija u operacionoj sali i njen uticaj na sigurnost pacijenta – Milica Tucić, UKC Vojvodine",
              },
              {
                time: "10:20 - 10:30",
                title: "Anestezija nekad i sad – Danijela Radulović, KCCG",
              },
              {
                time: "10:30 - 10:40",
                title: "Delokrug rada anestetičara u anesteziji – Slaviša Bučić, Zdravstveni centar Loznica",
              },
              {
                time: "10:40 - 10:50",
                title: "Monitoring dubine anestezije – Mevludin Babajić, UKC Tuzla",
              },
              {
                time: "10:50 - 11:00",
                title: "DISKUSIJA",
              },
              {
                time: "11:00 - 11:30",
                title: "Radionica: Optimizacija IV terapije uz Nexivu i BD rješenja (ala 2)",
              },
            ],
          },

          {
            section: "DAN 2 – SUBOTA – SESIJA 3 – SALA 2",
            items: [
              {
                time: "16:00 - 16:45",
                title: "Savremena rješenja za sigurnu intubaciju – FLEXICARE (Radionica)",
              },
              {
                time: "",
                title: "Moderatori: Duško Sijepović, Slavko Šljukić, Milena Pešić",
              },
              {
                time: "16:45 - 17:00",
                title: "Otežan disajni put – prikaz slučaja – Ljiljana Kaluđerović, Institut za bolesti djece KCCG",
              },
              {
                time: "17:00 - 17:15",
                title:
                  "Neočekivana otežana intubacija – kako ostati korak ispred komplikacija – Slobodan Radović, KCCG",
              },
              {
                time: "17:15 - 17:30",
                title: "Uloga anestetičara kod otežane intubacije – Ivana Konatar, OB Bijelo Polje",
              },
              {
                time: "17:30 - 17:40",
                title: "DISKUSIJA",
              },
            ],
          },

          {
            section: "DAN 2 – SUBOTA – SESIJA 4 – SALA 1",
            items: [
              {
                time: "",
                title: "Moderatori: Dejan Mikulić, Bojan Bosnić, Bojana Dobrović",
              },
              {
                time: "16:00 - 16:10",
                title: "Proceduralne analgosedacije i uloga anestetičara – Bojan Mihaljević, KBC Kotor",
              },
              {
                time: "16:10 - 16:20",
                title: "Spinalna (lumbalna) anestezija – Ognjen Putnik, UKC Republike Srpske",
              },
              {
                time: "16:20 - 16:30",
                title:
                  "Izolovana perfuzija ekstremiteta – Novica Radovanović, Institut za onkologiju i radiologiju Srbije",
              },
              {
                time: "16:30 - 16:40",
                title: "Sigurnost i efikasnost u kardiohirurgiji – Marko Šćekić, KCCG",
              },
              {
                time: "16:40 - 16:50",
                title: "Stres u sestrinskoj profesiji – Olivera Jovanović, VMS Ćuprija",
              },
              {
                time: "16:50 - 17:00",
                title: "Sestrinske procedure za pripremu pacijenta za MSCT – Nenad Banković, VMA",
              },
              {
                time: "17:00 - 17:10",
                title: "Uloga sestre u javnom zdravstvu – Selma Krdzalić, ZZJZTK",
              },
              {
                time: "17:10 - 17:20",
                title: "Uloga anestetičara pri operativnom zahvatu djece Radenka Ćirakovic, Zdravstveni centar Loznica",
              },
              {
                time: "17:20 - 17:30",
                title: "DISKUSIJA",
              },
            ],
          },
        ];

  return (
    <div style={{ padding: "40px 20px" }}>
      <h2 style={{ marginBottom: "30px", color: "#1e3a8a", textAlign: "center" }}>
        {language === "en" ? "Agenda & Schedule" : "Agenda i raspored"}
      </h2>

      {/* <div className="d-flex justify-content-center">
        <Link
          href="/doc/schedule.pdf"
          target="_blank"
          style={{ marginBottom: "30px", color: "#1e3a8a", textAlign: "center", textDecoration: "underline" }}
        >
          {language === "en" ? "Download Schedule" : "Preuzmite raspored"}
        </Link>
      </div> */}

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

export default RasporedAgenda;
