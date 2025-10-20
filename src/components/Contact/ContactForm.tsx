"use client";

import React from "react";
import Image from "next/image";
import { useLanguage } from "@/context/LanguageContext";

const ContactForm: React.FC = () => {
  const { language } = useLanguage();

  // 🇲🇪 / 🇬🇧 tekstovi
  const content = {
    title:
      language === "en"
        ? "Drop your message for any info or question"
        : "Pošaljite poruku za sve informacije ili pitanja",
    placeholders: {
      name: language === "en" ? "Your name" : "Vaše ime",
      email: language === "en" ? "Your email address" : "Vaša email adresa",
      phone: language === "en" ? "Your phone" : "Vaš broj telefona",
      subject: language === "en" ? "Subject" : "Naslov poruke",
      message: language === "en" ? "Your message..." : "Vaša poruka...",
    },
    button: language === "en" ? "Send Message" : "Pošalji poruku",
    emergencyTitle: language === "en" ? "Emergency Call" : "Hitni poziv",
  };

  return (
    <>
      <div className="drop-area">
        <div className="container-fluid">
          <div className="row">
            {/* ✅ Lijeva strana - Forma */}
            <div className="col-lg-7 p-0">
              <div
                className="drop-item drop-img"
                style={{ backgroundImage: `url(/images/contact-form-bg.png)` }}
              >
                <div className="drop-left">
                  <h2>{content.title}</h2>

                  <form>
                    <div className="row">
                      {/* Ime */}
                      <div className="col-lg-6 col-md-6">
                        <div className="form-group">
                          <input
                            type="text"
                            name="name"
                            className="form-control"
                            placeholder={content.placeholders.name}
                            required
                          />
                        </div>
                      </div>

                      {/* Email */}
                      <div className="col-lg-6 col-md-6">
                        <div className="form-group">
                          <input
                            type="email"
                            name="email"
                            className="form-control"
                            placeholder={content.placeholders.email}
                            required
                          />
                        </div>
                      </div>

                      {/* Telefon */}
                      <div className="col-lg-6 col-md-6 col-sm-6">
                        <div className="form-group">
                          <input
                            type="text"
                            name="number"
                            className="form-control"
                            placeholder={content.placeholders.phone}
                            required
                          />
                        </div>
                      </div>

                      {/* Naslov */}
                      <div className="col-lg-6 col-md-6">
                        <div className="form-group">
                          <input
                            type="text"
                            name="subject"
                            className="form-control"
                            placeholder={content.placeholders.subject}
                            required
                          />
                        </div>
                      </div>

                      {/* Poruka */}
                      <div className="col-lg-12 col-md-12 col-sm-12">
                        <div className="form-group">
                          <textarea
                            name="text"
                            cols={30}
                            rows={6}
                            className="form-control"
                            placeholder={content.placeholders.message}
                            required
                          ></textarea>
                        </div>
                      </div>

                      {/* Dugme */}
                      <div className="col-lg-12 col-md-12 col-sm-12">
                        <button type="submit" className="drop-btn">
                          {content.button}
                        </button>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>

            {/* ✅ Desna strana - Slika i info */}
            <div className="col-lg-5 p-0">
              <div
                className="speciality-item speciality-right speciality-right-two speciality-right-three"
                style={{ backgroundImage: `url(/images/about4.jpg)` }}
              >
                <Image
                  src="/images/about4.jpg"
                  alt="Contact"
                  width={845}
                  height={850}
                />

                <div className="speciality-emergency">
                  <div className="speciality-icon">
                    <i className="icofont-ui-call"></i>
                  </div>

                  <h3>{content.emergencyTitle}</h3>
                  <p>+382 69 820 006</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ContactForm;