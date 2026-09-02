"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import MenuItem from "./MenuItem";
import { useMenus } from "../../../libs/menus";
import Image from "next/image";
import LanguageSelector from "../Lang/Language";

const Navbar: React.FC = () => {
  const [menu, setMenu] = useState(true);
  const menus = useMenus();

  const toggleNavbar = () => {
    setMenu(!menu);
  };

  useEffect(() => {
    let elementId = document.getElementById("navbar");
    document.addEventListener("scroll", () => {
      if (window.scrollY > 170) {
        elementId?.classList.add("is-sticky");
      } else {
        elementId?.classList.remove("is-sticky");
      }
    });
  });

  const classOne = menu ? "collapse navbar-collapse mean-menu" : "collapse navbar-collapse show";
  const classTwo = menu ? "navbar-toggler navbar-toggler-right collapsed" : "navbar-toggler navbar-toggler-right";

  return (
    <>
      <div id="navbar" className="navbar-area sticky-top">
        <div className="main-nav">
          <div className="container">
            <nav className="navbar navbar-expand-md navbar-light">
              <Link href="/" className="navbar-brand">
                <Image src="/images/logo-1.png" alt="udruženje ART Crna Gora" width={250} height={32} />

              </Link>

              <button
                onClick={toggleNavbar}
                className={classTwo}
                type="button"
                data-toggle="collapse"
                data-target="#navbarSupportedContent"
                aria-controls="navbarSupportedContent"
                aria-expanded="false"
                aria-label="Toggle navigation"
              >
                <span className="icon-bar top-bar"></span>
                <span className="icon-bar middle-bar"></span>
                <span className="icon-bar bottom-bar"></span>
              </button>

              <div className={classOne} id="navbarSupportedContent">
                <ul className="navbar-nav">
                  {menus.map((menuItem) => (
                    <MenuItem key={menuItem.label} {...menuItem} />
                  ))}
                </ul>
                <div className="mobile-language-selector d-md-none">
                  <LanguageSelector />
                </div>
              </div>

              <div className="desktop-language-selector d-none d-md-block">
                <LanguageSelector />
              </div>
            </nav>
          </div>
        </div>
      </div>

      <style jsx>{`
        .mobile-language-selector {
          display: flex;
          justify-content: center;
          padding: 14px 15px 18px;
          border-top: 1px solid #eef1f4;
        }

        .mobile-language-selector :global(.language-dropdown) {

          justify-content: center;
        }

        .mobile-language-selector :global(.language-dropdown .dropdown-menu) {
          right: auto !important;
          left: 50%;
          transform: translateX(-50%);
          z-index: 1100;
        }
      `}</style>
    </>
  );
};

export default Navbar;
