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
                <Image src="/images/logo-1.png" alt="logo" width={250} height={32} />
                                          <Image
                            src="/images/esn.png"
                            alt="ESN Logo"
                            width={180}
                            height={80}
                            className="img-fluid"
                            style={{
                              background: "white",
                              objectFit: "contain",

                              marginRight: "20px",
                              filter: "drop-shadow(0 2px 6px rgba(0,0,0,0.1))",
                            }}
                          />
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
              </div>

              <div className="hide-mobile">
                <LanguageSelector />
              </div>
            </nav>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
