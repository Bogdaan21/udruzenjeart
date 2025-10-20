"use client";

import React from "react";
import Link from "next/link";

const Services: React.FC = () => {
  return (
    <>
      <div className="services-area pb-70">
        <div className="container">
          <div className="section-title">
            <h2>Our Activities</h2>
          </div>

          <div className="row justify-content-center">
            <div className="col-sm-6 col-lg-3">
              <div className="service-item">
                <div className="service-front">
                  <i className="icofont-education"></i>
                  <Link href="#">
                    <h3>Professional Education</h3>
                  </Link>
                  <p>Organizing courses, workshops, and conferences to improve professional skills.</p>
                </div>
              </div>
            </div>

            <div className="col-sm-6 col-lg-3">
              <div className="service-item">
                <div className="service-front">
                  <i className="icofont-users-alt-4"></i>
                  <Link href="#">
                    <h3>Networking</h3>
                  </Link>
                  <p>Connecting anesthetists, intensive care and transfusion professionals across Montenegro.</p>
                </div>
              </div>
            </div>

            <div className="col-sm-6 col-lg-3">
              <div className="service-item">
                <div className="service-front">
                  <i className="icofont-handshake-deal"></i>
                  <Link href="#">
                    <h3>Collaboration</h3>
                  </Link>
                  <p>Cooperation with domestic and international health organizations and associations.</p>
                </div>
              </div>
            </div>

            <div className="col-sm-6 col-lg-3">
              <div className="service-item">
                <div className="service-front">
                  <i className="icofont-heart-beat-alt"></i>
                  <Link href="#">
                    <h3>Support & Solidarity</h3>
                  </Link>
                  <p>Promoting ethical values, teamwork and mutual support among healthcare professionals.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Services;