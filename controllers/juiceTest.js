const express = require("express");
const cors = require("cors");

const Juice = require("../models/juiceModel.js");

// seed data for testing
// const sandwichSeed = require("../models/sandwichSeed.js");

// config
const router = express.Router();

// middle-ware
router.use(express.json());
router.use(cors());
router.use(express.urlencoded({ extended: false }));

// post sandwich data
// router.post("/", async (req, res) => {
//   const juice = new Juice(req.body);
//   try {
//     await juice.save();
//     res.status(201).send({ juice });
//     console.log("juice created!");
//   } catch (err) {
//     res.status(400).send(err);
//     console.log("Could not Create juice");
//   }
// });

router.post("/", (req, res) => {
  Juice.create(req.body, (err, createdJuice) => {
    res.json(createdJuice);
  });
});

// get sandwich data
router.get("/", (req, res) => {
  Juice.find({}, (err, foundJuice) => {
    if (err) {
      res.status(400).send(err);
      console.log("Error getting juices");
    } else {
      res.status(200).json(foundSandwich);
      console.log("Got all juices!");
    }
  });
});

module.exports = router;
