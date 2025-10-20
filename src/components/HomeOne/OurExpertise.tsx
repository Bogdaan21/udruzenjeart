"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";

const OurExpertise: React.FC = () => {
  return (
    <>
      <div className="expertise-area pb-70">
        <div className="container">
          <div className="section-title">
            <h2>Naša stručna područja</h2>
            <p>
              Udruženje okuplja zdravstvene radnike posvećene unapređenju
              standarda i prakse u oblastima anestezije, intenzivne njege i
              transfuzije, kroz kontinuiranu edukaciju i saradnju.
            </p>
          </div>

          <div className="row align-items-center">
            <div className="col-lg-6">
              <div className="expertise-item">
                <div className="row">
                  <div className="col-sm-6 col-lg-6">
                    <div className="expertise-inner">
                      <i className="icofont-injection-syringe"></i>
                      <h3>
                        <Link href="#">Anestezija</Link>
                      </h3>
                      <p>
                        Promovisanje bezbjedne i efikasne primjene anestezije u
                        svim zdravstvenim ustanovama.
                      </p>
                    </div>
                  </div>

                  <div className="col-sm-6 col-lg-6">
                    <div className="expertise-inner">
                      <i className="icofont-heart-beat-alt"></i>
                      <h3>
                        <Link href="#">Intenzivna njega</Link>
                      </h3>
                      <p>
                        Fokus na napredne metode liječenja i praćenja pacijenata
                        u jedinicama intenzivne njege.
                      </p>
                    </div>
                  </div>

                  <div className="col-sm-6 col-lg-6">
                    <div className="expertise-inner">
                      <i className="icofont-blood-drop"></i>
                      <h3>
                        <Link href="#">Transfuzija</Link>
                      </h3>
                      <p>
                        Unapređenje znanja i standarda u oblasti transfuzijske
                        medicine i bezbjednog rukovanja krvnim proizvodima.
                      </p>
                    </div>
                  </div>

                  <div className="col-sm-6 col-lg-6">
                    <div className="expertise-inner">
                      <i className="icofont-education"></i>
                      <h3>
                        <Link href="#">Edukacija i saradnja</Link>
                      </h3>
                      <p>
                        Organizovanje seminara, radionica i kongresa radi
                        stalnog stručnog usavršavanja članova udruženja.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-lg-6">
              <div className="expertise-item">
                <div className="expertise-right">
                  <Image
                    src="/images/about4.jpg"
                    alt="Stručnost"
                    width={845}
                    height={850}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default OurExpertise;