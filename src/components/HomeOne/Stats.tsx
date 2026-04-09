"use client";

import React from "react";
import { useLanguage } from "@/context/LanguageContext";
import Image from "next/image";
import Link from "next/link";

const Stats: React.FC = () => {
  const { language } = useLanguage();

  return (
    <>
      <div className="counter-area">
        <div className="container">
          <div
            className="row counter-bg"
            style={{
              backgroundImage: `url(/images/map-bg.png)`,
              justifyContent: `center`,
              alignItems: `center`,
              gap: "30px",
            }}
          >
            <div className="col-12 text-center">
              <div className="gold-sponsor d-inline-block">
                <span className="gold-badge">{language === "en" ? "Gold sponsors" : "Zlatni sponzori"}</span>

                <div className="d-flex justify-content-center align-items-center gap-4 flex-wrap">
                  {/* URION */}
                  <div className="sponsor-box sponsor-box-gold">
                    <Link href="" target="_blank">
                      <Image src="/images/urion.png" alt="Urion" width={220} height={110} className="img-logos" />
                    </Link>
                  </div>

                  {/* DRAGER */}
                  <div className="sponsor-box sponsor-box-gold">
                    <Link href="https://www.draeger.com/" target="_blank">
                      <Image src="/images/drager.png" alt="Drager" width={220} height={110} className="img-logos" />
                    </Link>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-12 text-center">
              <div className="silver-sponsor d-inline-block">
                <span className="silver-badge">{language === "en" ? "Silver sponsors" : "Srebrni sponzori"}</span>

                <div className="d-flex justify-content-center align-items-center gap-4 flex-wrap">
                  {/* RAUCHE */}
                  <div className="sponsor-box">
                    <Link href="https://rauchemedical.me" target="_blank" rel="noopener noreferrer">
                      <Image src="/images/rauche.svg" alt="Rauche" width={200} height={100} className="img-logos" />
                    </Link>
                  </div>

                  {/* FARMALAB */}
                  <div className="sponsor-box">
                    <Link href="https://farmalab.me/" target="_blank" rel="noopener noreferrer">
                      <Image src="/images/farmalab.png" alt="Farmalab" width={200} height={100} className="img-logos" />
                    </Link>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-12 text-center">
              <div className="bronze-sponsor d-inline-block">
                <span className="bronze-badge">{language === "en" ? "Bronze sponsors" : "Bronzani sponzori"}</span>

                <div className="d-flex justify-content-center align-items-center gap-4 flex-wrap">
                  {/* FARMONT */}
                  <div className="sponsor-box">
                    <Link href="https://www.farmont.me/" target="_blank" rel="noopener noreferrer">
                      <Image src="/images/farmont.png" alt="Farmont" width={200} height={100} className="img-logos" />
                    </Link>
                  </div>

                  {/* MEDICAL SOLUTIONS */}
                  <div className="sponsor-box">
                    <Link href="https://medical-solutions.me/" target="_blank" rel="noopener noreferrer">
                      <Image
                        src="/images/medical-solutions.png"
                        alt="Medical Solutions"
                        width={200}
                        height={100}
                        className="img-logos"
                      />
                    </Link>
                  </div>

                  {/* SALUS */}
                  <div className="sponsor-box">
                    <Link href="https://healthismadeathome.salus.global" target="_blank" rel="noopener noreferrer">
                      <Image src="/images/salus.png" alt="Salus" width={200} height={100} className="img-logos" />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Stats;
