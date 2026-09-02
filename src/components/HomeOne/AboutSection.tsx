"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { useLanguage } from "@/context/LanguageContext";

const AboutSection: React.FC = () => {
  const { language } = useLanguage();
  const isEnglish = language === "en";

  return (
    <section className="about-area congress-preview pt-100 pb-70" aria-labelledby="home-congress-heading">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-6">
            <div className="congress-photo-wrap">
              <Image
                src="/images/congress-april-bar/18.jpg"
                alt={
                  isEnglish
                    ? "Participants at the First Congress of the ART Association of Montenegro"
                    : "Učesnici Prvog kongresa Udruženja ART Crne Gore"
                }
                width={1920}
                height={1280}
                className="congress-photo"
                sizes="(max-width: 991px) 100vw, 50vw"
              />
              <div className="congress-photo-badge">
                <i className="icofont-location-pin" aria-hidden="true"></i>
                <span>
                  <strong>Hotel Princess</strong>
                  Bar, Crna Gora
                </span>
              </div>
            </div>
          </div>

          <div className="col-lg-6">
            <div className="about-item congress-copy">
              <span className="congress-eyebrow">
                {isEnglish ? "Congress with international participation" : "Kongres sa međunarodnim učešćem"}
              </span>
              <h2 id="home-congress-heading">
                {isEnglish
                  ? "The First Congress of the ART Association of Montenegro"
                  : "Prvi kongres Udruženja ART Crne Gore"}
              </h2>
              <p className="congress-lead">
                {isEnglish
                  ? "Three days dedicated to professional knowledge, practical skills and stronger cooperation among healthcare professionals from Montenegro and abroad."
                  : "Tri dana posvećena stručnom znanju, praktičnim vještinama i snažnijem povezivanju zdravstvenih profesionalaca iz Crne Gore i inostranstva."}
              </p>

              <div className="congress-meta">
                <div>
                  <i className="icofont-calendar" aria-hidden="true"></i>
                  <span>
                    <strong>{isEnglish ? "Date" : "Datum"}</strong>
                    {isEnglish ? "17–19 April 2026" : "17–19. april 2026."}
                  </span>
                </div>
                <div>
                  <i className="icofont-users-alt-4" aria-hidden="true"></i>
                  <span>
                    <strong>{isEnglish ? "Programme" : "Program"}</strong>
                    {isEnglish ? "Lectures, panels and workshops" : "Predavanja, paneli i radionice"}
                  </span>
                </div>
              </div>

              <p>
                {isEnglish
                  ? "Discover the programme highlights, key topics and a gallery of 85 photographs capturing the atmosphere of this important professional gathering."
                  : "Pogledajte najvažnije djelove programa, ključne stručne teme i galeriju od 85 fotografija koje prenose atmosferu ovog značajnog okupljanja."}
              </p>

              <Link href="/congress" className="congress-button">
                {isEnglish ? "Take me to the Congress" : "Vodi me na kongres"}
                <i className="icofont-rounded-right" aria-hidden="true"></i>
              </Link>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        .congress-preview {
          overflow: hidden;
        }

        .congress-photo-wrap {
          position: relative;
          margin-bottom: 30px;
          padding-right: 20px;
        }

        .congress-photo-wrap::before {
          position: absolute;
          content: "";
          width: 72%;
          height: 78%;
          right: 0;
          bottom: -18px;
          border-radius: 18px;
          background: #eaf2fc;
        }

        .congress-photo-wrap :global(.congress-photo) {
          position: relative;
          z-index: 1;
          display: block;
          width: 100%;
          height: 470px;
          border-radius: 14px;
          object-fit: cover;
          box-shadow: 0 18px 42px rgba(34, 69, 98, 0.16);
        }

        .congress-photo-badge {
          position: absolute;
          z-index: 2;
          right: -4px;
          bottom: 26px;
          display: flex;
          align-items: center;
          gap: 12px;
          min-width: 220px;
          padding: 15px 18px;
          border-radius: 10px;
          color: #fff;
          background: #0046c0;
          box-shadow: 0 12px 30px rgba(0, 70, 192, 0.3);
        }

        .congress-photo-badge i {
          font-size: 27px;
        }

        .congress-photo-badge span,
        .congress-photo-badge strong {
          display: block;
        }

        .congress-photo-badge span {
          font-size: 12px;
          line-height: 1.5;
        }

        .congress-photo-badge strong {
          font-size: 14px;
        }

        .congress-copy {
          padding-left: 35px;
        }

        .congress-eyebrow {
          display: inline-block;
          margin-bottom: 13px;
          color: #0046c0;
          font-size: 13px;
          font-weight: 700;
          letter-spacing: 0.1em;
          text-transform: uppercase;
        }

        .congress-copy h2 {
          margin-bottom: 19px;
          font-size: 38px;
          line-height: 1.25;
        }

        .congress-copy p {
          color: #536b7b;
          line-height: 1.8;
        }

        .congress-copy .congress-lead {
          color: #2f4859;
          font-size: 17px;
          font-weight: 500;
        }

        .congress-meta {
          display: grid;
          grid-template-columns: repeat(2, minmax(0, 1fr));
          gap: 12px;
          margin: 26px 0 25px;
        }

        .congress-meta > div {
          display: flex;
          align-items: center;
          gap: 11px;
          padding: 15px;
          border: 1px solid #e2e9f0;
          border-radius: 9px;
          background: #f8fafc;
        }

        .congress-meta i {
          flex: 0 0 auto;
          color: #0046c0;
          font-size: 24px;
        }

        .congress-meta span,
        .congress-meta strong {
          display: block;
        }

        .congress-meta span {
          color: #5c7180;
          font-size: 12px;
          line-height: 1.45;
        }

        .congress-meta strong {
          margin-bottom: 2px;
          color: #243e51;
          font-size: 12px;
        }

        .congress-copy :global(.congress-button) {
          display: inline-flex;
          align-items: center;
          gap: 9px;
          margin-top: 4px;
          padding: 15px 24px;
          border-radius: 7px;
          color: #fff;
          background: #0046c0;
          font-size: 15px;
          font-weight: 600;
          box-shadow: 0 10px 24px rgba(0, 70, 192, 0.22);
        }

        .congress-copy :global(.congress-button:hover) {
          color: #fff;
          background: #003a9d;
          transform: translateY(-2px);
        }

        @media (max-width: 991px) {
          .congress-photo-wrap {
            padding-right: 0;
          }

          .congress-copy {
            padding: 35px 0 0;
          }
        }

        @media (max-width: 575px) {
          .congress-photo-wrap :global(.congress-photo) {
            height: 320px;
          }

          .congress-photo-badge {
            right: 10px;
            bottom: 15px;
            min-width: 200px;
          }

          .congress-copy h2 {
            font-size: 29px;
          }

          .congress-meta {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
    </section>
  );
};

export default AboutSection;
