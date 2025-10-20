"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";

const MainBanner: React.FC = () => {
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
                  <Image src="/images/covid-circle-image.png" alt="Shape" width={500} height={500} />
                </div>

                <h1>Zajedno gradimo snažniju i humaniju zdravstvenu zajednicu</h1>
                <p>
                  Udruženje ART okuplja medicinske sestre i tehničare iz oblasti anestezije, intenzivne njege i
                  transfuzije. Naša misija je unapređenje znanja, vještina i međusobne podrške kroz edukacije, stručne
                  skupove i saradnju sa domaćim i međunarodnim institucijama.
                </p>

                <div className="common-btn">
                  <Link href="/appointment">Prijavi se</Link>

                  <Link href="/about" className="cmn-btn-right">
                    Pročitaj više
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default MainBanner;
