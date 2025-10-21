"use client";

import { useState } from "react";
import Image from "next/image";
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
        <Image
          src={language === "en" ? "/images/gb-flag.png" : "/images/mne-flag.png"}
          alt={language === "en" ? "English" : "Crnogorski"}
          width={24}
          height={16}
          style={{ borderRadius: "2px" }}
        />
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
            <button className="dropdown-item d-flex align-items-center gap-2" onClick={() => handleSelect("en")}>
              <Image src="/images/gb-flag.png" alt="English" width={20} height={14} />
              English
            </button>
          </li>
          <li>
            <button className="dropdown-item d-flex align-items-center gap-2" onClick={() => handleSelect("me")}>
              <Image src="/images/mne-flag.png" alt="Crnogorski" width={20} height={14} />
              Crnogorski
            </button>
          </li>
        </ul>
      )}
    </div>
  );
}