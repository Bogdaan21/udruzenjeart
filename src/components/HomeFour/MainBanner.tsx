"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { useLanguage } from "@/context/LanguageContext";

const MainBanner: React.FC = () => {
  const { language } = useLanguage();

  return (
    <>
      <div
        className="slider-item slider-item-two"
        style={{ backgroundImage: `url(/images/home-one/home-slider-bg.jpg)` }}
      >
        <div className="d-table">
          <div className="d-table-cell">
            <div className="container">
              <div className="slider-text">
                <div className="slider-shape">
                  <Image
                    src="/images/covid-circle-image.png"
                    alt="Shape"
                    width={500}
                    height={500}
                  />
                </div>

                {language === "en" ? (
                  <>
                    <h1>
                      Together We Build a Stronger and More Compassionate
                      Healthcare Community
                    </h1>
                    <p>
                      The ART Association brings together nurses and technicians
                      in the fields of anesthesia, intensive care, and
                      transfusion. Our mission is to improve knowledge, skills,
                      and mutual support through education, professional events,
                      and collaboration with national and international
                      institutions.
                    </p>
                    <div className="common-btn">
                      <Link href="/appointment">Apply Now</Link>
                      <Link href="/about" className="cmn-btn-right">
                        Learn More
                      </Link>
                    </div>
                  </>
                ) : (
                  <>
                    <h1>
                      Zajedno gradimo snažniju i humaniju zdravstvenu zajednicu
                    </h1>
                    <p>
                      Udruženje ART okuplja medicinske sestre i tehničare iz
                      oblasti anestezije, intenzivne njege i transfuzije. Naša
                      misija je unapređenje znanja, vještina i međusobne podrške
                      kroz edukacije, stručne skupove i saradnju sa domaćim i
                      međunarodnim institucijama.
                    </p>
                    <div className="common-btn">
                      <Link href="/appointment">Prijavi se</Link>
                      <Link href="/about" className="cmn-btn-right">
                        Pročitaj više
                      </Link>
                    </div>
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

export default MainBanner;