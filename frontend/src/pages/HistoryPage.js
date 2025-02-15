import React, { useEffect, useState } from "react";
import axios from "axios";
import TranscriptionCard from "../components/TranscriptionCard";

const HistoryPage = ({ token }) => {
  const [history, setHistory] = useState([]);
  useEffect(() => {
    if (token) {
      fetchHistory();
    }
  }, [token]);

  async function fetchHistory() {
    try {
      const response = await axios.get("http://localhost:3001/api/v1/history", {
        headers: {
          Authorization: token,
        },
      });

      setHistory(response.data.transcriptions);
    } catch (error) {
      console.log(error.message);
    }
  }

  return (
    <div className=" w-[90%] max-w-[1100px] mx-auto">
      <h2 className="mt-[62px] font-poppins text-[2.0225rem] font-normal text-BlueSpeech text-center leading-8">
        Let’s take a look at what you've transcribed so far
      </h2>
      <div className="flex flex-wrap sm:justify-center items-center lg:justify-between gap-y-14 mt-8 mb-8">
        {history.length > 0 ? (
          history.map((one) => {
            return <TranscriptionCard transcription={one} />;
          })
        ) : (
          <div className="mt-[62px] mx-auto font-poppins text-[2.0225rem] font-normal text-BlueSpeech leading-8">
            No History Available
          </div>
        )}
      </div>
    </div>
  );
};

export default HistoryPage;
