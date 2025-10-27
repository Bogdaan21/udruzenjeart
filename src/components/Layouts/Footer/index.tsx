"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { useLanguage } from "@/context/LanguageContext";

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();
  const { language } = useLanguage();

  return (
    <>
      <footer className="pt-100 pb-70" style={{ backgroundImage: `url(/images/footer-bg.png)` }}>
        <div className="container">
          <div className="row">
            {/* ✅ Kontakt sekcija */}
            <div className="col-sm-6 col-lg-4">
              <div className="footer-item">
                <div className="footer-contact pe-2">
                  <h3>{language === "en" ? "Contact Us" : "Kontakt"}</h3>
                  <ul>
                    <li>
                      <i className="icofont-ui-message"></i>
                      <a href="mailto:info@udruzenjeart.me">info@udruzenjeart.me</a>
                      <a href="mailto:udruzenje.art.mne@gmail.com">udruzenje.art.mne@gmail.com</a>
                    </li>
                    <li>
                      <i className="icofont-stock-mobile"></i>
                      <a href="tel:+38269820006">
                        {language === "en" ? "Call: +382 69 820 006" : "Poziv: +382 69 820 006"}
                      </a>
                    </li>
                    <li>
                      <i className="icofont-location-pin"></i>
                      {language === "en" ? "Podgorica, Montenegro" : "Podgorica, Crna Gora"}
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* ✅ Brzi linkovi */}
            <div className="col-sm-6 col-lg-2">
              <div className="footer-item">
                <div className="footer-quick">
                  <h3>{language === "en" ? "Quick Links" : "Brzi linkovi"}</h3>
                  <ul>
                    <li>
                      <Link href="/">{language === "en" ? "Home" : "Početna"}</Link>
                    </li>
                    <li>
                      <Link href="/about">{language === "en" ? "About" : "O udruženju"}</Link>
                    </li>
                    <li>
                      <Link href="/congress">{language === "en" ? "Congress" : "Kongres"}</Link>
                    </li>
                    <li>
                      <Link href="/contact">{language === "en" ? "Contact" : "Kontakt"}</Link>
                    </li>
                    <li>
                      <Link href="/appointment">{language === "en" ? "Application" : "Prijava"}</Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* ✅ Društvene mreže */}
            <div className="col-sm-6 col-lg-3">
              <div className="footer-item">
                <div className="footer-quick">
                  <h3>{language === "en" ? "Follow Us" : "Pratite nas"}</h3>
                  <ul>
                    <li>
                      <a href="https://www.facebook.com/people/Udruzenje-anesteti%C4%8Daratehni%C4%8Dara-intenzivne-njege-i-transfuzije-Crne-Gore/61574532365801/?rdid=sNcR4PikCshjW2WM&share_url=https%3A%2F%2Fwww.facebook.com%2Fshare%2F16rosXR6xN%2F" target="_blank">
                        <i className="icofont-facebook"></i> Facebook
                      </a>
                    </li>
                    <li>
                      <a href="https://www.instagram.com/udruzenjeart/?igsh=MWVmajQ3ZHBlcGlsOQ%3D%3D&utm_source=qr#" target="_blank">
                        <i className="icofont-instagram"></i> Instagram
                      </a>
                    </li>
                    {/* <li>
                      <a href="https://www.linkedin.com" target="_blank">
                        <i className="icofont-linkedin"></i> LinkedIn
                      </a>
                    </li> */}
                  </ul>
                </div>
              </div>
            </div>

            {/* ✅ Partner sekcija */}
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
