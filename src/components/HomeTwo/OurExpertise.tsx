"use client";

import React from "react";
import Image from "next/image";

const OurExpertise: React.FC = () => {
  return (
    <>
      <div className="speciality-area pb-100">
        <div className="container-fluid p-0">
          <div className="row m-0">
            <div className="col-lg-7">
              <div className="speciality-left">
                <div className="section-title-two">
                  <span>Udruženje ART</span>
                  <h2>Naša misija i ciljevi</h2>
                </div>

                <div className="speciality-item">
                  <div className="row m-0">
                    {[
                      {
                        title: "Unapređenje struke",
                        text: "Razvijamo i promovišemo profesionalne standarde u oblastima anestezije, intenzivne njege i transfuzije.",
                      },
                      {
                        title: "Edukacija i usavršavanje",
                        text: "Organizujemo seminare, radionice i stručne skupove radi stalnog obrazovanja članova.",
                      },
                      {
                        title: "Saradnja",
                        text: "Gradimo veze sa domaćim i međunarodnim zdravstvenim institucijama i udruženjima.",
                      },
                      {
                        title: "Etika i humanost",
                        text: "Promovišemo solidarnost, empatiju i etičke principe kao temelj profesionalnog rada.",
                      },
                    ].map((item, index) => (
                      <div className="col-sm-6 col-lg-6" key={index}>
                        <div className="speciality-inner equal-box">
                          <i className="icofont-check-circled"></i>
                          <h3>{item.title}</h3>
                          <p>{item.text}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            <div className="col-lg-5 pr-0">
              <div
                className="speciality-item speciality-right"
                style={{ backgroundImage: `url(/images/about4.jpg)` }}
              >
                <Image
                  src="/images/about4.jpg"
                  alt="Naša misija"
                  width={845}
                  height={850}
                />

                <div className="speciality-emergency">
                  <div className="speciality-icon">
                    <i className="icofont-ui-call"></i>
                  </div>
                  <h3>Kontakt</h3>
                  <p>+382 69 820 006</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Stilizacija kocki */}
      <style jsx>{`
        .equal-box {
          height: 220px;
          display: flex;
          flex-direction: column;
          justify-content: center;
          text-align: left;
          background: #fff;
          border-radius: 8px;
          box-shadow: 0 2px 8px rgba(0, 0, 0, 0.05);
          padding: 20px;
          transition: all 0.3s ease;
        }

        .equal-box:hover {
          transform: translateY(-5px);
          box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
        }

        .equal-box h3 {
          font-size: 18px;
          font-weight: 600;
          margin-top: 10px;
          color: #1f2937;
        }

        .equal-box p {
          margin-top: 8px;
          color: #4b5563;
          font-size: 15px;
        }

        .equal-box i {
          font-size: 24px;
          color: #0d6efd;
        }
      `}</style>
    </>
  );
};

export default OurExpertise;