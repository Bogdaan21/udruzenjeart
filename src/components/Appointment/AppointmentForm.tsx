"use client";

import React, { useRef } from "react";
import Image from "next/image";
import emailjs from "@emailjs/browser";
import { useLanguage } from "@/context/LanguageContext";

const AppointmentForm: React.FC = () => {
  const formRef = useRef<HTMLFormElement>(null);

  const { language } = useLanguage();

  const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!formRef.current) return;

    emailjs
      .sendForm(
        "service_sqzeaxu", // ✅ tvoj service ID
        "template_fs0qvel", // ✅ tvoj template ID
        formRef.current,
        "66z6YyCaQIJcC0X2G" // ✅ tvoj public key
      )
      .then(
        () => {
          alert("✅ Your application has been successfully submitted!");
          formRef.current?.reset();
        },
        (error: { text?: string }) => {
          console.error("Email send error:", error.text || error);
          alert("❌ Failed to send. Please try again later.");
        }
      );
  };

  return (
    <>
      <div className="appointment-area-two ptb-100">
        <div className="container">
          <div className="row justify-content-center appointment-wrap-two">
            <div className="col-lg-12">
              <div className="appointment-item appointment-item-two">
                <div className="appointment-shape">
                  <Image src="/images/hart-img1.png" alt="Shape" width={360} height={264} />
                </div>
                {language === "en" ? <h2>Submit Your Application</h2> : <h2>Pošaljite Vašu prijavu</h2>}{" "}
                <span>
                  {language === "en"
                    ? "Please complete the form below to submit your application"
                    : "Molimo Vas da popunite formu ispod kako biste poslali prijavu"}
                </span>{" "}
                <div className="appointment-form">
                  <form ref={formRef} onSubmit={sendEmail}>
                    <div className="row">
                      {/* Full Name */}
                      <div className="col-lg-6">
                        <div className="form-group">
                          <i className="icofont-business-man-alt-1"></i>
                          <label>{language === "en" ? "Full Name" : "Ime i prezime"}</label>
                          <input
                            type="text"
                            className="form-control"
                            placeholder={language === "en" ? "Enter your full name" : "Unesite vaše ime i prezime"}
                            name="name"
                            required
                          />
                        </div>
                      </div>

                      {/* Email */}
                      <div className="col-lg-6">
                        <div className="form-group">
                          <i className="icofont-ui-message"></i>
                          <label>Email</label>
                          <input
                            type="email"
                            className="form-control"
                            placeholder={language === "en" ? "Enter your email" : "Unesite vaš email"}
                            name="email"
                            required
                          />
                        </div>
                      </div>

                      {/* Phone */}
                      <div className="col-lg-6">
                        <div className="form-group">
                          <i className="icofont-ui-call"></i>
                          <label>{language === "en" ? "Contact Phone" : "Kontakt telefon"}</label>
                          <input
                            type="text"
                            className="form-control"
                            placeholder={language === "en" ? "Enter your phone number" : "Unesite broj telefona"}
                            name="phone"
                            required
                          />
                        </div>
                      </div>

                      {/* Clinic */}
                      <div className="col-lg-6">
                        <div className="form-group">
                          <i className="icofont-hospital"></i>
                          <label>{language === "en" ? "Clinic / Institution" : "Klinika / Ustanova"}</label>
                          <input
                            type="text"
                            className="form-control"
                            placeholder={
                              language === "en"
                                ? "Enter clinic or institution name"
                                : "Unesite naziv klinike ili ustanove"
                            }
                            name="clinic"
                            required
                          />
                        </div>
                      </div>

                      {/* Country */}
                      <div className="col-lg-6">
                        <div className="form-group">
                          <i className="icofont-globe"></i>
                          <label>{language === "en" ? "Country" : "Država"}</label>
                          <input
                            type="text"
                            className="form-control"
                            placeholder={language === "en" ? "Enter your country" : "Unesite državu"}
                            name="country"
                            required
                          />
                        </div>
                      </div>

                      {/* Association */}
                      <div className="col-lg-6">
                        <div className="form-group">
                          <i className="icofont-users"></i>
                          <label>{language === "en" ? "Association" : "Udruženje"}</label>
                          <input
                            type="text"
                            className="form-control"
                            placeholder={language === "en" ? "Enter your association" : "Unesite udruženje"}
                            name="association"
                            required
                          />
                        </div>
                      </div>

                      {/* Topic */}
                      <div className="col-lg-6">
                        <div className="form-group">
                          <i className="icofont-paper"></i>
                          <label>{language === "en" ? "Topic" : "Tema"}</label>
                          <input
                            type="text"
                            className="form-control"
                            placeholder={language === "en" ? "Enter application topic" : "Unesite temu prijave"}
                            name="title"
                            required
                          />
                        </div>
                      </div>

                      {/* Attachment */}
                      <div className="col-lg-6">
                        <div className="form-group">
                          <i className="icofont-file-pdf"></i>
                          <label>
                            {language === "en"
                              ? "Documentation (PDF or Presentation)"
                              : "Dokumentacija (PDF ili prezentacija)"}
                          </label>
                          <input
                            type="file"
                            className="form-control"
                            name="attachment"
                            accept=".pdf,.ppt,.pptx,.doc,.docx"
                            required
                          />
                        </div>
                      </div>
                    </div>

                    <div className="text-center">
                      <button type="submit" className="btn appointment-btn">
                        {language === "en" ? "Submit Application" : "Pošalji prijavu"}
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AppointmentForm;
