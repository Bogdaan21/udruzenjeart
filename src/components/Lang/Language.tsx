"use client";

import { useEffect, useState } from "react";

export default function LanguageSelector() {
  const [open, setOpen] = useState(false);
  const [language, setLanguage] = useState<"en" | "me">("en");
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const savedLang = sessionStorage.getItem("language");
    if (savedLang === "en" || savedLang === "me") {
      setLanguage(savedLang);
    }
    setLoaded(true); // ✅ sada znamo da je storage učitan
  }, []);

  const handleSelect = (lang: "en" | "me") => {
    setLanguage(lang);
    sessionStorage.setItem("language", lang);
    setOpen(false);
  };

  // ⛔️ dok se storage ne učita — ne prikazuj ništa (nema blica)
  if (!loaded) return null;

  return (
    <div className="language-dropdown position-relative">
      {/* Dugme */}
      <button
        className="btn btn-light d-flex align-items-center gap-2"
        type="button"
        onClick={() => setOpen(!open)}
      >
        <span
          role="img"
          aria-label={language === "en" ? "English" : "Montenegrin"}
          style={{ fontSize: "20px" }}
        >
          {language === "en" ? "🇬🇧" : "🇲🇪"}
        </span>
        <span>{language.toUpperCase()}</span>
        <i
          className={`icofont-simple-down transition-all ${
            open ? "rotate-180" : ""
          }`}
          style={{ fontSize: "12px" }}
        ></i>
      </button>

      {/* Dropdown meni */}
      {open && (
        <ul
          className="dropdown-menu show"
          style={{
            position: "absolute",
            top: "100%",
            left: 0,
            display: "block",
            minWidth: "150px",
            borderRadius: "8px",
            boxShadow: "0 4px 10px rgba(0,0,0,0.1)",
          }}
        >
          <li>
            <button
              className="dropdown-item d-flex align-items-center gap-2"
              type="button"
              onClick={() => handleSelect("en")}
            >
              <span role="img" aria-label="English" style={{ fontSize: "20px" }}>
                🇬🇧
              </span>
              English
            </button>
          </li>

          <li>
            <button
              className="dropdown-item d-flex align-items-center gap-2"
              type="button"
              onClick={() => handleSelect("me")}
            >
              <span role="img" aria-label="Montenegrin" style={{ fontSize: "20px" }}>
                🇲🇪
              </span>
              Crnogorski
            </button>
          </li>
        </ul>
      )}
    </div>
  );
}