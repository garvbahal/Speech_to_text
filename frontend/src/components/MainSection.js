import React, { useEffect, useState } from "react";
import axios from "axios";
import Spinner from "./Spinner";
import Record from "./Record";
import TranscriptionCard from "./TranscriptionCard";

const MainSection = () => {
  const [transcription, setTranscription] = useState("");
  const [file, setFile] = useState(null);
  const [spinner, setSpinner] = useState(false);

  function handleFileChange(event) {
    setFile(event.target.files[0]);
  }

  async function handleUpload() {
    setSpinner(true);
    if (!file) {
      return alert("Please select an audio file");
    }

    const formData = new FormData();
    formData.append("audio", file);

    try {
      const response = await axios.post(
        "http://localhost:3001/api/v1/transcribe",
        formData,
        {
          headers: { "Content-Type": "multipart/form-data" },
        }
      );

      setTranscription(response.data.transcription);
    } catch (error) {
      console.log(error);
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
        <div className=" flex flex-row w-[90%] max-w-[1100px] justify-between mt-[74px] gap-[86px]">
          <div className="flex flex-col w-1/2">
            <button className=" bg-BlueSpeech drop-shadow-[1px_4px_12px_rgba(0,0,0,0.25)] text-white w-[267px] h-[78px] rounded-full text-xl mt-11 mb-7 mx-auto">
              <input
                id="uploadbtn"
                type="file"
                accept="audio/*"
                className="hidden"
                onChange={handleFileChange}
              />
              <label
                htmlFor="uploadbtn"
                className="cursor-pointer w-[100%] h-[100%]"
              >
                UPLOAD
              </label>
            </button>

            <div className="flex flex-row items-center space-x-2">
              <div className="bg-black w-full h-[1.5px]"></div>
              <div>OR</div>
              <div className="bg-black w-full h-[1.5px]"></div>
            </div>
            <Record setFile={setFile} />
          </div>

          <div>
            <TranscriptionCard transcription={transcription} />
          </div>
        </div>
      )}
    </div>
  );
};

export default MainSection;
