import React, { useEffect, useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import axios from "axios";
import toast from "react-hot-toast";
import { motion } from "framer-motion";
import Loader from "../components/Loader";
import { IoEye, IoEyeOff } from "react-icons/io5";

const LoginPage = ({ token, setToken }) => {
  const navigate = useNavigate();
  const [isLoading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    username: "",
    password: "",
  });
  const [passwordVisible, setPasswordVisible] = useState(false);

  function handleInputChange(event) {
    const { name, value } = event.target;
    setFormData((prevFormData) => {
      return {
        ...prevFormData,
        [name]: value,
      };
    });
  }

  async function handleLogin() {
    setLoading(true);
    if (!formData.username || !formData.password) {
      toast.error("Fill the credentials first");
      return;
    }
    try {
      const response = await axios.post(
        "https://speech-to-text-backend-k978.onrender.com/api/v1/login",
        {
          username: formData.username,
          password: formData.password,
        }
      );

      localStorage.setItem("token", response.data.token);
      setToken(response.data.token);
      toast.success("User Logged In successfully");
      navigate("/");
    } catch (error) {
      toast.error("Login failed! Please check your credentials");
    }
    setLoading(false);
  }

  useEffect(() => {
    if (token) {
      navigate("/");
    }
  }, [token]);

  return (
    <motion.div
      initial={{ opacity: 0, x: -10 }}
      animate={{ opacity: 1, x: 0, transition: { duration: 0.8 } }}
    >
      <div className="flex w-[90%] max-w-[1100px] mx-auto justify-center items-center">
        <div className="w-[90%] max-w-[439px] h-[450px] md:h-[565px] overflow-hidden rounded-[60px] flex flex-col drop-shadow-[1px_4px_12px_rgba(0,0,0,0.25)] mt-[74px]">
          <div className="w-full h-[17.35%] bg-BlueSpeech text-white flex justify-center items-center font-poppins font-bold text-3xl md:text-4xl">
            LOGIN
          </div>

          <div className="w-full h-[82.65%] flex flex-col  bg-white">
            <div className="w-[80%] mx-auto mt-[40px] md:mt-[75px] mb-[18px] text-xl">
              <input
                type="text"
                value={formData.username}
                name="username"
                placeholder="USERNAME"
                onChange={handleInputChange}
                className=" appearance-none border-2 border-BlueSpeech p-[1rem] md:p-[1.75rem] rounded-[20px] md:rounded-[30px] w-full outline-none placeholder:text-base  md:placeholder:text-xl "
              />
            </div>
            <div className="w-[80%] mx-auto mb-[21px] border-2 rounded-[20px] md:rounded-[30px] border-BlueSpeech text-xl relative">
              <input
                type={`${passwordVisible ? "text" : "password"}`}
                value={formData.password}
                name="password"
                placeholder="PASSWORD"
                onChange={handleInputChange}
                className=" appearance-none  p-[1rem] md:p-[1.75rem] rounded-[20px] md:rounded-[30px] w-[85%]  outline-none placeholder:text-base md:placeholder:text-xl "
              />
              <button
                onClick={() => {
                  setPasswordVisible(!passwordVisible);
                }}
                className="absolute top-[16px] right-[5px] md:right-[20px] md:top-[29px] "
              >
                {passwordVisible ? (
                  <IoEyeOff size={28} color="#484554" />
                ) : (
                  <IoEye size={28} color="#484554" />
                )}
              </button>
            </div>
            <button
              className=" bg-BlueSpeech drop-shadow-[1px_4px_12px_rgba(0,0,0,0.25)] text-white w-[80%] max-w-[267px] h-[50px] md:h-[78px] rounded-full text-xl mx-auto"
              onClick={handleLogin}
            >
              {isLoading ? <Loader /> : <p>LOGIN</p>}
            </button>
            <div className=" mt-[28px] text-nowrap flex flex-col md:block items-center mx-auto text-base lg:text-lg">
              If you don't have account{" "}
              <span className="text-BlueSpeech underline">
                <NavLink to="/signup">Create Account</NavLink>
              </span>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default LoginPage;
