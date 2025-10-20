"use client";

import React from "react";
import Link from "next/link";
import FeedbackForm from "./FeedbackForm";
import Image from "next/image";

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();
  return (
    <>
      <footer className="pt-100 pb-70" style={{ backgroundImage: `url(/images/footer-bg.png)` }}>
        <div className="container">
          <div className="row">
            <div className="col-sm-6 col-lg-4">
              <div className="footer-item">
                <div className="footer-contact pe-2">
                  <h3>Contact Us</h3>
                  <ul>
                    <li>
                      <i className="icofont-ui-message"></i>
                      <a href="mailto:info@udruzenjeart.me">info@udruzenjeart.me</a>
                      <a href="mailto:udruzenje.art.mne@gmail.com">udruzenje.art.mne@gmail.com</a>
                    </li>
                    <li>
                      <i className="icofont-stock-mobile"></i>
                      <a href="tel:+38269820006">Call: +382 69 820 006</a>
                      <a href="tel:+38269820006">Call: +382 69 820 006</a>{" "}
                    </li>
                    <li>
                      <i className="icofont-location-pin"></i>
                      Podgorica, Crna Gora
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="col-sm-6 col-lg-2">
              <div className="footer-item">
                <div className="footer-quick">
                  <h3>Quick Links</h3>
                  <ul>
                    <li>
                      <Link href="/">Početna</Link>
                    </li>
                    <li>
                      <Link href="/about">O udruženju</Link>
                    </li>
                    <li>
                      <Link href="/appointment">Prijava</Link>
                    </li>
                    <li>
                      <Link href="/contact">Kontakt</Link>
                    </li>
                    <li>
                      <Link href="/faq">Najčešća pitanja</Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="col-sm-6 col-lg-3">
              <div className="footer-item">
                <div className="footer-quick">
                  <h3>Pratite nas</h3>
                  <ul>
                    <li>
                      <a href="https://www.facebook.com" target="_blank">
                        <i className="icofont-facebook"></i> Facebook
                      </a>
                    </li>
                    <li>
                      <a href="https://www.instagram.com" target="_blank">
                        <i className="icofont-instagram"></i> Instagram
                      </a>ESN Logo
                    </li>
                    <li>
                      <a href="https://www.linkedin.com" target="_blank">
                        <i className="icofont-linkedin"></i> LinkedIn
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="col-sm-6 col-lg-3">
              <div className="footer-item text-center">
                <Image
                  src="/images/esn.png"
                  alt="ESN Logo"
                  width={180}
                  height={80}
                  className="img-fluid"
                  style={{
                    background: "white",
                    objectFit: "contain",
                    marginTop: "10px",
                    filter: "drop-shadow(0 2px 6px rgba(0,0,0,0.1))",
                  }}
                />
                <p style={{ marginTop: "10px", fontSize: "14px", color: "white" }}>
                  Partner projekta – Evropska studentska mreža
                </p>
              </div>
            </div>
          </div>
        </div>
      </footer>

      <div className="copyright-area">
        <div className="container">
          <div className="copyright-item">
            <p>
              {currentYear} &copy;{" "}
              <a href="https://botech.me/" target="_blank">
                botech IT Solutions
              </a>
              <span> v0.1.0</span>
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
