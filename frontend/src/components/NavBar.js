import React from "react";
import { NavLink } from "react-router-dom";

const NavBar = () => {
  return (
    <div>
      <div>Speech To Text Converter</div>
      <div>
        <NavLink to="/">Home</NavLink>
        <NavLink to="/history">History</NavLink>
      </div>
    </div>
  );
};

export default NavBar;
