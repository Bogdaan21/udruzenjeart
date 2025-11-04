"use client";

import React from "react";
import Sidebar from "./Sidebar";
import { useLanguage } from "@/context/LanguageContext";

const DetailsContent: React.FC = () => {
  const { language } = useLanguage();

  return (
    <>
      <div className="doctor-details-area">
        <div className="container">
          <div className="row">
            <div className="col-lg-5">
              <Sidebar />
            </div>

            <div className="col-lg-7">
              <div className="doctor-details-item">
                <div className="doctor-details-right">
                  <div className="doctor-details-biography">
                    {language === "en" ? (
                      <>
                        <h2>Hotel Princess, Bar – Comfort by the Sea</h2>
                        <p>Montenegro, Bar</p>
                      </>
                    ) : (
                      <>
                        <h2>Hotel Princess, Bar – Udobnost uz more</h2>
                        <p>Crna Gora, Bar</p>
                      </>
                    )}
                  </div>

                  <div className="doctor-details-biography">
                    {language === "en" ? (
                      <>
                        <p>
                          Nestled along the Adriatic coast, Hotel Princess in Bar offers a unique blend of elegance,
                          comfort, and Mediterranean charm. With its stunning sea view, modern rooms, and professional
                          service, the hotel is an ideal choice for guests seeking both relaxation and luxury. Whether
                          you are here for a conference, professional event, or a family vacation, Hotel Princess
                          ensures a pleasant and memorable stay.
                        </p>
                        <p>
                          Guests can enjoy a rich gastronomic offer at the hotel restaurant, a relaxing wellness & spa
                          center, and an outdoor pool overlooking the sea. The hotel also provides modern conference
                          halls, free parking, and a short walking distance to the city promenade and marina. Experience
                          Bar at its best – where comfort meets the Adriatic breeze.
                        </p>
                        <p>
                          Hotel Princess – the perfect combination of professional hospitality and Mediterranean
                          serenity.
                        </p>
                        <p>
                          For more information or reservations, visit the official website:{" "}
                          <a
                            href="https://www.hotelprincess.me/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="hotel-link"
                          >
                            www.hotelprincess.me
                          </a>
                        </p>
                      </>
                    ) : (
                      <>
                        <p>
                          Smješten uz jadransku obalu, Hotel Princess u Baru nudi jedinstven spoj elegancije,
                          udobnosti i mediteranskog šarma. Sa predivnim pogledom na more, modernim sobama i
                          profesionalnom uslugom, hotel je idealan izbor za goste koji traže opuštanje i luksuz.
                          Bilo da ste ovdje zbog kongresa, stručnog događaja ili porodičnog odmora, Hotel Princess
                          garantuje prijatan i nezaboravan boravak.
                        </p>
                        <p>
                          Gosti mogu uživati u bogatoj gastronomskoj ponudi hotelskog restorana, wellness & spa centru,
                          kao i bazenu na otvorenom sa pogledom na more. Hotel posjeduje i moderne kongresne sale,
                          besplatan parking i nalazi se na nekoliko minuta šetnje od gradske promenade i marine.
                          Doživite Bar u njegovom najboljem izdanju – gdje se udobnost susreće sa mirisom Jadrana.
                        </p>
                        <p>
                          Hotel Princess – savršen spoj profesionalnog gostoprimstva i mediteranskog mira.
                        </p>
                        <p>
                          Za više informacija ili rezervacije posjetite zvanični sajt:{" "}
                          <a
                            href="https://www.hotelprincess.me/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="hotel-link"
                          >
                            www.hotelprincess.me
                          </a>
                        </p>
                      </>
                    )}
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

export default DetailsContent;