const express = require("express");
const router = express.Router();
const multer = require("multer");
const path = require("path");

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "uploads/");
  },
  filename: function (req, file, cb) {
    cb(null, Date.now() + path.extname(file.originalname));
  },
});
const upload = multer({ storage: storage });

// const upload = multer({ dest: "uploads/" });

const { toText } = require("../controllers/toText");
const { authN } = require("../middlewares/AuthN");
const { signup, login } = require("../controllers/Auth");
const { history } = require("../controllers/History");

router.post("/transcribe", authN, upload.single("audio"), toText);
router.post("/login", login);
router.post("/signup", signup);
router.get("/history", authN, history);

module.exports = router;
