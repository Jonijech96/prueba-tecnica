import React from "react";
import "./Main.css";
import icpin from "../../assets/iconos/ic_pin.svg";
import arrow from "../../assets/iconos/arrow.svg";

export const Main = () => {
  return (
    <main className="main">
      <section className="hero">
        <div className="hero-content flex container">
          <div className="hero-text">
            <div className="hero-title">
              <img src={icpin} alt="" className="hero-icon" />
              <h1>AMERICA DEL SUR</h1>
            </div>
            <span className="line"></span>
            <p className="hero-description">
              Lugares maravillosos por America del Sur
            </p>
            <p className="hero-description-2">
              Estos son algunos lugares que eligen la mayoria de los turistas
              que visitan America del Sur
            </p>
          </div>
          <div className="hero-notes">
            <span className="hero-notes-title">
              PRÓXIMA AVENTURA
              <img src={arrow} alt="" />
            </span>
            <h4 className="hero-notes-subtitle">Europa Meridional</h4>
            <h5>Forman parte de veinte países,</h5>
            <h5>ej. España, Francia, etc.</h5>
          </div>
          <div className="number">01</div>
        </div>
      </section>
    </main>
  );
};
