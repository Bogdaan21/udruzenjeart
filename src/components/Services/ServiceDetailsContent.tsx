"use client";

import React from "react";
import Link from "next/link";
import { useLanguage } from "@/context/LanguageContext";
import GalleryAgenda1 from "./GalleryAgenda1";

const CONGRESS_VIDEO_ID = "xnOEXp2KhZM";
const CONGRESS_VIDEO_URL = "https://www.youtube.com/watch?v=xnOEXp2KhZM";

const ServiceDetailsContent: React.FC = () => {
  const { language } = useLanguage();
  const isEnglish = language === "en";

  return (
    <main className="congress-article">
      <header className="congress-hero">
        <div className="container">
          <div className="congress-hero-content">
            <h1>
              {isEnglish
                ? "The First Congress of the ART Association of Montenegro"
                : "Prvi kongres Udruženja ART Crne Gore"}
            </h1>
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

            <div className="hero-story">
              <div className="hero-story-heading">
                <span>{isEnglish ? "About the event" : "O događaju"}</span>
                <h2>{isEnglish ? "A meeting of knowledge and experience" : "Susret znanja i iskustva"}</h2>
              </div>

              <div className="hero-story-copy">
                {isEnglish ? (
                  <>
                    <p className="hero-story-lead">
                      The First Congress of the ART Association of Montenegro brought together nurses, technicians,
                      lecturers and partners from Montenegro and abroad in Bar.
                    </p>
                    <p>
                      Through expert lectures, panel discussions and practical workshops, participants exchanged
                      experience in anesthesia, intensive care, transfusion medicine and modern nursing. The congress
                      also created new professional connections and opportunities for future cooperation.
                    </p>
                  </>
                ) : (
                  <>
                    <p className="hero-story-lead">
                      Prvi kongres Udruženja ART Crne Gore okupio je u Baru medicinske sestre, tehničare, predavače i
                      partnere iz Crne Gore i inostranstva.
                    </p>
                    <p>
                      Kroz stručna predavanja, panel diskusije i praktične radionice učesnici su razmjenjivali iskustva
                      iz oblasti anestezije, intenzivne njege, transfuzije i savremenog sestrinstva. Kongres je otvorio i
                      nova profesionalna povezivanja i mogućnosti za buduću saradnju.
                    </p>
                  </>
                )}
              </div>
            </div>
          </div>
        </div>
      </header>

      <GalleryAgenda1 />

      <section className="congress-video" aria-labelledby="congress-video-heading">
        <div className="container">
          <div className="video-layout">
            <div className="video-copy">
              <span>{isEnglish ? "Video" : "Video"}</span>
              <h2 id="congress-video-heading">{isEnglish ? "Watch the congress video" : "Pogledajte video sa kongresa"}</h2>
              <p>
                {isEnglish
                  ? "A gathering of healthcare professionals dedicated to sharing knowledge, strengthening professional connections and improving everyday clinical practice."
                  : "Susret zdravstvenih profesionalaca posvećen razmjeni znanja, jačanju stručnih veza i unapređenju svakodnevne kliničke prakse."}
              </p>
              <div className="video-actions">
                <a className="youtube-link" href={CONGRESS_VIDEO_URL} target="_blank" rel="noopener noreferrer">
                  <i className="icofont-youtube-play" aria-hidden="true"></i>
                  {isEnglish ? "Open on YouTube" : "Otvori na YouTube-u"}
                </a>
                <Link href="/agenda" className="agenda-link">
                  <i className="icofont-calendar" aria-hidden="true"></i>
                  {isEnglish ? "View the congress agenda" : "Pogledajte agendu kongresa"}
                </Link>
              </div>
            </div>

            <div className="video-frame">
              <iframe
                src={`https://www.youtube-nocookie.com/embed/${CONGRESS_VIDEO_ID}`}
                title={
                  isEnglish
                    ? "Video from the First Congress of the ART Association"
                    : "Video sa Prvog kongresa Udruženja ART"
                }
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerPolicy="strict-origin-when-cross-origin"
                allowFullScreen
              ></iframe>
            </div>
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
            linear-gradient(rgba(0, 0, 0, 0.62), rgba(0, 0, 0, 0.62)),
            url("/images/congress-april-bar/10.jpg") center 45% / cover no-repeat;
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

        .congress-kicker {
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
          color: #fff;
          font-size: 27px;
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

        .hero-story {
          display: grid;
          grid-template-columns: minmax(230px, 0.7fr) minmax(0, 1.3fr);
          gap: 48px;
          margin-top: 42px;
          padding-top: 38px;
          border-top: 1px solid rgba(255, 255, 255, 0.24);
        }

        .hero-story-heading > span {
          display: inline-block;
          margin-bottom: 10px;
          color: rgba(255, 255, 255, 0.75);
          font-size: 12px;
          font-weight: 700;
          letter-spacing: 0.12em;
          text-transform: uppercase;
        }

        .hero-story-heading h2 {
          margin: 0;
          color: #fff;
          font-size: 29px;
          line-height: 1.35;
        }

        .hero-story-copy p {
          margin-bottom: 15px;
          color: rgba(255, 255, 255, 0.82);
          font-size: 15px;
          line-height: 1.8;
        }

        .hero-story-copy p:last-child {
          margin-bottom: 0;
        }

        .hero-story-copy .hero-story-lead {
          color: #fff;
          font-size: 17px;
          font-weight: 600;
        }

        .congress-video {
          padding: 90px 0 100px;
          background: #fff;
        }

        .video-layout {
          display: grid;
          grid-template-columns: minmax(0, 0.85fr) minmax(0, 1.25fr);
          gap: 58px;
          align-items: center;
        }

        .video-copy > span {
          display: inline-block;
          margin-bottom: 13px;
          color: #0046c0;
          font-size: 13px;
          font-weight: 700;
          letter-spacing: 0.12em;
          text-transform: uppercase;
        }

        .video-copy h2 {
          margin-bottom: 20px;
          font-size: 36px;
          line-height: 1.3;
        }

        .video-copy p {
          margin-bottom: 16px;
          color: #5b7181;
          font-size: 16px;
          line-height: 1.75;
        }

        .video-actions {
          display: flex;
          flex-direction: column;
          align-items: flex-start;
          gap: 12px;
          margin-top: 8px;
        }

        .video-actions a {
          display: inline-flex;
          align-items: center;
          gap: 9px;
          padding: 14px 22px;
          border-radius: 7px;
          color: #fff;
          font-weight: 600;
          transition: background 0.25s ease, transform 0.25s ease;
        }

        .video-actions a:hover {
          color: #fff;
          transform: translateY(-2px);
        }

        .video-actions .youtube-link {
          background: #e62117;
          box-shadow: 0 10px 24px rgba(230, 33, 23, 0.22);
        }

        .video-actions .youtube-link:hover {
          background: #c91912;
        }

        .video-actions .agenda-link {
          background: #0046c0;
          box-shadow: 0 10px 24px rgba(0, 70, 192, 0.2);
        }

        .video-actions .agenda-link:hover {
          background: #003a9f;
        }

        .video-actions a i {
          font-size: 20px;
        }

        .video-frame {
          position: relative;
          overflow: hidden;
          width: 100%;
          padding-top: 56.25%;
          border-radius: 14px;
          background: #08131e;
          box-shadow: 0 18px 45px rgba(22, 49, 72, 0.16);
        }

        .video-frame iframe {
          position: absolute;
          inset: 0;
          width: 100%;
          height: 100%;
          border: 0;
        }

        @media (max-width: 991px) {
          .congress-hero {
            padding: 76px 0 72px;
          }

          .video-layout {
            grid-template-columns: 1fr;
            gap: 34px;
          }

          .hero-story {
            grid-template-columns: 1fr;
            gap: 20px;
          }
        }

        @media (max-width: 767px) {
          .congress-hero {
            padding: 58px 0 54px;
          }

          .congress-hero h1 {
            font-size: 36px;
          }

          .congress-facts {
            grid-template-columns: 1fr;
          }

          .congress-video {
            padding: 65px 0 70px;
          }

          .video-copy h2 {
            font-size: 29px;
          }

          .hero-story {
            margin-top: 32px;
            padding-top: 30px;
          }

          .hero-story-heading h2 {
            font-size: 25px;
          }

          .video-layout {
            gap: 28px;
          }
        }
      `}</style>
    </main>
  );
};

export default ServiceDetailsContent;
