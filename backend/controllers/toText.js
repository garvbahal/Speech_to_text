const Text = require("../models/toTextModel");
const { PythonShell } = require("python-shell");
// const path = require("path");

exports.toText = async (req, res) => {
  try {
    console.log("audio path->", req.file);
    const audioPath = req.file.path1;
    let options = {
      mode: "text",
      pythonOptions: ["-u"],
      scriptPath: "./",
      args: [audioPath],
    };

    PythonShell.run("transcribe.py", options, async (err, result) => {
      if (err) {
        return res.status(500).json({
          error: err.message,
          success: false,
          message: "Error in transcribing the audio",
        });
      }

      const transcriptionText = result.join(" ");

      const response = await Text.create({ text: transcriptionText });
      res.status(200).json({
        success: true,
        message: response.text,
      });
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};
