"use client";

import React from "react";
import Image from "next/image";
import { useLanguage } from "@/context/LanguageContext";

const AboutContent: React.FC = () => {
  const { language } = useLanguage();

  return (
    <>
      <div className="about-area pt-100 pb-70">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6">
              <div className="about-item">
                <div className="about-left">
                  <Image
                    src="/images/d-home.jpg"
                    alt={language === "en" ? "About the Association" : "O udruženju"}
                    width={626}
                    height={552}
                  />
                </div>
              </div>
            </div>

            <div className="col-lg-6">
              <div className="about-item about-right">
                <Image
                  src="/images/about-shape1.png"
                  alt="Decoration"
                  width={556}
                  height={712}
                />

                {language === "en" ? (
                  <>
                    <h2>About ART Association</h2>
                    <p>
                      The Association of Anesthesiologists, Intensive Care and
                      Transfusion Technicians of Montenegro (ART) brings together
                      healthcare professionals dedicated to improving professional
                      standards, knowledge, and mutual support. Our mission is to
                      advance expertise, ethics, and compassion through education,
                      collaboration, and knowledge exchange among colleagues
                      across the country.
                    </p>
                    <p>
                      Through continuous activities and projects, the ART
                      Association encourages professional development, promotes
                      patient safety, and contributes to improving the quality of
                      healthcare in Montenegro.
                    </p>
                    <p>
                      ART is a community that believes that through shared
                      knowledge, experience, and support, we can build a stronger
                      healthcare system and better conditions for every patient.
                    </p>
                  </>
                ) : (
                  <>
                    <h2>O Udruženju ART</h2>
                    <p>
                      Udruženje anestezičara, tehničara intenzivne njege i
                      transfuzije Crne Gore (ART) okuplja zdravstvene radnike
                      posvećene unapređenju profesionalnih standarda, znanja i
                      međusobne podrške. Naša misija je razvoj stručnosti, etike i
                      humanosti kroz edukaciju, saradnju i razmjenu iskustava među
                      kolegama širom zemlje.
                    </p>
                    <p>
                      Kroz kontinuirane aktivnosti i projekte, Udruženje ART
                      podstiče profesionalni razvoj svojih članova, promoviše
                      bezbjednost pacijenata i doprinosi unapređenju kvaliteta
                      zdravstvene njege u Crnoj Gori.
                    </p>
                    <p>
                      ART je zajednica koja vjeruje da zajedničkim znanjem,
                      iskustvom i podrškom gradimo snažniji zdravstveni sistem i
                      bolje uslove za svakog pacijenta.
                    </p>
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

export default AboutContent;