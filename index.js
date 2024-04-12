// index.js

const express = require("express");
const mongoose = require("mongoose");
const User = require("./routes/UserRoutes");
require("dotenv").config();

const app = express();
app.use(express.json());
const port = 3000;


const CONECTION_STRING = process.env.REACT_APP_CONECTION_STRING;

mongoose
  .connect(CONECTION_STRING)
  .then((success) => {
    console.log(`Connected to MongoDB ${success}`);
  })
  .catch((error) => {
    console.error("MongoDB connection error:", error.message);
  });



app.use(User)

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
