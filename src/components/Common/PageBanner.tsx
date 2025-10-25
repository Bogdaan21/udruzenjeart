"use client";

import React from "react";

interface PageBannerProps {
  pageTitle: string;
  homePageUrl: string;
  homePageText: string;
  activePageText: string;
  bgImage: string;
}

const PageBanner: React.FC<PageBannerProps> = ({ pageTitle, homePageUrl, homePageText, activePageText, bgImage }) => {
  return (
    <div className="page-title-area" style={{ backgroundImage: `url(${bgImage})` }}>
      <div className="d-table">
        <div className="d-table-cell">
          <div className="page-title-item">
            <h2>{pageTitle}</h2>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PageBanner;
