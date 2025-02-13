import React, { useEffect, useState } from "react";
import axios from "axios";
import Spinner from "./Spinner";
import Record from "./Record";

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
        <div>
          <div>
            <button>
              <input
                id="uploadbtn"
                type="file"
                accept="audio/*"
                className="hidden"
                onChange={handleFileChange}
              />
              <label htmlFor="uploadbtn" className="cursor-pointer">
                UPLOAD
              </label>
            </button>

            <div>
              <div></div>
              <div>OR</div>
              <div></div>
            </div>
            <Record setFile={setFile} />
          </div>

          <div>
            <div>TRANSCRIPTION</div>
            <div>
              {transcription ? transcription : `No Transcription Available`}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default MainSection;
