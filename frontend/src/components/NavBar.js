import React from "react";
import toast from "react-hot-toast";
import { NavLink } from "react-router-dom";

const NavBar = ({ token, setToken }) => {
  function handleLogOut() {
    localStorage.setItem("token", "");
    setToken(localStorage.getItem("token"));
    toast.success("User Logged Out Successfully");
  }

  return (
    <div className="bg-BlueSpeech">
      <div className="w-[90%] max-w-[1100px] mx-auto flex justify-between py-[20px]">
        <div className=" font-poppins text-2xl text-white tracking-[0.12rem] font-bold cursor-pointer">
          <NavLink to="/">Speech To Text Converter</NavLink>
        </div>
        <div className="flex space-x-[30px]">
          <NavLink
            to="/"
            className="font-semibold font-poppins text-lg  text-white"
          >
            HOME
          </NavLink>
          {token ? (
            <div className="flex gap-x-7 justify-center items-baseline">
              <NavLink
                to="/history"
                className="font-poppins text-white text-lg font-medium"
              >
                HISTORY
              </NavLink>
              <button
                className="font-poppins text-white text-lg font-medium"
                onClick={handleLogOut}
              >
                LOG OUT
              </button>
            </div>
          ) : (
            <NavLink
              to="/login"
              className="font-poppins text-white text-lg font-medium"
            >
              LOGIN
            </NavLink>
          )}
        </div>
      </div>
    </div>
  );
};

export default NavBar;
