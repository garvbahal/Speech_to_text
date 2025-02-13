import React from "react";
import MainSection from "../components/MainSection";

const HomePage = () => {
  return (
    <div className="w-[90%] max-w-[1100px] mx-auto flex flex-col">
      <h2 className=" mt-[62px] font-poppins text-[2.0225rem] font-normal text-BlueSpeech text-center">
        Effortlessly convert your voice into text with our speech-to-text
        converter
      </h2>
      <p className=" mt-[6px] text-GreySpeech font-poppins font-normal text-xl text-center  ">
        powered by cutting-edge AI technology
      </p>

      <MainSection />
    </div>
  );
};

export default HomePage;
