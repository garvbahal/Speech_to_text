import axios from "axios";
import React, { useEffect, useState } from "react";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

const SignUpPage = ({ token }) => {
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

  async function handleSignUp() {
    if (!formData.username || !formData.password) {
      toast.error("Fill the credentials first!");
      return;
    }
    try {
      await axios.post("http://localhost:3001/api/v1/signup", {
        username: formData.username,
        password: formData.password,
      });
      toast.success("Sign Up successful! Please log in");
      navigate("/login");
    } catch (error) {
      toast.error("Sign Up Failed");
    }
  }

  useEffect(() => {
    if (token) {
      navigate("/");
    }
  }, [token]);

  return (
    <div className="flex w-[90%] max-w-[1100px] mx-auto justify-center items-center">
      <div className="w-[439px] h-[565px] overflow-hidden rounded-[60px] flex flex-col drop-shadow-[1px_4px_12px_rgba(0,0,0,0.25)] mt-[74px]">
        <div className="w-full h-[17.35%] bg-BlueSpeech text-white flex justify-center items-center font-poppins font-bold text-4xl">
          SIGNUP
        </div>

        <div className="w-full h-[82.65%] flex flex-col  bg-white">
          <div className="w-[80%] mx-auto mt-[75px] mb-[18px] text-xl">
            <input
              type="text"
              name="username"
              value={formData.username}
              onChange={handleInputChange}
              placeholder="USERNAME"
              className=" appearance-none border-2 border-BlueSpeech p-[1.75rem] rounded-[30px] w-full outline-none placeholder:text-xl "
            />
          </div>
          <div className="w-[80%] mx-auto mb-[21px] text-xl">
            <input
              type="password"
              name="password"
              value={formData.password}
              onChange={handleInputChange}
              placeholder="PASSWORD"
              className=" appearance-none border-2 border-BlueSpeech p-[1.75rem] rounded-[30px] w-full outline-none placeholder:text-xl "
            />
          </div>
          <button
            className=" bg-BlueSpeech drop-shadow-[1px_4px_12px_rgba(0,0,0,0.25)] text-white w-[267px] h-[78px] rounded-full text-xl mx-auto"
            onClick={handleSignUp}
          >
            SIGNUP
          </button>
        </div>
      </div>
    </div>
  );
};

export default SignUpPage;
