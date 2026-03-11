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
            <div className="col-sm-6 col-md-3 col-lg-3">
              <div className="counter-item">
                <Link href="https://rauchemedical.me" target="_blank" rel="noopener noreferrer">
                  <Image
                    src="/images/rauche.svg"
                    alt="Rauche"
                    width={180}
                    height={80}
                    className="img-fluid img-logos"
                    style={{
                      objectFit: "contain",
                      filter: "drop-shadow(0 2px 6px rgba(0,0,0,0.1))",
                    }}
                  />{" "}
                </Link>
              </div>
            </div>

            <div className="col-sm-6 col-md-3 col-lg-3">
              <div className="counter-item gold-sponsor">
                <span className="gold-badge">{language === "en" ? "Gold sponsor" : "Zlatni sponzor"}</span>

                <Link href="" target="_blank" rel="noopener noreferrer">
                  <Image
                    src="/images/urion.png"
                    alt="Urion – Gold sponsor"
                    width={200}
                    height={90}
                    className="img-fluid img-logos"
                    style={{
                      objectFit: "contain",
                    }}
                  />
                </Link>
              </div>
            </div>

            <div className="col-sm-6 col-md-3 col-lg-3">
              <div className="counter-item">
                <Link href="https://www.draeger.com/" target="_blank" rel="noopener noreferrer">
                  <Image
                    src="/images/drager.png"
                    alt="Drager"
                    width={180}
                    height={80}
                    className="img-fluid img-logos"
                    style={{
                      objectFit: "contain",
                      filter: "drop-shadow(0 2px 6px rgba(0,0,0,0.1))",
                    }}
                  />{" "}
                </Link>
              </div>
            </div>

            <div className="col-sm-6 col-md-3 col-lg-3">
              <div className="counter-item">
                <Link href="https://farmalab.me/" target="_blank" rel="noopener noreferrer">
                  <Image
                    src="/images/farmalab.png"
                    alt="Salus"
                    width={180}
                    height={80}
                    className="img-fluid img-logos"
                    style={{
                      objectFit: "contain",
                      filter: "drop-shadow(0 2px 6px rgba(0,0,0,0.1))",
                    }}
                  />{" "}
                </Link>
              </div>
            </div>

            {/* <div className="col-sm-6 col-md-3 col-lg-3">
              <div className="counter-item">
                <Link href="https://www.iskysoft.us/" target="_blank" rel="noopener noreferrer">
                  <Image
                    src="/images/iskysoft.svg"
                    alt="Iskysoft"
                    width={180}
                    height={80}
                    className="img-fluid img-logos"
                    style={{
                      objectFit: "contain",
                      filter: "drop-shadow(0 2px 6px rgba(0,0,0,0.1))",
                    }}
                  />{" "}
                </Link>
              </div>
            </div> */}

            <div className="col-sm-6 col-md-3 col-lg-3">
              <div className="counter-item">
                <Link href="https://www.farmont.me/" target="_blank" rel="noopener noreferrer">
                  <Image
                    src="/images/farmont.png"
                    alt="Farmont"
                    width={180}
                    height={80}
                    className="img-fluid img-logos"
                    style={{
                      objectFit: "contain",
                      filter: "drop-shadow(0 2px 6px rgba(0,0,0,0.1))",
                    }}
                  />{" "}
                </Link>
              </div>
            </div>

            <div className="col-sm-6 col-md-3 col-lg-3">
              <div className="counter-item">
                <Link href="https://healthismadeathome.salus.global" target="_blank" rel="noopener noreferrer">
                  <Image
                    src="/images/salus.png"
                    alt="Salus"
                    width={180}
                    height={80}
                    className="img-fluid img-logos"
                    style={{
                      objectFit: "contain",
                      filter: "drop-shadow(0 2px 6px rgba(0,0,0,0.1))",
                    }}
                  />{" "}
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Stats;
