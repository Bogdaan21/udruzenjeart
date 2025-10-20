"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";

const AboutSection: React.FC = () => {
  return (
    <>
      <div className="about-area pt-100 pb-70">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6">
              <div className="about-item">
                <div className="about-left">
                  <Image src="/images/about1.jpg" alt="About" width={626} height={552} />
                </div>
              </div>
            </div>

            <div className="col-lg-6">
              <div className="about-item about-right">
                <Image src="/images/about-shape1.png" alt="About" width={556} height={712} />
                <h2>Udruženje ART</h2>
                <p>
                  Udruženje anestezičara, tehničara intenzivne njege i transfuzije Crne Gore (ART) okuplja stručnjake
                  koji svakodnevno brinu o najosjetljivijim pacijentima. Naša misija je razvoj profesionalnih standarda,
                  edukacija i međusobna podrška kroz saradnju, razmjenu iskustava i stalno usavršavanje. Kroz zajedničke
                  inicijative gradimo zajednicu u kojoj znanje, humanost i solidarnost čine osnov svakog napretka.
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

                {/* <Link href="/about">Know More</Link> */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AboutSection;
