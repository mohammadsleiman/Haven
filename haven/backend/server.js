const express = require("express");
// the server framerwork ontop of node.js
const cors = require("cors");
// helps express connect to mongoose better
const mongoose = require("mongoose");
// database side
require("dotenv").config();

const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

const uri = process.env.ATLAS_URI;
mongoose.connect(uri, {
  useNewUrlParser: true,
  useCreateIndex: true,
  useUnifiedTopology: true,
});
const connection = mongoose.connection;
connection.once("open", () => {
  console.log("MongoDB database connection established successfully");
});

const destinationRouter = require("./routes/destination");
app.use("/destination", destinationRouter);

app.listen(port, () => {
  console.log(`Server is running on port: ${port}`);
});

//USE THIS TO DROP DB AND SEED AGAIN:
//INCLUDE CHANGES TO seed.js,models.js,destination.js
//const Seed = require("./seed/seed");
//Seed();
