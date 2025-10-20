"use client";

import { useState } from "react";
import { useLanguage } from "@/context/LanguageContext";

export default function LanguageSelector() {
  const { language, setLanguage } = useLanguage();
  const [open, setOpen] = useState(false);

  const handleSelect = (lang: "en" | "me") => {
    setLanguage(lang);
    setOpen(false);
  };

  return (
    <div className="language-dropdown position-relative">
      <button
        className="btn btn-light d-flex align-items-center gap-2"
        type="button"
        onClick={() => setOpen(!open)}
      >
        <span style={{ fontSize: "20px" }}>
          {language === "en" ? "🇬🇧" : "🇲🇪"}
        </span>
        <span>{language.toUpperCase()}</span>
      </button>

      {open && (
        <ul
          className="dropdown-menu show"
          style={{
            position: "absolute",
            top: "100%",
            right: 0,
            display: "block",
            minWidth: "150px",
            borderRadius: "8px",
            boxShadow: "0 4px 10px rgba(0,0,0,0.1)",
          }}
        >
          <li>
            <button className="dropdown-item" onClick={() => handleSelect("en")}>
              🇬🇧 English
            </button>
          </li>
          <li>
            <button className="dropdown-item" onClick={() => handleSelect("me")}>
              🇲🇪 Crnogorski
            </button>
          </li>
        </ul>
      )}
    </div>
  );
}