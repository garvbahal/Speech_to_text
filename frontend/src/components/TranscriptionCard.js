import React from "react";

const TranscriptionCard = ({ transcription }) => {
  return (
    <div className="w-[504px] h-[433px] flex flex-col rounded-[60px] drop-shadow-[1px_4px_12px_rgba(0,0,0,0.25)] overflow-hidden">
      <div className=" bg-BlueSpeech w-full h-[20.55%] text-white flex justify-center items-center font-poppins text-2xl">
        TRANSCRIPTION
      </div>
      <div className="bg-white text-GreySpeech p-6 w-full h-[79.37%] text-2xl ">
        {transcription ? transcription : `No Transcription Available`}
      </div>
    </div>
  );
};

export default TranscriptionCard;
