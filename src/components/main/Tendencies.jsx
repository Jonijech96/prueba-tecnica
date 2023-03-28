import React from "react";
import "./Tendencies.css";

export const Tendencies = () => {
  return (
    <section className="tendencies" id="tendencies">
      <h2 className="title container">TENDENCIAS</h2>
      <div className="card-content container">
        <div className="card shadow card-new">
          <div className="card-img-content card-img-1"></div>
          <div className="card-text ">
            <span className="card-text-new">NUEVO</span>
            <h4>Montañas y Magia</h4>
            <p>
              Aqui la descripcion para{" "}
              <span className="bold">Montañas y magia.</span>
            </p>
          </div>
        </div>
        <div className="card shadow ">
          <div className="card-img-content card-img-2"></div>
          <div className="card-text ">
            <h4>Playas y sol</h4>
            <p>
              La descripcion de <span className="bold">Playas y sol</span> debe
              ser esta.
            </p>
          </div>
        </div>
        <div className="card shadow ">
          <div className="card-img-content card-img-3"></div>
          <div className="card-text ">
            <h4>Nieve y aventura</h4>
            <p>
              Contiene la informacion de{" "}
              <span className="bold">Nieve y aventura</span>.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
