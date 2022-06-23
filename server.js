// *** packages ***
// - nodemon / nodemon
// - express / express
// - mongoose / mongoose
// - cors / cors
// - jwt / jsonwebtoken
// - dotenv / dotenv
// - bcrypt / bcryptjs
// - validator / validator

// *** Things To Remember ***
// keep secret in mind when creating tokens

const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const env = require("dotenv").config({ path: ".env" });
// const groceryStationController = require("./controllers/groceryStation"); have be updates route for home page?
const userController = require("./controllers/user"); // user page, marty and alvin only.
const sandwichController = require("./controllers/sandwiches");

const app = express();

// might not need this here as well
app.use(express.json());
app.use(cors());

//Database
const PORT = process.env.PORT || 3000;
const db = mongoose.connection;

// connect to the database either via heroku/atlas
// const MONGODB_URI = process.env.MONGODB_URI;

// local
const mongoURI = "mongodb://0.0.0.0:27017/grocerystation";

// Connect to Mongo atlas
// mongoose.connect(MONGODB_URI, () => {
//   console.log("connected to mongo");
// });

// connect local
mongoose.connect(mongoURI, () => {
  console.log("connected to mongo");
});

// Error / success / mongo atlas
// db.on("error", (err) => console.log(err.message + " is Mongod not running?"));
// db.on("connected", () => console.log("mongo connected: ", MONGODB_URI));
// db.on("disconnected", () => console.log("mongo disconnected"));

// Error / success / mongo local
db.on("error", (err) => console.log(err.message + " is Mongod not running?"));
db.on("connected", () => console.log("mongo connected: ", mongoURI));
db.on("disconnected", () => console.log("mongo disconnected"));

// makes a /sandwiches route
app.use("/sandwiches", sandwichController);

// makes a /users route
app.use("/users", userController);

app.listen(PORT, () => console.log("Listening on port:", PORT));
