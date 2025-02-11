const express = require("express");
const app = express();

app.use(express.json());
const route = require("./routes/route");
require("dotenv").config();
const dbConnect = require("./config/dbConnect");
const PORT = process.env.PORT || 4000;
const cors = require("cors");
app.use(cors());

app.use("/api/v1/", route);

dbConnect();

app.listen(PORT, () => {
  console.log(`App started at ${PORT} port number`);
});
