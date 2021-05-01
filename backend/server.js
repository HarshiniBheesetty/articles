const express = require("express");
const app = express();
const cors = require("cors");
const mongoose = require("mongoose");

const dbUri =
  "mongodb+srv://articlesHB:articlesHB123@cluster0.na6kn.mongodb.net/articlesDB";

app.use(cors());
app.use(express.json());

//connect to mongoose
mongoose.connect(dbUri);

//require route
app.use("/", require("./routes/articleRoute"));

app.listen(3002, function () {
  console.log("express server is running on port 3002");
});
