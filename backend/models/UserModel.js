const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  UserName: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  transcriptions: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Text",
    },
  ],
});

module.exports = mongoose.model("User", userSchema);
