import React from "react";
import "./NavigationPanel.css";
import { NavLink } from "react-router-dom";
const NavPanel = () => {
  return (
    <div className="navigation_container">
      <NavLink className="navigation_link" to="/shops">
        Shops
      </NavLink>
      <NavLink className="navigation_link" to="/contacts">
        Contacts
      </NavLink>
      <NavLink className="navigation_link" to="/about">
        About us
      </NavLink>
    </div>
  );
};

export default NavPanel;
