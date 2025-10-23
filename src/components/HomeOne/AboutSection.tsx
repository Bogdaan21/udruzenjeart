"use client";

import React from "react";
import Head from "next/head";
import Image from "next/image";
import { useLanguage } from "@/context/LanguageContext";

const AboutSection: React.FC = () => {
  const { language } = useLanguage();

  return (
    <>
      <Head>
        <title>{language === "en" ? "About ART Association | Montenegro" : "O Udruženju ART | Crna Gora"}</title>
        <meta
          name="description"
          content={
            language === "en"
              ? "Official site of the Association of Anesthesiologists, Intensive Care and Transfusion Technicians of Montenegro."
              : "Zvanični sajt Udruženja anestezičara, tehničara intenzivne njege i transfuzije Crne Gore (ART)."
          }
        />
        <meta property="og:image" content="/images/d-home.jpg" />
      </Head>
      <div className="about-area pt-100 pb-70">
        <div className="container">
          <div className="row align-items-center">
            {/* LEFT IMAGE */}
            <div className="col-lg-6">
              <div className="about-item">
                <div className="about-left">
                  <Image
                    src="/images/d-home.jpg"
                    alt={language === "en" ? "About ART Association" : "O Udruženju ART"}
                    width={626}
                    height={552}
                    style={{
                      filter: "brightness(70%)",
                    }}
                  />
                </div>
              </div>
            </div>

            {/* RIGHT CONTENT */}
            <div className="col-lg-6">
              <div className="about-item about-right">
                <Image src="/images/about-shape1.png" alt="Decoration" width={556} height={712} />

                {language === "en" ? (
                  <>
                    <h2>ART Association</h2>
                    <p>
                      The Association of Anesthesiologists, Intensive Care and Transfusion Technicians of Montenegro
                      (ART) brings together professionals who care daily for the most sensitive patients. Our mission is
                      to develop professional standards, provide education, and encourage mutual support through
                      collaboration, knowledge sharing, and continuous improvement. Through joint initiatives, we build
                      a community where knowledge, humanity, and solidarity form the foundation of every progress.
                    </p>

                    <ul>
                      <li>
                        <i className="icofont-check-circled"></i>
                        Connecting professionals in anesthesia, nursing, and transfusion
                      </li>
                      <li>
                        <i className="icofont-check-circled"></i>
                        Organizing educational programs and expert meetings
                      </li>
                      <li>
                        <i className="icofont-check-circled"></i>
                        Promoting collaboration and professional growth
                      </li>
                    </ul>

                    {/* <Link href="/about">Learn More</Link> */}
                  </>
                ) : (
                  <>
                    <h2>Udruženje ART</h2>
                    <p>
                      Udruženje anestezičara, tehničara intenzivne njege i transfuzije Crne Gore (ART) okuplja
                      stručnjake koji svakodnevno brinu o najosjetljivijim pacijentima. Naša misija je razvoj
                      profesionalnih standarda, edukacija i međusobna podrška kroz saradnju, razmjenu iskustava i stalno
                      usavršavanje. Kroz zajedničke inicijative gradimo zajednicu u kojoj znanje, humanost i solidarnost
                      čine osnov svakog napretka.
                    </p>

                    <ul>
                      <li>
                        <i className="icofont-check-circled"></i>
                        Povezujemo stručnjake iz oblasti anestezije, njege i transfuzije
                      </li>
                      <li>
                        <i className="icofont-check-circled"></i>
                        Organizujemo edukacije i stručne skupove
                      </li>
                      <li>
                        <i className="icofont-check-circled"></i>
                        Podstičemo saradnju i profesionalni razvoj
                      </li>
                    </ul>

                    {/* <Link href="/about">Pročitaj više</Link> */}
                  </>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AboutSection;
