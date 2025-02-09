const express = require("express");
const app = express();

app.use(express.json());

require("dotenv").config();
const PORT = process.env.PORT || 4000;

app.listen(PORT, () => {
  console.log(`App started at ${PORT} port number`);
});
