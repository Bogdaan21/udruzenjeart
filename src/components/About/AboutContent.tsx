"use client";

import React from "react";
import Image from "next/image";

const AboutContent: React.FC = () => {
  return (
    <>
      <div className="about-area pt-100 pb-70">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6">
              <div className="about-item">
                <div className="about-left">
                  <Image
                    src="/images/about1.jpg"
                    alt="O udruženju"
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
                  alt="Dekoracija"
                  width={556}
                  height={712}
                />

                <h2>O Udruženju ART</h2>

                <p>
                  Udruženje anestezičara, tehničara intenzivne njege i transfuzije Crne Gore (ART)
                  okuplja zdravstvene radnike posvećene unapređenju profesionalnih standarda,
                  znanja i međusobne podrške. Naša misija je razvoj stručnosti, etike i humanosti
                  kroz edukaciju, saradnju i razmjenu iskustava među kolegama širom zemlje.
                </p>

                <p>
                  Kroz kontinuirane aktivnosti i projekte, Udruženje ART podstiče profesionalni
                  razvoj svojih članova, promoviše bezbjednost pacijenata i doprinosi unapređenju
                  kvaliteta zdravstvene njege u Crnoj Gori.
                </p>

                <p>
                  ART je zajednica koja vjeruje da zajedničkim znanjem, iskustvom i podrškom
                  gradimo snažniji zdravstveni sistem i bolje uslove za svakog pacijenta.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AboutContent;