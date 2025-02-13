import React from "react";

const TranscriptionCard = ({ transcription }) => {
  return (
    <div>
      <div>TRANSCRIPTION</div>
      <div>{transcription ? transcription : `No Transcription Available`}</div>
    </div>
  );
};

export default TranscriptionCard;
