const express = require("express");
const cors = require("cors");

const Menu = require("../models/foodModel.js");

// config
const router = express.Router();

// seed data for testing
const saladSeed = require("../seed-data/saladSeed.js");

// middle-ware
router.use(express.json());
router.use(cors());
router.use(express.urlencoded({ extended: false }));

// post salad data
router.post("/", async (req, res) => {
  const salad = new Menu.Salad(req.body);
  try {
    await salad.save();
    res.status(201).send({ salad });
    console.log("Salad created!");
  } catch (err) {
    res.status(400).send(err);
    console.log("Could not Create Salad");
  }
});

// get salad data
router.get("/", (req, res) => {
  Menu.Salad.find({}, (err, foundSalad) => {
    if (err) {
      res.status(400).send(err);
      console.log("Error getting all Salads");
    } else {
      res.status(200).json(foundSalad);
      console.log("Got all Salads!");
    }
  });
});

// delete salad data
router.delete("/:id", async (req, res) => {
  Menu.Salad.findByIdAndRemove(
    req.params.id,
    { new: true },
    (err, deletedSalad) => {
      if (err) {
        res.status(400).send(err);
        console.log("Could not delete Salad");
      } else {
        res.status(200).send(deletedSalad);
        console.log("Salad deleted!");
      }
    }
  );
});

// update salad data
router.put("/:id", async (req, res) => {
  try {
    Menu.Salad.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true },
      (err, updatedSalad) => {
        res.json(updatedSalad);
      }
    );
  } catch (err) {
    res.status(400).send(err);
  }
});

// seed data

// salads seed data

// Menu.Salad.create(saladSeed, (err, data) => {
//   if (err) console.log(err.message);
//   console.log("Added provided Salad data....");
// });

module.exports = router;
