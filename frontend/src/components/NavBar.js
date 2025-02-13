import React from "react";
import { NavLink } from "react-router-dom";

const NavBar = () => {
  return (
    <div className=" bg-BlueSpeech">
      <div className="w-[90%] max-w-[1100px] mx-auto flex justify-between py-[20px]">
        <div className=" font-poppins text-2xl text-white tracking-[0.12rem] font-bold">
          Speech To Text Converter
        </div>
        <div className="flex space-x-[30px]">
          <NavLink
            to="/"
            className="font-semibold font-poppins text-lg  text-white"
          >
            HOME
          </NavLink>
          <NavLink
            to="/history"
            className="font-poppins text-white text-lg font-medium"
          >
            HISTORY
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
