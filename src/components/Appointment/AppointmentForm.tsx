"use client";

import React, { useRef } from "react";
import Image from "next/image";
import emailjs from "@emailjs/browser";

const AppointmentForm: React.FC = () => {
  const formRef = useRef<HTMLFormElement>(null);

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

                <h2>Submit Your Application</h2>
                <span>Please complete the form below to submit your application</span>

                <div className="appointment-form">
                  <form ref={formRef} onSubmit={sendEmail}>
                    <div className="row">
                      {/* Full Name */}
                      <div className="col-lg-6">
                        <div className="form-group">
                          <i className="icofont-business-man-alt-1"></i>
                          <label>Full Name</label>
                          <input
                            type="text"
                            className="form-control"
                            placeholder="Enter your full name"
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
                            placeholder="Enter your email"
                            name="email"
                            required
                          />
                        </div>
                      </div>

                      {/* Phone */}
                      <div className="col-lg-6">
                        <div className="form-group">
                          <i className="icofont-ui-call"></i>
                          <label>Contact Phone</label>
                          <input
                            type="text"
                            className="form-control"
                            placeholder="Enter your phone number"
                            name="phone"
                            required
                          />
                        </div>
                      </div>

                      {/* Clinic */}
                      <div className="col-lg-6">
                        <div className="form-group">
                          <i className="icofont-hospital"></i>
                          <label>Clinic / Institution</label>
                          <input
                            type="text"
                            className="form-control"
                            placeholder="Enter clinic or institution name"
                            name="clinic"
                            required
                          />
                        </div>
                      </div>

                      {/* Country */}
                      <div className="col-lg-6">
                        <div className="form-group">
                          <i className="icofont-globe"></i>
                          <label>Country</label>
                          <input
                            type="text"
                            className="form-control"
                            placeholder="Enter your country"
                            name="country"
                            required
                          />
                        </div>
                      </div>

                      {/* Association */}
                      <div className="col-lg-6">
                        <div className="form-group">
                          <i className="icofont-users"></i>
                          <label>Association</label>
                          <input
                            type="text"
                            className="form-control"
                            placeholder="Enter your association"
                            name="association"
                            required
                          />
                        </div>
                      </div>

                      {/* Topic */}
                      <div className="col-lg-6">
                        <div className="form-group">
                          <i className="icofont-paper"></i>
                          <label>Topic</label>
                          <input
                            type="text"
                            className="form-control"
                            placeholder="Enter application topic"
                            name="title"
                            required
                          />
                        </div>
                      </div>

                      {/* Attachment */}
                      <div className="col-lg-6">
                        <div className="form-group">
                          <i className="icofont-file-pdf"></i>
                          <label>Documentation (PDF or Presentation)</label>
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
                        Submit Application
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