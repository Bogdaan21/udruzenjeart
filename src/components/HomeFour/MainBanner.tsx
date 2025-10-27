"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { useLanguage } from "@/context/LanguageContext";
import CountdownSection from "../CountdownSection/CountdownSection";

const MainBanner: React.FC = () => {
  const { language } = useLanguage();

  return (
    <>
      <div className="slider-item slider-item-two" style={{ backgroundImage: `url(/images/home-one/anest.png)` }}>
        <div className="d-table">
          <div className="d-table-cell">
            <div className="container">
              <div className="row align-items-center">
                <div className="col-lg-8 col-md-12">
                  <div className="slider-text pe-lg-4">
                    {language === "en" ? (
                      <>
                        <h1>Together We Build a Stronger and More Compassionate Healthcare Community</h1>
                        <p>
                          The ART Association brings together nurses and technicians in the fields of anesthesia,
                          intensive care, and transfusion. Our mission is to improve knowledge, skills, and mutual
                          support through education, professional events, and collaboration with national and
                          international institutions.
                        </p>
                        <div className="common-btn">
                          <Image
                            src="/images/esn.png"
                            alt="ESN Logo"
                            width={180}
                            height={80}
                            className="img-fluid"
                            style={{
                              background: "white",
                              objectFit: "contain",

                              marginRight: "20px",
                              filter: "drop-shadow(0 2px 6px rgba(0,0,0,0.1))",
                            }}
                          />
                          <Link href="/congress" className="cmn-btn-right">
                            Congress
                          </Link>
                        </div>
                      </>
                    ) : (
                      <>
                        <h1>Zajedno gradimo snažniju i humaniju zdravstvenu zajednicu</h1>
                        <p>
                          Udruženje ART okuplja medicinske sestre i tehničare iz oblasti anestezije, intenzivne njege i
                          transfuzije. Naša misija je unapređenje znanja, vještina i međusobne podrške kroz edukacije,
                          stručne skupove i saradnju sa domaćim i međunarodnim institucijama.
                        </p>
                        <div className="common-btn">
                          <Image
                            src="/images/esn.png"
                            alt="ESN Logo"
                            width={180}
                            height={80}
                            className="img-fluid"
                            style={{
                              background: "white",
                              objectFit: "contain",

                              marginRight: "20px",
                              filter: "drop-shadow(0 2px 6px rgba(0,0,0,0.1))",
                            }}
                          />
                          <Link href="/congress" className="cmn-btn-right">
                            Kongres
                          </Link>
                        </div>
                      </>
                    )}
                  </div>
                </div>
                <div className="col-lg-4 col-md-12 text-center mt-4 mt-lg-0">
                  <CountdownSection />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ✅ Lokalni stilovi */}
      <style jsx>{`
        .slider-item {
          background-size: cover;
          background-position: center;
          position: relative;
           {
            /* padding: 120px 0; */
          }
          color: #fff;
        }

        .slider-text h1 {
          font-size: 42px;
          line-height: 1.3;
          font-weight: 700;
          margin-bottom: 20px;
        }

        .slider-text p {
          font-size: 18px;
          color: rgba(255, 255, 255, 0.9);
          margin-bottom: 25px;
        }

        @media (max-width: 991px) {
          .slider-text {
            text-align: center;
            margin-bottom: 40px;
          }

          .slider-text h1 {
            font-size: 28px;
          }

          .slider-text p {
            font-size: 16px;
          }
        }
      `}</style>
    </>
  );
};

export default MainBanner;
