"use client";
  
import React from "react";

const Stats: React.FC = () => {
  return (
    <>
      <div className="counter-area">
        <div className="container">
          <div
            className="row counter-bg"
            style={{ backgroundImage: `url(/images/map-bg.png)` }}
          >
            <div className="col-sm-6 col-md-3 col-lg-3">
              <div className="counter-item">
                <i className="icofont-users-social"></i>
                <h3 className="counter">Članstvo</h3>
                <p>Zdravstveni radnici iz oblasti anestezije, intenzivne njege i transfuzije</p>
              </div>
            </div>

            <div className="col-sm-6 col-md-3 col-lg-3">
              <div className="counter-item">
                <i className="icofont-education"></i>
                <h3>
                  <span className="counter">Edukacija</span>
                </h3>
                <p>Kontinuirano stručno usavršavanje i nacionalni skupovi</p>
              </div>
            </div>

            <div className="col-sm-6 col-md-3 col-lg-3">
              <div className="counter-item">
                <i className="icofont-handshake-deal"></i>
                <h3 className="counter">Saradnja</h3>
                <p>Partnerstvo sa domaćim i međunarodnim organizacijama</p>
              </div>
            </div>

            <div className="col-sm-6 col-md-3 col-lg-3">
              <div className="counter-item">
                <i className="icofont-history"></i>
                <h3 className="counter">Osnivanje</h3>
                <p>Udruženje u fazi formalnog osnivanja i širenja mreže članova</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Stats;
