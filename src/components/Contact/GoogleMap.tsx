"use client";

import React from "react";

const GoogleMap: React.FC = () => {
  return (
    <>
      <div className="map-area" style={{ marginTop: "50px" }}>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14561.128421877484!2d19.23559254081991!3d42.43687142890521!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x134deb0017cb93b3%3A0x3f7ba1f3ef48adc7!2sKonzilijum%20za%20magnetnu!5e0!3m2!1sen!2s!4v1760961095238!5m2!1sen!2s"
          width="100%"
          height="550"
          style={{ border: 0, borderRadius: "10px" }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </>
  );
};

export default GoogleMap;