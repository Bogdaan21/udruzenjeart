"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { useLanguage } from "@/context/LanguageContext";

const CountdownSection = () => {
  const { language } = useLanguage();

  // 🎯 Datum do kog se odbrojava
  const targetDate = new Date("2025-12-31T23:59:59").getTime();

  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  const [isReady, setIsReady] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      const now = new Date().getTime();
      const distance = targetDate - now;

      if (distance > 0) {
        const days = Math.floor(distance / (1000 * 60 * 60 * 24));
        const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((distance % (1000 * 60)) / 1000);
        setTimeLeft({ days, hours, minutes, seconds });
        setIsReady(true); // ✅ kada je spremno, fade-in animacija počinje
      } else {
        clearInterval(interval);
      }
    }, 100);

    return () => clearInterval(interval);
  }, [targetDate]);

  // 🇬🇧 / 🇲🇪 tekstovi
  const labels = {
    title: language === "en" ? "Application deadline ends in:" : "Rok za prijave ističe za:",
    apply: language === "en" ? "Apply Now" : "Prijavi se",
    days: language === "en" ? "Days" : "Dana",
    hours: language === "en" ? "Hours" : "Sati",
    minutes: language === "en" ? "Minutes" : "Minuta",
    seconds: language === "en" ? "Seconds" : "Sekundi",
  };

  if (!isReady) {
    // ✅ sprečava blicanje
    return null;
  }

  return (
    <div className="countdown-wrapper text-center count slider-text fade-in">
      <h3 className="countdown-title">{labels.title}</h3>

      <div className="countdown-grid">
        {/* Gornji red – samo Days */}
        <div className="days-box">
          <div className="time-box big-box">
            <h2>{timeLeft.days}</h2>
            <p>{labels.days}</p>
          </div>
        </div>

        {/* Donji red – Hours, Minutes, Seconds */}
        <div className="bottom-row">
          {[
            { value: timeLeft.hours, label: labels.hours },
            { value: timeLeft.minutes, label: labels.minutes },
            { value: timeLeft.seconds, label: labels.seconds },
          ].map((item, index) => (
            <div key={index} className="time-box small-box">
              <h2>{item.value}</h2>
              <p>{item.label}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="common-btn mt-4">
        <Link href="/appointment">{labels.apply}</Link>
      </div>

      <style jsx>{`
        /* 🕒 Glavni layout */
        .count {
          margin-top: -160px !important;
        }

        .countdown-wrapper {
          color: #fff;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          margin-top: 20px;
          opacity: 0;
          animation: fadeIn 1.2s ease-in-out forwards;
        }

        .countdown-title {
          font-size: 25px;
          font-weight: 500;
          margin-bottom: 35px;
          color: #ffffff;
        }

        .countdown-grid {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 25px;
        }

        .days-box {
          display: flex;
          justify-content: center;
          width: 100%;
        }

        .bottom-row {
          display: flex;
          justify-content: center;
          gap: 20px;
          flex-wrap: wrap;
        }

        /* 🧊 Stilovi za boxeve */
        .time-box {
          background: rgba(0, 0, 0, 0.45);
          border-radius: 12px;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          transition: all 0.3s ease;
          animation: pulse 2.5s infinite ease-in-out;
        }

        .big-box {
          width: 120px;
          height: 120px;
        }

        .small-box {
          width: 90px;
          height: 90px;
        }

        .time-box:hover {
          background: rgba(255, 255, 255, 0.15);
          transform: translateY(-5px);
        }

        .time-box h2 {
          margin: 0;
          font-size: 38px;
          font-weight: 700;
          color: #fff;
          line-height: 1;
        }

        .time-box p {
          margin: 6px 0 0;
          font-size: 14px;
          color: #ccc;
          text-transform: uppercase;
          letter-spacing: 0.5px;
        }

        /* ✨ Fade-in animacija */
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        /* 💓 Puls efekat */
        @keyframes pulse {
          0% {
            transform: scale(1);
          }
          50% {
            transform: scale(1.05);
          }
          100% {
            transform: scale(1);
          }
        }

        /* 📱 Responsive */
        @media (max-width: 768px) {
          .count {
            margin-top: 0px !important;
          }

          .big-box {
            width: 100px;
            height: 100px;
          }

          .small-box {
            width: 80px;
            height: 80px;
          }

          .time-box h2 {
            font-size: 28px;
          }

          .countdown-title {
            font-size: 22px;
          }
        }
      `}</style>
    </div>
  );
};

export default CountdownSection;
