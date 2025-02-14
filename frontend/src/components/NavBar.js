import React from "react";
import toast from "react-hot-toast";
import { NavLink, useLocation, useNavigate } from "react-router-dom";

const NavBar = ({ token, setToken }) => {
  const location = useLocation();
  const navigate = useNavigate();

  function handleLogOut() {
    localStorage.setItem("token", "");
    setToken(localStorage.getItem("token"));
    toast.success("User Logged Out Successfully");
    navigate("/");
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
            className={`${
              location.pathname === "/" ? `font-semibold` : `font-normal`
            }  font-poppins text-lg  text-white transition-all duration-200`}
          >
            HOME
          </NavLink>
          {token ? (
            <div className="flex gap-x-7 justify-center items-baseline">
              <NavLink
                to="/history"
                className={`${
                  location.pathname === "/history"
                    ? `font-semibold`
                    : `font-normal`
                }  font-poppins text-lg  text-white transition-all duration-200`}
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
              className={`${
                location.pathname === "/login" ? `font-semibold` : `font-normal`
              }  font-poppins text-lg  text-white transition-all duration-200`}
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
