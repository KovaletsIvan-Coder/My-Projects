import React from "react";
import "./Header.css";
import NavigationPanel from "../NavigationPanel/NavigationPanel";
import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <header className="header">
      <NavLink to="/mainPage" className="logo">
        Bike Shop
      </NavLink>
      <NavigationPanel></NavigationPanel>
    </header>
  );
};

export default Header;
