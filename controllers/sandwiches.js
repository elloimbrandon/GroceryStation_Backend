const express = require("express");
const cors = require("cors");

// store model
const Menu = require("../models/foodModel.js");

// seed data for testing
// const sandwichSeed = require("../models/sandwichSeed.js");

// config
const router = express.Router();

// middle-ware
router.use(express.json());
router.use(cors());
router.use(express.urlencoded({ extended: false }));

// post sandwich data
router.post("/", async (req, res) => {
  const sandwich = new Menu.Sandwich(req.body);
  try {
    await sandwich.save();
    res.status(201).send({ sandwich });
    console.log("Sandwich created!");
  } catch (err) {
    res.status(400).send(err);
    console.log("Could not Create Sandwich");
  }
});

// get sandwich data
router.get("/", (req, res) => {
  Menu.Sandwich.find({}, (err, foundSandwich) => {
    if (err) {
      res.status(400).send(err);
      console.log("Error getting all sandwiches");
    } else {
      res.status(200).json(foundSandwich);
      console.log("Got all sandwiches!");
    }
  });
});

// delete sandwich data
router.delete("/:id", async (req, res) => {
  Menu.Sandwich.findByIdAndRemove(
    req.params.id,
    { new: true },
    (err, deletedSandwich) => {
      if (err) {
        res.status(400).send(err);
        console.log("Could not delete sandwich");
      } else {
        res.status(200).send({ deletedSandwich });
        console.log("Sandwich deleted!");
      }
    }
  );
});

// update sandwich data
router.put("/:id", async (req, res) => {
  try {
    Menu.Sandwich.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true },
      (err, updatedSandwich) => {
        res.json(updatedSandwich);
      }
    );
  } catch (err) {
    res.status(400).send(err);
  }
});

module.exports = router;
