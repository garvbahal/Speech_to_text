import React, { useState } from "react";
import { ReactMediaRecorder } from "react-media-recorder";
import { FaRegStopCircle } from "react-icons/fa";

const Record = ({ setFile }) => {
  const [isRecording, setIsRecording] = useState(false);
  async function handleFileChange(blobUrl) {
    const response = await fetch(blobUrl);
    const blob = await response.blob();
    const file = new File([blob], "audio.wav", { type: "audio/wav" });
    setFile(file);
  }

  return (
    <div>
      <ReactMediaRecorder
        audio
        render={({ startRecording, stopRecording, mediaBlobUrl }) => (
          <div className="flex flex-col w-full mt-7 ">
            <div className="flex justify-between w-full space-x-14 mb-7">
              {isRecording ? (
                <button
                  onClick={() => {
                    stopRecording();
                    setIsRecording(!isRecording);
                  }}
                  className=" bg-blue-900 drop-shadow-[1px_4px_12px_rgba(0,0,0,0.25)] text-white mx-auto w-full flex items-center justify-center max-w-[267px] h-[60px] sm:h-[78px] rounded-full text-xl transition-all duration-400"
                >
                  <FaRegStopCircle size={28} />
                  <p>STOP</p>
                </button>
              ) : (
                <button
                  onClick={() => {
                    startRecording();
                    setIsRecording(!isRecording);
                  }}
                  className=" bg-BlueSpeech drop-shadow-[1px_4px_12px_rgba(0,0,0,0.25)] text-white mx-auto w-2/3 max-w-[267px] h-[60px] sm:h-[78px] rounded-full text-xl transition-all duration-400"
                >
                  START RECORDING
                </button>
              )}
            </div>
            {mediaBlobUrl && (
              <div className="flex justify-center">
                <button
                  onClick={() => handleFileChange(mediaBlobUrl)}
                  className=" bg-BlueSpeech drop-shadow-[1px_4px_12px_rgba(0,0,0,0.25)] text-white w-2/3 max-w-[267px] h-[60px] sm:h-[78px] rounded-full text-xl"
                >
                  CONVERT TO TEXT
                </button>
              </div>
            )}
          </div>
        )}
      />
    </div>
  );
};

export default Record;
