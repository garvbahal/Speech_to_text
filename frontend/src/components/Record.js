import React from "react";
import { ReactMediaRecorder } from "react-media-recorder";

const Record = ({ setFile }) => {
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
          <div>
            <button onClick={startRecording}>Start Recording</button>
            <button
              onClick={() => {
                stopRecording();
              }}
            >
              Stop Recording
            </button>
            {mediaBlobUrl && (
              <div>
                <button onClick={() => handleFileChange(mediaBlobUrl)}>
                  Convert To text
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
