const Text = require("../models/toTextModel");
const path = require("path");
const fs = require("fs");
require("dotenv").config();
const { SpeechClient } = require("@google-cloud/speech");

const speechClient = new SpeechClient({
  keyFilename: process.env.GOOGLE_CREDENTIALS_PATH,
});
const turnToText = async (request) => {
  return (response = speechClient.recognize(request));
};

exports.toText = async (req, res) => {
  try {
    const filePath = path.resolve(req.file.path);
    console.log(filePath);

    console.log("Credentials path->", process.env.GOOGLE_CREDENTIALS_PATH);
    const file = fs.readFileSync(filePath);
    const audioBytes = file.toString("base64");
    const audio = {
      content: audioBytes,
    };

    const config = {
      encoding: "MP3",
      sampleRateHertz: 16000,
      languageCode: "en-IN",
    };

    const request = {
      audio: audio,
      config: config,
    };

    console.log("Sending request to Google Speech API");
    const [response] = await turnToText(request);
    console.log("Received response from Google Speech API");

    if (!response.results || response.results.length === 0) {
      return res
        .status(200)
        .json({ transcription: "No transcription available." });
    }

    const transcription = response.results
      .map((result) => result.alternatives[0].transcript)
      .join("\n");

    console.log("Transcription:", transcription);
    return res.json({ transcription });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};
