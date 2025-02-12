import React from "react";
import { useReactMediaRecorder } from "react-media-recorder";

const Record = () => {
  const { status, startRecording, stopRecording } = useReactMediaRecorder({
    audio: true,
  });

  return (
    <div>
      
    </div>
  );
};

export default Record;
