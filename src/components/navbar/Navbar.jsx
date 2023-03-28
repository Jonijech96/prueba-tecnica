import React, { useState } from "react";
import "./Navbar.css";
import logo from "../../assets/logo/logo_01.svg";
import { BurgerButton } from "./BurgerButton";

export const Navbar = () => {
  const [handleMenu, setHandleMenu] = useState(false);
  const handleClick = () => {
    setHandleMenu(!handleMenu);
  };
  return (
    <header className="header navbar shadow">
      <div className=" container nav flex">
        <div className="logo">
          <img src={logo} alt="logo viajes" className=" header-logo" />
        </div>
        <nav className={`menu ${handleMenu ? "active" : ""}`}>
          <ul className="nav-items">
            <li className="active">
              <a href="#" onClick={handleClick}>
                HOME
              </a>{" "}
            </li>
            <li>
              <a href="#tendencies" onClick={handleClick}>
                TENDENCIAS
              </a>{" "}
            </li>
            <li>
              <a href="#blog" onClick={handleClick}>
                BLOG
              </a>{" "}
            </li>
          </ul>
        </nav>
        <div className="button">
          <BurgerButton clicked={handleMenu} handleClick={handleClick} />
        </div>
      </div>
    </header>
  );
};
