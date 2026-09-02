"use client";

import React from "react";
import { useLanguage } from "@/context/LanguageContext";
import GalleryAgenda1 from "./GalleryAgenda1";

const ServiceDetailsContent: React.FC = () => {
  const { language } = useLanguage();
  const isEnglish = language === "en";

  return (
    <main className="congress-article">
      <header className="congress-hero">
        <div className="container">
          <div className="congress-hero-content">
            <span className="congress-kicker">
              {isEnglish ? "Congress with international participation" : "Kongres sa međunarodnim učešćem"}
            </span>
            <h1>
              {isEnglish
                ? "The First Congress of the ART Association of Montenegro"
                : "Prvi kongres Udruženja ART Crne Gore"}
            </h1>
            <p>
              {isEnglish
                ? "A meeting of healthcare professionals dedicated to sharing knowledge, strengthening professional connections and advancing everyday clinical practice."
                : "Susret zdravstvenih profesionalaca posvećen razmjeni znanja, jačanju stručnih veza i unapređenju svakodnevne kliničke prakse."}
            </p>

            <div className="congress-facts" aria-label={isEnglish ? "Event information" : "Informacije o događaju"}>
              <div className="congress-fact">
                <i className="icofont-calendar" aria-hidden="true"></i>
                <span>
                  <strong>{isEnglish ? "Date" : "Datum"}</strong>
                  {isEnglish ? "17–19 April 2026" : "17–19. april 2026."}
                </span>
              </div>
              <div className="congress-fact">
                <i className="icofont-location-pin" aria-hidden="true"></i>
                <span>
                  <strong>{isEnglish ? "Location" : "Lokacija"}</strong>
                  Hotel Princess, Bar
                </span>
              </div>
              <div className="congress-fact">
                <i className="icofont-users-alt-4" aria-hidden="true"></i>
                <span>
                  <strong>{isEnglish ? "Organizer" : "Organizator"}</strong>
                  {isEnglish ? "ART Association of Montenegro" : "Udruženje ART Crne Gore"}
                </span>
              </div>
            </div>
          </div>
        </div>
      </header>

      <article className="congress-story">
        <div className="container">
          <div className="congress-story-grid">
            <div className="congress-story-main">
              <span className="story-label">{isEnglish ? "About the event" : "O događaju"}</span>
              <h2>
                {isEnglish
                  ? "Knowledge, practice and regional cooperation in one place"
                  : "Znanje, praksa i regionalna saradnja na jednom mjestu"}
              </h2>

              {isEnglish ? (
                <>
                  <p className="story-lead">
                    The First Congress of the ART Association of Montenegro brought together nurses, technicians,
                    lecturers and partners from Montenegro and abroad in Bar. Over three days, participants exchanged
                    professional experience in anesthesia, intensive care, transfusion medicine and modern nursing.
                  </p>
                  <p>
                    The programme combined plenary lectures, expert sessions, panel discussions and practical
                    workshops. Special attention was given to the development of nursing in Montenegro, specialist
                    nursing, safe IV therapy, advanced resuscitation, modern airway management and ways of managing
                    stress in demanding healthcare environments.
                  </p>
                  <p>
                    Alongside its educational programme, the congress created space for new professional connections,
                    meetings with sponsors and the exchange of ideas that can be applied directly in clinical practice.
                    The ceremonial opening, historical presentation of Montenegrin medical uniforms and social
                    programme gave the gathering a distinctive local character.
                  </p>
                </>
              ) : (
                <>
                  <p className="story-lead">
                    Prvi kongres Udruženja ART Crne Gore okupio je u Baru medicinske sestre, tehničare, predavače i
                    partnere iz Crne Gore i inostranstva. Tokom tri dana učesnici su razmjenjivali stručna iskustva iz
                    oblasti anestezije, intenzivne njege, transfuzije i savremenog sestrinstva.
                  </p>
                  <p>
                    Program je spojio plenarna predavanja, stručne sesije, panel diskusije i praktične radionice.
                    Posebna pažnja bila je posvećena razvoju sestrinstva u Crnoj Gori, specijalističkom sestrinstvu,
                    sigurnoj IV terapiji, naprednoj reanimaciji, savremenom obezbjeđivanju disajnog puta i načinima
                    prevazilaženja stresa u zahtjevnom zdravstvenom okruženju.
                  </p>
                  <p>
                    Pored edukativnog dijela, kongres je otvorio prostor za nova profesionalna povezivanja, susrete sa
                    sponzorima i razmjenu ideja koje se mogu neposredno primijeniti u kliničkoj praksi. Svečano
                    otvaranje, revija crnogorskih medicinskih uniformi kroz istoriju i prateći program dali su skupu
                    poseban lokalni karakter.
                  </p>
                </>
              )}
            </div>

            <aside className="congress-highlights">
              <span className="story-label">{isEnglish ? "Congress highlights" : "Izdvajamo sa kongresa"}</span>
              <h3>{isEnglish ? "Three days of a varied programme" : "Tri dana raznovrsnog programa"}</h3>
              <ul>
                <li>
                  <i className="icofont-check-circled" aria-hidden="true"></i>
                  {isEnglish ? "Plenary and expert lectures" : "Plenarna i stručna predavanja"}
                </li>
                <li>
                  <i className="icofont-check-circled" aria-hidden="true"></i>
                  {isEnglish ? "Hands-on clinical workshops" : "Praktične kliničke radionice"}
                </li>
                <li>
                  <i className="icofont-check-circled" aria-hidden="true"></i>
                  {isEnglish
                    ? "Panel discussions and exchange of experience"
                    : "Panel diskusije i razmjena iskustava"}
                </li>
                <li>
                  <i className="icofont-check-circled" aria-hidden="true"></i>
                  {isEnglish ? "International and regional cooperation" : "Međunarodna i regionalna saradnja"}
                </li>
                <li>
                  <i className="icofont-check-circled" aria-hidden="true"></i>
                  {isEnglish ? "Ceremonial and social programme" : "Svečani i društveni program"}
                </li>
              </ul>
            </aside>
          </div>

          <section className="congress-programme" aria-labelledby="programme-heading">
            <div className="programme-heading">
              <span className="story-label">{isEnglish ? "Programme overview" : "Pregled programa"}</span>
              <h2 id="programme-heading">
                {isEnglish
                  ? "A congress built around learning and connection"
                  : "Kongres posvećen učenju i povezivanju"}
              </h2>
            </div>

            <div className="programme-cards">
              <div className="programme-card">
                <span>01</span>
                <h3>{isEnglish ? "Ceremonial opening" : "Svečano otvaranje"}</h3>
                <p>
                  {isEnglish
                    ? "Participant welcome, a presentation of Montenegrin medical uniforms through history and the opening plenary lecture."
                    : "Dobrodošlica učesnicima, prikaz crnogorskih medicinskih uniformi kroz istoriju i uvodno plenarno predavanje."}
                </p>
              </div>
              <div className="programme-card">
                <span>02</span>
                <h3>{isEnglish ? "Professional programme" : "Stručni program"}</h3>
                <p>
                  {isEnglish
                    ? "Parallel sessions, lectures, panels and practical workshops focused on contemporary clinical challenges."
                    : "Paralelne sesije, predavanja, paneli i praktične radionice usmjereni na savremene kliničke izazove."}
                </p>
              </div>
              <div className="programme-card">
                <span>03</span>
                <h3>{isEnglish ? "Community and cooperation" : "Zajednica i saradnja"}</h3>
                <p>
                  {isEnglish
                    ? "Meetings, sponsor presentations, a formal dinner and a closing social programme for all participants."
                    : "Susreti, predstavljanje sponzora, svečana večera i završni društveni program za sve učesnike."}
                </p>
              </div>
            </div>
          </section>
        </div>
      </article>

      <GalleryAgenda1 />

      <section className="congress-closing">
        <div className="container">
          <div className="congress-closing-card">
            <i className="icofont-quote-left" aria-hidden="true"></i>
            <p>
              {isEnglish
                ? "The First Congress confirmed how important it is to create a space where knowledge is shared openly, professional standards grow and healthcare workers build a stronger community together."
                : "Prvi kongres je potvrdio koliko je važno stvarati prostor u kojem se znanje dijeli otvoreno, stručni standardi rastu, a zdravstveni radnici zajedno grade snažniju zajednicu."}
            </p>
            <strong>{isEnglish ? "ART Association of Montenegro" : "Udruženje ART Crne Gore"}</strong>
          </div>
        </div>
      </section>

      <style jsx>{`
        .congress-article {
          background: #fff;
        }

        .congress-hero {
          position: relative;
          overflow: hidden;
          padding: 92px 0 88px;
          color: #fff;
          background:
            radial-gradient(circle at 88% 18%, rgba(100, 162, 237, 0.36), transparent 28%),
            linear-gradient(135deg, #003994 0%, #0046c0 54%, #1767ca 100%);
        }

        .congress-hero::before,
        .congress-hero::after {
          position: absolute;
          content: "";
          border: 1px solid rgba(255, 255, 255, 0.14);
          border-radius: 50%;
        }

        .congress-hero::before {
          width: 420px;
          height: 420px;
          right: -110px;
          top: -170px;
        }

        .congress-hero::after {
          width: 250px;
          height: 250px;
          right: 145px;
          bottom: -190px;
        }

        .congress-hero-content {
          position: relative;
          z-index: 1;
          max-width: 970px;
        }

        .congress-kicker,
        .story-label {
          display: inline-block;
          font-size: 13px;
          font-weight: 700;
          letter-spacing: 0.12em;
          text-transform: uppercase;
        }

        .congress-kicker {
          margin-bottom: 20px;
          padding: 9px 15px;
          border: 1px solid rgba(255, 255, 255, 0.35);
          border-radius: 30px;
          background: rgba(255, 255, 255, 0.1);
        }

        .congress-hero h1 {
          max-width: 900px;
          margin-bottom: 22px;
          color: #fff;
          font-size: clamp(40px, 5.4vw, 66px);
          font-weight: 700;
          line-height: 1.12;
        }

        .congress-hero-content > p {
          max-width: 780px;
          margin-bottom: 38px;
          color: rgba(255, 255, 255, 0.86);
          font-size: 18px;
          line-height: 1.8;
        }

        .congress-facts {
          display: grid;
          grid-template-columns: repeat(3, minmax(0, 1fr));
          gap: 14px;
        }

        .congress-fact {
          display: flex;
          align-items: center;
          gap: 13px;
          min-height: 88px;
          padding: 17px 18px;
          border: 1px solid rgba(255, 255, 255, 0.18);
          border-radius: 12px;
          background: rgba(255, 255, 255, 0.1);
          backdrop-filter: blur(4px);
        }

        .congress-fact i {
          font-size: 27px;
          color: #fff;
        }

        .congress-fact span,
        .congress-fact strong {
          display: block;
        }

        .congress-fact span {
          color: rgba(255, 255, 255, 0.92);
          font-size: 14px;
          line-height: 1.5;
        }

        .congress-fact strong {
          margin-bottom: 2px;
          color: #fff;
          font-size: 12px;
          letter-spacing: 0.08em;
          text-transform: uppercase;
        }

        .congress-story {
          padding: 96px 0 90px;
        }

        .congress-story-grid {
          display: grid;
          grid-template-columns: minmax(0, 1.7fr) minmax(300px, 0.8fr);
          gap: 64px;
          align-items: start;
        }

        .story-label {
          margin-bottom: 13px;
          color: #0046c0;
        }

        .congress-story-main h2,
        .programme-heading h2 {
          margin-bottom: 25px;
          font-size: 36px;
          line-height: 1.3;
        }

        .congress-story-main p {
          margin-bottom: 20px;
          color: #536a7a;
          font-size: 16px;
          line-height: 1.9;
        }

        .congress-story-main .story-lead {
          color: #253f52;
          font-size: 19px;
          font-weight: 500;
        }

        .congress-highlights {
          padding: 34px 32px;
          border-top: 4px solid #0046c0;
          border-radius: 10px;
          background: #f3f7fd;
          box-shadow: 0 14px 38px rgba(28, 67, 105, 0.08);
        }

        .congress-highlights h3 {
          margin-bottom: 24px;
          font-size: 24px;
          line-height: 1.4;
        }

        .congress-highlights ul {
          margin: 0;
          padding: 0;
          list-style: none;
        }

        .congress-highlights li {
          display: flex;
          gap: 11px;
          padding: 13px 0;
          border-bottom: 1px solid #dce7f3;
          color: #344c5d;
          line-height: 1.55;
        }

        .congress-highlights li:last-child {
          border-bottom: 0;
        }

        .congress-highlights i {
          position: relative;
          top: 2px;
          flex: 0 0 auto;
          color: #0046c0;
          font-size: 18px;
        }

        .congress-programme {
          margin-top: 88px;
          padding-top: 82px;
          border-top: 1px solid #e4ebf1;
        }

        .programme-heading {
          max-width: 760px;
          margin-bottom: 35px;
        }

        .programme-cards {
          display: grid;
          grid-template-columns: repeat(3, minmax(0, 1fr));
          gap: 22px;
        }

        .programme-card {
          min-height: 285px;
          padding: 34px 30px;
          border: 1px solid #e4eaf0;
          border-radius: 12px;
          background: #fff;
          transition: transform 0.25s ease, box-shadow 0.25s ease;
        }

        .programme-card:hover {
          transform: translateY(-4px);
          box-shadow: 0 15px 35px rgba(28, 67, 105, 0.1);
        }

        .programme-card > span {
          display: flex;
          align-items: center;
          justify-content: center;
          width: 48px;
          height: 48px;
          margin-bottom: 24px;
          border-radius: 50%;
          color: #fff;
          background: #0046c0;
          font-weight: 700;
        }

        .programme-card h3 {
          margin-bottom: 13px;
          font-size: 22px;
        }

        .programme-card p {
          margin: 0;
          color: #5a6f7e;
          line-height: 1.75;
        }

        .congress-closing {
          padding: 0 0 100px;
          background: #f5f8fc;
        }

        .congress-closing-card {
          max-width: 900px;
          margin: 0 auto;
          padding: 52px 65px;
          border-radius: 14px;
          text-align: center;
          background: #fff;
          box-shadow: 0 18px 45px rgba(28, 67, 105, 0.09);
        }

        .congress-closing-card i {
          display: block;
          margin-bottom: 20px;
          color: #0046c0;
          font-size: 38px;
        }

        .congress-closing-card p {
          margin-bottom: 18px;
          color: #2c4659;
          font-size: 20px;
          line-height: 1.8;
        }

        .congress-closing-card strong {
          color: #0046c0;
        }

        @media (max-width: 991px) {
          .congress-hero {
            padding: 76px 0 72px;
          }

          .congress-story-grid {
            grid-template-columns: 1fr;
            gap: 42px;
          }

          .programme-cards {
            grid-template-columns: 1fr;
          }

          .programme-card {
            min-height: 0;
          }
        }

        @media (max-width: 767px) {
          .congress-hero {
            padding: 58px 0 54px;
          }

          .congress-hero h1 {
            font-size: 36px;
          }

          .congress-hero-content > p {
            font-size: 16px;
          }

          .congress-facts {
            grid-template-columns: 1fr;
          }

          .congress-story {
            padding: 65px 0;
          }

          .congress-story-main h2,
          .programme-heading h2 {
            font-size: 29px;
          }

          .congress-story-main .story-lead {
            font-size: 17px;
          }

          .congress-highlights,
          .programme-card {
            padding: 28px 24px;
          }

          .congress-programme {
            margin-top: 60px;
            padding-top: 58px;
          }

          .congress-closing {
            padding-bottom: 70px;
          }

          .congress-closing-card {
            padding: 38px 24px;
          }

          .congress-closing-card p {
            font-size: 17px;
          }
        }
      `}</style>
    </main>
  );
};

export default ServiceDetailsContent;
