const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const dotenv = require("dotenv").config();

const app = express();
app.use(express.json());
app.use(cors());

const UserRoute = require("./routes/UserRoute.js");
const PORT = process.env.PORT || 8003;
const DB = process.env.DATABASE;

mongoose
  .connect(DB)
  .then(() => console.log("DB connected"))
  .catch((err) => console.log(err));
app.use("/", UserRoute);
app.listen(PORT, () => console.log("server connected"));
