import React from "react";
import "./Brands.css";
import { NavLink } from "react-router-dom";

const Brands = () => {
  let clickCount = 0;

  const changeVisibility = () => {
    const linkContainer = document.querySelector(".link_container");
    clickCount++;
    if (clickCount % 2 === 0) {
      linkContainer.style.display = "block";
    } else {
      linkContainer.style.display = "none";
    }
  };
  return (
    <>
      <div className="brands_nav_bar_small">
        <div onClick={changeVisibility} className="brands">
          Brands
        </div>

        <div className="link_container">
          <NavLink className="brands_link_small" to="/Trek">
            Trek
          </NavLink>
          <NavLink className="brands_link_small" to="/Specialized">
            Specialized
          </NavLink>
          <NavLink className="brands_link_small" to="/Giant">
            Giant
          </NavLink>
          <NavLink className="brands_link_small" to="/Canyon">
            Canyon
          </NavLink>
          <NavLink className="brands_link_small" to="/Dartmoor">
            Dartmoor
          </NavLink>
          <NavLink className="brands_link_small" to="/YT">
            YT
          </NavLink>
          <NavLink className="brands_link_small" to="/Bergamount">
            Bergamount
          </NavLink>
        </div>
      </div>
      <div className="brands_nav_bar">
        <NavLink className="brands_link" to="/Trek">
          Trek
        </NavLink>
        <NavLink className="brands_link" to="/Specialized">
          Specialized
        </NavLink>
        <NavLink className="brands_link" to="/Giant">
          Giant
        </NavLink>
        <NavLink className="brands_link" to="/Canyon">
          Canyon
        </NavLink>
        <NavLink className="brands_link" to="/Dartmoor">
          Dartmoor
        </NavLink>
        <NavLink className="brands_link" to="/YT">
          YT
        </NavLink>
        <NavLink className="brands_link" to="/Bergamount">
          Bergamount
        </NavLink>
      </div>
    </>
  );
};

export default Brands;
