const express = require("express");
const router = express.Router();
const multer = require("multer");
const upload = multer({ dest: "uploads/" });

const { toText } = require("../controllers/toText");

router.post("/transcribe", upload.single("audio"), toText);

module.exports = router;
