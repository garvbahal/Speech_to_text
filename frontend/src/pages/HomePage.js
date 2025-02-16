import React, { useEffect } from "react";
import MainSection from "../components/MainSection";
import { motion } from "framer-motion";
import Vector_1 from "../utils/Vector_1.svg";

const HomePage = ({ token }) => {
  return (
    <motion.div
      initial={{ opacity: 0, x: -10 }}
      animate={{ opacity: 1, x: 0, transition: { duration: 0.8 } }}
    >
      <div className="w-[90%] max-w-[1100px] mx-auto flex flex-col relative">
        <h2 className=" mt-[62px] font-poppins text-[2.0225rem] font-normal text-BlueSpeech text-center leading-8">
          Effortlessly convert your voice into text with our speech-to-text
          converter
        </h2>
        <p className=" mt-[6px] text-GreySpeech font-poppins font-normal text-xl text-center  ">
          powered by cutting-edge AI technology
        </p>

        <MainSection token={token} />
        <div className="absolute -right-[220px] -top-[50px] -z-10">
          <img src={Vector_1} />
        </div>
      </div>
    </motion.div>
  );
};

export default HomePage;
