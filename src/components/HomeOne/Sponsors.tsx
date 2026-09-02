"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { useLanguage } from "@/context/LanguageContext";

type Partner = {
  name: string;
  image: string;
  href?: string;
};

const goldSponsors: Partner[] = [
  { name: "Urion", image: "/images/urion.png" },
  { name: "Dräger", image: "/images/drager.png", href: "https://www.draeger.com/" },
];

const silverSponsors: Partner[] = [
  { name: "Rauche Medical", image: "/images/rauche.svg", href: "https://rauchemedical.me" },
  { name: "Farmalab", image: "/images/farmalab.png", href: "https://farmalab.me/" },
];

const bronzeSponsors: Partner[] = [
  { name: "Farmont", image: "/images/farmont.png", href: "https://www.farmont.me/" },
  { name: "Medical Solutions", image: "/images/medical-solutions.png", href: "https://medical-solutions.me/" },
  { name: "Salus", image: "/images/salus.png", href: "https://healthismadeathome.salus.global" },
];

const professionalPartners: Partner[] = [
  { name: "ESNO", image: "/images/esn.png", href: "https://esno.org/" },
  { name: "IFNA", image: "/images/ifna.png", href: "https://ifna.site/" },
];

const Sponsors: React.FC = () => {
  const { language } = useLanguage();
  const isEnglish = language === "en";

  const groups = [
    { title: isEnglish ? "Gold sponsors" : "Zlatni sponzori", tone: "gold", partners: goldSponsors },
    { title: isEnglish ? "Silver sponsors" : "Srebrni sponzori", tone: "silver", partners: silverSponsors },
    { title: isEnglish ? "Bronze sponsors" : "Bronzani sponzori", tone: "bronze", partners: bronzeSponsors },
    {
      title: isEnglish ? "Professional partners" : "Stručni partneri",
      tone: "partner",
      partners: professionalPartners,
    },
  ];

  const renderLogo = (partner: Partner) => (
    <Image
      src={partner.image}
      alt={partner.name}
      width={220}
      height={100}
      className="partner-logo"
      sizes="(max-width: 575px) 70vw, (max-width: 991px) 35vw, 220px"
    />
  );

  return (
    <section className="partners-area" aria-labelledby="partners-heading">
      <div className="container">
        <div className="partners-heading">
          <span>{isEnglish ? "Together for better healthcare" : "Zajedno za bolje zdravstvo"}</span>
          <h2 id="partners-heading">{isEnglish ? "Partners and sponsors" : "Partneri i sponzori"}</h2>
          <p>
            {isEnglish
              ? "We thank the organizations and companies that support professional education, cooperation and the work of the ART Association."
              : "Zahvaljujemo organizacijama i kompanijama koje podržavaju stručnu edukaciju, saradnju i rad Udruženja ART."}
          </p>
        </div>

        <div className="partner-groups">
          {groups.map((group) => (
            <div className={`partner-group partner-group-${group.tone}`} key={group.title}>
              <div className="group-label">
                <span aria-hidden="true"></span>
                <h3>{group.title}</h3>
              </div>

              <div className="partner-grid">
                {group.partners.map((partner) => (
                  <div className="partner-card" key={partner.name}>
                    {partner.href ? (
                      <Link
                        href={partner.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={`${partner.name} — ${isEnglish ? "open website" : "otvori sajt"}`}
                      >
                        {renderLogo(partner)}
                      </Link>
                    ) : (
                      renderLogo(partner)
                    )}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      <style jsx>{`
        .partners-area {
          padding: 92px 0 96px;
          background: #f5f8fc;
        }

        .partners-heading {
          max-width: 760px;
          margin: 0 auto 52px;
          text-align: center;
        }

        .partners-heading > span {
          display: inline-block;
          margin-bottom: 12px;
          color: #0046c0;
          font-size: 13px;
          font-weight: 700;
          letter-spacing: 0.11em;
          text-transform: uppercase;
        }

        .partners-heading h2 {
          margin-bottom: 15px;
          font-size: 38px;
          font-weight: 700;
        }

        .partners-heading p {
          margin: 0;
          color: #5a7080;
          font-size: 16px;
          line-height: 1.75;
        }

        .partner-groups {
          display: grid;
          gap: 24px;
        }

        .partner-group {
          display: grid;
          grid-template-columns: 190px 1fr;
          gap: 28px;
          align-items: center;
          padding: 25px 28px;
          border: 1px solid #e2e8ee;
          border-radius: 14px;
          background: #fff;
          box-shadow: 0 12px 32px rgba(31, 64, 91, 0.06);
        }

        .group-label {
          display: flex;
          align-items: center;
          gap: 12px;
        }

        .group-label > span {
          display: block;
          flex: 0 0 10px;
          width: 10px;
          height: 42px;
          border-radius: 10px;
          background: #0046c0;
        }

        .partner-group-gold .group-label > span {
          background: #d4af37;
        }

        .partner-group-silver .group-label > span {
          background: #aab2bb;
        }

        .partner-group-bronze .group-label > span {
          background: #ba722e;
        }

        .group-label h3 {
          margin: 0;
          color: #263f51;
          font-size: 17px;
          line-height: 1.4;
        }

        .partner-grid {
          display: grid;
          grid-template-columns: repeat(3, minmax(0, 1fr));
          gap: 16px;
        }

        .partner-card {
          display: flex;
          align-items: center;
          justify-content: center;
          min-height: 116px;
          padding: 15px 20px;
          border: 1px solid #edf0f3;
          border-radius: 10px;
          background: #fff;
          transition: transform 0.25s ease, border-color 0.25s ease, box-shadow 0.25s ease;
        }

        .partner-card:hover {
          transform: translateY(-3px);
          border-color: #cbd9e8;
          box-shadow: 0 10px 24px rgba(31, 64, 91, 0.1);
        }

        .partner-card :global(a) {
          display: flex;
          width: 100%;
          align-items: center;
          justify-content: center;
        }

        .partner-card :global(.partner-logo) {
          width: auto;
          height: auto;
          max-width: 100%;
          max-height: 72px;
          margin: 0;
          object-fit: contain;
          filter: saturate(0.92);
          transition: filter 0.25s ease;
        }

        .partner-card:hover :global(.partner-logo) {
          filter: saturate(1);
        }

        @media (max-width: 991px) {
          .partner-group {
            grid-template-columns: 1fr;
            gap: 20px;
          }

          .partner-grid {
            grid-template-columns: repeat(2, minmax(0, 1fr));
          }
        }

        @media (max-width: 575px) {
          .partners-area {
            padding: 65px 0 70px;
          }

          .partners-heading {
            margin-bottom: 36px;
          }

          .partners-heading h2 {
            font-size: 29px;
          }

          .partner-group {
            padding: 22px 18px;
          }

          .partner-grid {
            grid-template-columns: 1fr;
          }

          .partner-card {
            min-height: 105px;
          }
        }
      `}</style>
    </section>
  );
};

export default Sponsors;
