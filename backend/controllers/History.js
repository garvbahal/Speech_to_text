const Text = require("../models/toTextModel");

exports.history = async (req, res) => {
  try {
    const { id } = req.user;
    const response = await Text.find({ user: id });

    return res.status(200).json({
      success: true,
      transcriptions: response.map((one) => one.text),
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      error: error.message,
      message: "Something went wrong while fetching history",
    });
  }
};
