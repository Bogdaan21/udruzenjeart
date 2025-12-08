"use client";

import React from "react";
import { useLanguage } from "@/context/LanguageContext";
import Image from "next/image";

const Stats: React.FC = () => {
  const { language } = useLanguage();

  return (
    <>
      <div className="counter-area">
        <div className="container">
          <div
            className="row counter-bg"
            style={{ backgroundImage: `url(/images/map-bg.png)`, justifyContent: `center`, alignItems: `center` }}
          >
            {/* 🧩 1️⃣ Članstvo */}
            <div className="col-sm-6 col-md-3 col-lg-3">
              <div className="counter-item">
                <Image
                  src="/images/ifna.png"
                  alt="European specialist nurses organisation"
                  width={180}
                  height={80}
                  className="img-fluid"
                  style={{
                    objectFit: "contain",

                    marginRight: "20px",
                    filter: "drop-shadow(0 2px 6px rgba(0,0,0,0.1))",
                  }}
                />{" "}
                {/* <p>Iternational federation of nurse anesthetists</p> */}
              </div>
            </div>

            {/* 🧩 2️⃣ Edukacija */}
            <div className="col-sm-6 col-md-3 col-lg-3">
              <div className="counter-item">
                <Image
                  src="/images/esn.png"
                  alt="European specialist nurses organisation"
                  width={180}
                  height={80}
                  className="img-fluid"
                  style={{
                    objectFit: "contain",

                    marginRight: "20px",
                    filter: "drop-shadow(0 2px 6px rgba(0,0,0,0.1))",
                  }}
                />
                {/* <p>Europan specialist nurses organisation</p> */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Stats;
