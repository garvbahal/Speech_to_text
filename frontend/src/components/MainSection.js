import React, { useEffect, useState } from "react";
import axios from "axios";
import Spinner from "./Spinner";
import Record from "./Record";
import TranscriptionCard from "./TranscriptionCard";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

const MainSection = ({ token }) => {
  const [transcription, setTranscription] = useState("");
  const [file, setFile] = useState(null);
  const [spinner, setSpinner] = useState(false);
  const navigate = useNavigate();

  function handleFileChange(event) {
    setFile(event.target.files[0]);
  }

  async function handleUpload() {
    if (!token) {
      toast.error("Log in First!");
      navigate("/login");
      return;
    }
    setSpinner(true);
    if (!file) {
      return alert("Please select an audio file");
    }

    const formData = new FormData();
    formData.append("audio", file);

    try {
      console.log("inside try block");
      const response = await axios.post(
        "https://speech-to-text-backend-k978.onrender.com/api/v1/transcribe",
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
            Authorization: token,
          },
        }
      );
      console.log("completing the try block");

      setTranscription(response.data.transcription);
    } catch (error) {
      console.log(error.message);
    }
    setSpinner(false);
  }

  useEffect(() => {
    if (file) {
      handleUpload();
    }
  }, [file]);

  return (
    <div>
      {spinner ? (
        <Spinner />
      ) : (
        <div className=" flex flex-row justify-center flex-wrap lg:flex-nowrap w-[90%] max-w-[1100px] lg:justify-between mt-[74px] gap-[86px] mx-auto">
          <div className="flex flex-col  w-full max-w-[450px] mx-auto">
            <button className=" bg-BlueSpeech drop-shadow-[1px_4px_12px_rgba(0,0,0,0.25)] text-white w-2/3 max-w-[267px] h-[60px] sm:h-[78px] rounded-full text-xl mt-11 mb-7 mx-auto">
              <input
                id="uploadbtn"
                type="file"
                accept="audio/*"
                className="hidden"
                onChange={handleFileChange}
              />
              <label
                htmlFor="uploadbtn"
                className="cursor-pointer flex items-center justify-center w-[100%] h-[100%]"
              >
                UPLOAD
              </label>
            </button>

            <div className="flex flex-row items-center space-x-2 w-full">
              <div className="bg-black w-full h-[1.5px]"></div>
              <div>OR</div>
              <div className="bg-black w-full h-[1.5px]"></div>
            </div>
            <Record setFile={setFile} />
          </div>

          <div className="w-full max-w-[600px]">
            <TranscriptionCard transcription={transcription} />
          </div>
        </div>
      )}
    </div>
  );
};

export default MainSection;
