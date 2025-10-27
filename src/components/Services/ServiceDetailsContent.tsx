"use client";

import React from "react";
import Image from "next/image";
import { useLanguage } from "@/context/LanguageContext";

const ServiceDetailsContent: React.FC = () => {
  const { language } = useLanguage();

  return (
    <>
      <div className="service-details-area ptb-100">
        <div className="container">
          <div className="services-details-img">
            <Image src="/images/princess-bar1.jpg" alt="Service Details" width={1920} height={1000} />

            {language === "en" ? (
              <>
                <h2>Hotel Princess, Bar – Comfort by the Sea</h2>
                <p>
                  Nestled along the Adriatic coast, Hotel Princess in Bar offers a unique blend of elegance, comfort,
                  and Mediterranean charm. With its stunning sea view, modern rooms, and professional service, the hotel
                  is an ideal choice for guests seeking both relaxation and luxury. Whether you are here for a
                  conference, professional event, or a family vacation, Hotel Princess ensures a pleasant and memorable
                  stay.
                </p>
                <p>
                  Guests can enjoy a rich gastronomic offer at the hotel restaurant, a relaxing wellness & spa center,
                  and an outdoor pool overlooking the sea. The hotel also provides modern conference halls, free
                  parking, and a short walking distance to the city promenade and marina. Experience Bar at its best –
                  where comfort meets the Adriatic breeze.
                </p>
                <blockquote>
                  <i className="icofont-quote-left"></i>
                  Hotel Princess – the perfect combination of professional hospitality and Mediterranean serenity.
                </blockquote>
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
                <h2>Hotel Princess, Bar – Udobnost uz more</h2>
                <p>
                  Smješten uz samu obalu Jadrana, Hotel Princess u Baru nudi savršen spoj elegancije, udobnosti i
                  mediteranskog šarma. Sa prelijepim pogledom na more, modernim sobama i vrhunskom uslugom, hotel je
                  idealan izbor za sve goste koji žele opuštanje i luksuz na jednom mjestu. Bilo da dolazite zbog
                  konferencije, stručnog skupa ili porodičnog odmora, Hotel Princess će učiniti da vaš boravak bude
                  prijatan i nezaboravan.
                </p>
                <p>
                  Uživajte u bogatoj gastronomskoj ponudi hotelskog restorana, wellness & spa centru, kao i otvorenom
                  bazenu sa pogledom na more. Hotel takođe raspolaže savremenim konferencijskim salama, besplatnim
                  parkingom i nalazi se na svega nekoliko minuta hoda od gradske promenade i marine. Doživite Bar na
                  najbolji način – tamo gdje se udobnost spaja sa mirisom mora.
                </p>
                <blockquote>
                  <i className="icofont-quote-left"></i>
                  &quot; Hotel Princess – savršen spoj profesionalnog gostoprimstva i mediteranskog mira.&quot;
                </blockquote>
                <p>
                  Za više informacija i rezervacije posjetite zvanični sajt:{" "}
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

          <div className="row">
            <div className="col-lg-5">
              <div className="service-details-inner-left" style={{ backgroundImage: `url(/images/signup-bg.jpg)` }}>
                <Image src="/images/signup-bg.jpg" alt="Service" width={1920} height={1200} />
              </div>
            </div>
            {/* <div className="col-lg-7">
              <div className="service-details-inner">
                <h2>We Always Take Care Our Patient</h2>
                <p>
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit. Architecto blanditiis obcaecati veritatis
                  magnam pariatur molestiae in maxime. Animi quae vitae in inventore. Totam mollitia aspernatur
                  provident veniam aperiam placeat impedit! Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Saepe rem natus nobis, dolorum nam excepturi iure autem nemo ducimus temporibus facere, est eum
                  voluptatem, culpa optio fugit assumenda quod? Praesentium.
                </p>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Id, laudantium ullam, iure distinctio officia
                  libero voluptatem obcaecati vero deleniti minima nemo itaque alias nisi eveniet soluta architecto quae
                  laboriosam unde.
                </p>
              </div>
            </div> */}
          </div>
        </div>
      </div>
    </>
  );
};

export default ServiceDetailsContent;
