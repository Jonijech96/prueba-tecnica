import React from "react";
import logo from "../../assets/logo/logo_02.png";
import iconInstagram from "../../assets/iconos/instagram.png";
import iconFacebook from "../../assets/iconos/facebook.png";
import "./Footer.css";

export const Footer = () => {
  return (
    <footer className="footer ">
      <div className="container footer-content">
        <img src={logo} className="footer-logo" alt="" />
        <div className="footer-icons">
          <a href="#">
          <img src={iconInstagram} alt="icono instagram" />
          </a>
          <a href="#">
          <img src={iconFacebook} alt="icono facebook" />
          </a>
        </div>
      </div>
    </footer>
  );
};
