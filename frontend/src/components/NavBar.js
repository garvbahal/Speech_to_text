import React, { useState } from "react";
import toast from "react-hot-toast";
import { NavLink, useLocation, useNavigate } from "react-router-dom";
import { Menu, X } from "lucide-react";

const NavBar = ({ token, setToken }) => {
  const location = useLocation();
  const navigate = useNavigate();
  const [isOpen, setIsOpen] = useState(false);

  function handleLogOut() {
    localStorage.setItem("token", "");
    setToken(localStorage.getItem("token"));
    toast.success("User Logged Out Successfully");
    navigate("/");
  }

  return (
    <div className="bg-BlueSpeech ">
      <div className="w-[90%] relative max-w-[1100px] mx-auto flex items-center justify-between py-[20px]">
        <div className=" font-poppins text-2xl text-white tracking-[0.12rem] font-bold cursor-pointer">
          <NavLink to="/">Speech To Text Converter</NavLink>
        </div>

        {/* Mobile menu */}
        <button
          className="text-white md:hidden"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>

        <div className="hidden md:flex space-x-7">
          <NavLink
            to="/"
            className={`${
              location.pathname === "/" ? `font-semibold ` : `font-normal`
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
                className="font-poppins  text-white text-lg font-medium"
                onClick={handleLogOut}
              >
                LOG OUT
              </button>
            </div>
          ) : (
            <div className="flex gap-x-7">
              <NavLink
                to="/login"
                className={`${
                  location.pathname === "/login"
                    ? `font-semibold `
                    : `font-normal`
                }  font-poppins text-lg text-white transition-all duration-200`}
              >
                LOGIN
              </NavLink>
              <NavLink
                to="/signup"
                className={`${
                  location.pathname === "/signup"
                    ? `font-semibold `
                    : `font-normal `
                }  font-poppins text-lg  text-white transition-all duration-200`}
              >
                SIGNUP
              </NavLink>
            </div>
          )}
        </div>

        {/* drop down menu */}
        <div
          className={`${
            isOpen ? "flex flex-col items-center" : "hidden"
          } md:hidden bg-BlueSpeech absolute -right-[10px] top-[70px] rounded-[15px] w-1/4 py-4`}
        >
          <NavLink
            to="/"
            className={`${
              location.pathname === "/"
                ? `font-semibold underline`
                : `font-normal`
            } font-poppins text-lg text-white `}
            onClick={() => setIsOpen(false)}
          >
            HOME
          </NavLink>
          {token ? (
            <div className="flex flex-col items-center">
              <NavLink
                to="/history"
                className={`${
                  location.pathname === "/history"
                    ? `font-semibold underline`
                    : `font-normal`
                } font-poppins text-lg text-white`}
                onClick={() => setIsOpen(false)}
              >
                HISTORY
              </NavLink>
              <button
                className="font-poppins text-white text-lg font-medium"
                onClick={() => {
                  handleLogOut();
                  setIsOpen(false);
                }}
              >
                LOG OUT
              </button>
            </div>
          ) : (
            <div className="flex flex-col items-center">
              <NavLink
                to="/login"
                className={`${
                  location.pathname === "/login"
                    ? `font-semibold underline`
                    : `font-normal`
                } font-poppins text-lg text-white`}
                onClick={() => setIsOpen(false)}
              >
                LOGIN
              </NavLink>
              <NavLink
                to="/signup"
                className={`${
                  location.pathname === "/signup"
                    ? `font-semibold underline`
                    : `font-normal`
                } font-poppins text-lg text-white`}
                onClick={() => setIsOpen(false)}
              >
                SIGNUP
              </NavLink>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default NavBar;
