"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import { useLanguage } from "@/context/LanguageContext";

const images = Array.from({ length: 85 }, (_, index) => `/images/congress-april-bar/${index + 1}.jpg`);
const INITIAL_IMAGE_COUNT = 12;

const GalleryAgenda1: React.FC = () => {
  const { language } = useLanguage();
  const isEnglish = language === "en";
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const [showAll, setShowAll] = useState(false);
  const [touchStartX, setTouchStartX] = useState<number | null>(null);
  const [touchEndX, setTouchEndX] = useState<number | null>(null);

  const visibleImages = showAll ? images : images.slice(0, INITIAL_IMAGE_COUNT);

  const closeModal = () => setActiveIndex(null);

  const showPrev = () => {
    setActiveIndex((current) => (current === null ? null : (current - 1 + images.length) % images.length));
  };

  const showNext = () => {
    setActiveIndex((current) => (current === null ? null : (current + 1) % images.length));
  };

  useEffect(() => {
    if (activeIndex === null) return;

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "ArrowRight") showNext();
      if (event.key === "ArrowLeft") showPrev();
      if (event.key === "Escape") closeModal();
    };

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [activeIndex]);

  const handleTouchEnd = () => {
    if (touchStartX === null || touchEndX === null) return;

    const distance = touchStartX - touchEndX;
    if (distance > 50) showNext();
    if (distance < -50) showPrev();

    setTouchStartX(null);
    setTouchEndX(null);
  };

  return (
    <section className="congress-gallery" aria-labelledby="gallery-heading">
      <div className="container">
        <div className="gallery-heading">
          <div>
            <span>{isEnglish ? "Moments from the event" : "Trenuci sa događaja"}</span>
            <h2 id="gallery-heading">{isEnglish ? "Congress photo gallery" : "Galerija fotografija sa kongresa"}</h2>
          </div>
          <p>
            {isEnglish
              ? "Explore 85 photographs from the opening ceremony, lectures, workshops and social programme."
              : "Pogledajte 85 fotografija sa svečanog otvaranja, predavanja, radionica i pratećeg programa."}
          </p>
        </div>

        <div className="gallery-grid">
          {visibleImages.map((src, index) => (
            <button
              key={src}
              type="button"
              className={`gallery-card gallery-card-${index % 7}`}
              onClick={() => setActiveIndex(index)}
              aria-label={
                isEnglish ? `Open congress photograph ${index + 1}` : `Otvori fotografiju ${index + 1} sa kongresa`
              }
            >
              <Image
                src={src}
                alt={
                  isEnglish
                    ? `The First Congress of the ART Association, photograph ${index + 1}`
                    : `I Kongres Udruženja ART, fotografija ${index + 1}`
                }
                width={600}
                height={450}
                className="gallery-image"
                sizes="(max-width: 575px) 100vw, (max-width: 991px) 50vw, 33vw"
                loading="lazy"
              />
              <span className="gallery-overlay" aria-hidden="true">
                <i className="icofont-search-2"></i>
              </span>
            </button>
          ))}
        </div>

        <div className="gallery-actions">
          <button type="button" className="gallery-toggle" onClick={() => setShowAll((current) => !current)}>
            {showAll
              ? isEnglish
                ? "Show fewer photographs"
                : "Prikaži manje fotografija"
              : isEnglish
                ? `View the full gallery (${images.length})`
                : `Pogledaj cijelu galeriju (${images.length})`}
          </button>
        </div>
      </div>

      {activeIndex !== null && (
        <div
          className="lightbox"
          role="dialog"
          aria-modal="true"
          aria-label={isEnglish ? "Photo viewer" : "Pregled fotografija"}
          onClick={closeModal}
        >
          <button
            className="lightbox-button close-button"
            onClick={closeModal}
            type="button"
            aria-label={isEnglish ? "Close gallery" : "Zatvori galeriju"}
          >
            <i className="icofont-close"></i>
          </button>

          <button
            className="lightbox-button navigation-button previous-button"
            onClick={(event) => {
              event.stopPropagation();
              showPrev();
            }}
            type="button"
            aria-label={isEnglish ? "Previous photograph" : "Prethodna fotografija"}
          >
            <i className="icofont-rounded-left"></i>
          </button>

          <div
            className="lightbox-content"
            onClick={(event) => event.stopPropagation()}
            onTouchStart={(event) => setTouchStartX(event.touches[0].clientX)}
            onTouchMove={(event) => setTouchEndX(event.touches[0].clientX)}
            onTouchEnd={handleTouchEnd}
          >
            <Image
              src={images[activeIndex]}
              alt={
                isEnglish
                  ? `The First Congress of the ART Association, photograph ${activeIndex + 1}`
                  : `I Kongres Udruženja ART, fotografija ${activeIndex + 1}`
              }
              width={1600}
              height={1067}
              className="lightbox-image"
              sizes="95vw"
              priority
            />
            <span className="photo-counter">
              {activeIndex + 1} / {images.length}
            </span>
          </div>

          <button
            className="lightbox-button navigation-button next-button"
            onClick={(event) => {
              event.stopPropagation();
              showNext();
            }}
            type="button"
            aria-label={isEnglish ? "Next photograph" : "Sljedeća fotografija"}
          >
            <i className="icofont-rounded-right"></i>
          </button>
        </div>
      )}

      <style jsx>{`
        .congress-gallery {
          padding: 92px 0 100px;
          background: #f5f8fc;
        }

        .gallery-heading {
          display: grid;
          grid-template-columns: minmax(0, 1.15fr) minmax(280px, 0.65fr);
          gap: 50px;
          align-items: end;
          margin-bottom: 42px;
        }

        .gallery-heading span {
          display: inline-block;
          margin-bottom: 13px;
          color: #0046c0;
          font-size: 13px;
          font-weight: 700;
          letter-spacing: 0.12em;
          text-transform: uppercase;
        }

        .gallery-heading h2 {
          margin: 0;
          font-size: 38px;
          line-height: 1.25;
        }

        .gallery-heading p {
          margin: 0;
          color: #586f7f;
          font-size: 16px;
          line-height: 1.75;
        }

        .gallery-grid {
          display: grid;
          grid-template-columns: repeat(3, minmax(0, 1fr));
          grid-auto-rows: 255px;
          gap: 16px;
        }

        .gallery-card {
          position: relative;
          overflow: hidden;
          padding: 0;
          border: 0;
          border-radius: 10px;
          cursor: pointer;
          background: #dfe8f1;
          box-shadow: 0 8px 22px rgba(28, 67, 105, 0.08);
        }

        .gallery-card-0,
        .gallery-card-6 {
          grid-column: span 2;
        }

        .gallery-card :global(.gallery-image) {
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: transform 0.4s ease;
        }

        .gallery-overlay {
          position: absolute;
          inset: 0;
          display: flex;
          align-items: center;
          justify-content: center;
          color: #fff;
          background: rgba(0, 55, 140, 0.52);
          opacity: 0;
          transition: opacity 0.3s ease;
        }

        .gallery-overlay i {
          font-size: 30px;
          transform: scale(0.8);
          transition: transform 0.3s ease;
        }

        .gallery-card:hover :global(.gallery-image),
        .gallery-card:focus-visible :global(.gallery-image) {
          transform: scale(1.045);
        }

        .gallery-card:hover .gallery-overlay,
        .gallery-card:focus-visible .gallery-overlay {
          opacity: 1;
        }

        .gallery-card:hover .gallery-overlay i,
        .gallery-card:focus-visible .gallery-overlay i {
          transform: scale(1);
        }

        .gallery-card:focus-visible,
        .gallery-toggle:focus-visible,
        .lightbox-button:focus-visible {
          outline: 3px solid #73a7ed;
          outline-offset: 3px;
        }

        .gallery-actions {
          display: flex;
          justify-content: center;
          margin-top: 38px;
        }

        .gallery-toggle {
          min-width: 260px;
          padding: 14px 24px;
          border: 0;
          border-radius: 7px;
          color: #fff;
          background: #0046c0;
          font-size: 15px;
          font-weight: 600;
          transition: background 0.25s ease, transform 0.25s ease;
        }

        .gallery-toggle:hover {
          transform: translateY(-2px);
          background: #003a9e;
        }

        .lightbox {
          position: fixed;
          inset: 0;
          z-index: 9999;
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 30px 85px;
          background: rgba(5, 17, 28, 0.94);
        }

        .lightbox-content {
          position: relative;
          display: flex;
          align-items: center;
          justify-content: center;
          max-width: 92vw;
          max-height: 88vh;
        }

        .lightbox-content :global(.lightbox-image) {
          width: auto;
          height: auto;
          max-width: 100%;
          max-height: 86vh;
          border-radius: 8px;
          object-fit: contain;
          box-shadow: 0 20px 55px rgba(0, 0, 0, 0.35);
          touch-action: pan-y;
        }

        .photo-counter {
          position: absolute;
          left: 50%;
          bottom: 14px;
          padding: 7px 12px;
          border-radius: 20px;
          color: #fff;
          background: rgba(0, 0, 0, 0.58);
          font-size: 13px;
          transform: translateX(-50%);
        }

        .lightbox-button {
          position: absolute;
          z-index: 2;
          display: flex;
          align-items: center;
          justify-content: center;
          width: 50px;
          height: 50px;
          padding: 0;
          border: 1px solid rgba(255, 255, 255, 0.22);
          border-radius: 50%;
          color: #fff;
          background: rgba(255, 255, 255, 0.11);
          font-size: 24px;
          transition: background 0.2s ease;
        }

        .lightbox-button:hover {
          background: #0046c0;
        }

        .close-button {
          top: 22px;
          right: 22px;
        }

        .navigation-button {
          top: 50%;
          transform: translateY(-50%);
        }

        .previous-button {
          left: 20px;
        }

        .next-button {
          right: 20px;
        }

        @media (max-width: 991px) {
          .gallery-heading {
            grid-template-columns: 1fr;
            gap: 18px;
          }

          .gallery-grid {
            grid-template-columns: repeat(2, minmax(0, 1fr));
            grid-auto-rows: 225px;
          }

          .gallery-card-0,
          .gallery-card-6 {
            grid-column: span 1;
          }
        }

        @media (max-width: 575px) {
          .congress-gallery {
            padding: 65px 0 70px;
          }

          .gallery-heading h2 {
            font-size: 29px;
          }

          .gallery-grid {
            grid-template-columns: 1fr;
            grid-auto-rows: 235px;
          }

          .lightbox {
            padding: 70px 12px;
          }

          .lightbox-button {
            width: 42px;
            height: 42px;
            font-size: 20px;
          }

          .close-button {
            top: 14px;
            right: 14px;
          }

          .navigation-button {
            top: auto;
            bottom: 14px;
            transform: none;
          }

          .previous-button {
            left: 14px;
          }

          .next-button {
            right: 14px;
          }
        }
      `}</style>
    </section>
  );
};

export default GalleryAgenda1;
