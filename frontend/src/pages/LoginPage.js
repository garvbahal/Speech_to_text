import React from "react";
import { NavLink } from "react-router-dom";

const LoginPage = () => {
  return (
    <div className="flex w-[90%] max-w-[1100px] mx-auto justify-center items-center">
      <div className="w-[439px] h-[565px] overflow-hidden rounded-[60px] flex flex-col drop-shadow-[1px_4px_12px_rgba(0,0,0,0.25)] mt-[74px]">
        <div className="w-full h-[17.35%] bg-BlueSpeech text-white flex justify-center items-center font-poppins font-bold text-4xl">
          LOGIN
        </div>

        <div className="w-full h-[82.65%] flex flex-col  bg-white">
          <div className="w-[80%] mx-auto mt-[75px] mb-[18px] text-xl">
            <input
              type="text"
              placeholder="USERNAME"
              className=" appearance-none border-2 border-BlueSpeech p-[1.75rem] rounded-[30px] w-full outline-none placeholder:text-xl "
            />
          </div>
          <div className="w-[80%] mx-auto mb-[21px] text-xl">
            <input
              type="password"
              placeholder="PASSWORD"
              className=" appearance-none border-2 border-BlueSpeech p-[1.75rem] rounded-[30px] w-full outline-none placeholder:text-xl "
            />
          </div>
          <button className=" bg-BlueSpeech drop-shadow-[1px_4px_12px_rgba(0,0,0,0.25)] text-white w-[267px] h-[78px] rounded-full text-xl mx-auto">
            LOGIN
          </button>
          <div className="mt-[47px] mx-auto text-lg">
            If you don't have account{" "}
            <span className="text-BlueSpeech underline">
              <NavLink to="/signup">Create Account</NavLink>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
