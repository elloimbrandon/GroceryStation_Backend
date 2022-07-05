const express = require("express");
const cors = require("cors");

const User = require("../models/userModel");

// config
const router = express.Router();

// seed data for testing
// const userSeed = require("../seed-data/userSeed.js");

// middle-ware
router.use(express.json());
router.use(cors());
router.use(express.urlencoded({ extended: false }));

// creating new user
router.post("/register", async (req, res) => {
  const user = new User(req.body);

  try {
    await user.save();
    res.status(201).send({ user });
  } catch (err) {
    res.status(400).send(err);
  }
});

// login
router.post("/login", async (req, res) => {
  try {
    const user = await User.findByCredentials(
      req.body.email,
      req.body.password
    );
    const token = await user.generateAuthToken();
    // Need to send token back to store in local storage
    res.send({ user, token });
    console.log("Logged in Successfully!");
  } catch (err) {
    res.status(400).send(err);
    console.log("Wrong username or password... try again");
  }
});

// *** routes to see and delete sub db users ***

// Remove this at production!

// Drop users sub db,
router.delete("/delete_users", (req, res) => {
  User.collection.drop((err, data) => {
    if (err) {
      res.json("Could not delete user sub db");
    }
    res.json("Deleted user sub db!");
  });
});

// seed data

// user seed data
// User.create(userSeed, (err, data) => {
//   if (err) console.log(err.message);
//   console.log("Added provided user data....");
// });

// export to server
module.exports = router;
