import React, { useEffect, useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import axios from "axios";
import toast from "react-hot-toast";
import { motion } from "framer-motion";

const LoginPage = ({ token, setToken }) => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    username: "",
    password: "",
  });

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
    if (!formData.username || !formData.password) {
      toast.error("Fill the credentials first");
      return;
    }
    try {
      const response = await axios.post("http://localhost:3001/api/v1/login", {
        username: formData.username,
        password: formData.password,
      });

      localStorage.setItem("token", response.data.token);
      setToken(response.data.token);
      toast.success("User Logged In successfully");
      navigate("/");
    } catch (error) {
      toast.error("Login failed! Please check your credentials");
    }
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
        <div className="w-[439px] h-[565px] overflow-hidden rounded-[60px] flex flex-col drop-shadow-[1px_4px_12px_rgba(0,0,0,0.25)] mt-[74px]">
          <div className="w-full h-[17.35%] bg-BlueSpeech text-white flex justify-center items-center font-poppins font-bold text-4xl">
            LOGIN
          </div>

          <div className="w-full h-[82.65%] flex flex-col  bg-white">
            <div className="w-[80%] mx-auto mt-[75px] mb-[18px] text-xl">
              <input
                type="text"
                value={formData.username}
                name="username"
                placeholder="USERNAME"
                onChange={handleInputChange}
                className=" appearance-none border-2 border-BlueSpeech p-[1.75rem] rounded-[30px] w-full outline-none placeholder:text-xl "
              />
            </div>
            <div className="w-[80%] mx-auto mb-[21px] text-xl">
              <input
                type="password"
                value={formData.password}
                name="password"
                placeholder="PASSWORD"
                onChange={handleInputChange}
                className=" appearance-none border-2 border-BlueSpeech p-[1.75rem] rounded-[30px] w-full outline-none placeholder:text-xl "
              />
            </div>
            <button
              className=" bg-BlueSpeech drop-shadow-[1px_4px_12px_rgba(0,0,0,0.25)] text-white w-[267px] h-[78px] rounded-full text-xl mx-auto"
              onClick={handleLogin}
            >
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
    </motion.div>
  );
};

export default LoginPage;
