const express = require("express");
const cors = require("cors");

const Menu = require("../models/foodModel.js");

// config
const router = express.Router();

// middle-ware
router.use(express.json());
router.use(cors());
router.use(express.urlencoded({ extended: false }));

// post coldcutandcheese data
router.post("/", async (req, res) => {
  const coldcutandcheese = new Menu.ColdCutAndCheese(req.body);
  try {
    await coldcutandcheese.save();
    res.status(201).send({ coldcutandcheese });
    console.log("ColdCutAndCheese created!");
  } catch (err) {
    res.status(400).send(err);
    console.log("Could not Create ColdCutAndCheese");
  }
});

// get coldcutandcheese data
router.get("/", (req, res) => {
  Menu.ColdCutAndCheese.find({}, (err, foundColdCutAndCheese) => {
    if (err) {
      res.status(400).send(err);
      console.log("Error getting all ColdCutAndCheese");
    } else {
      res.status(200).json(foundColdCutAndCheese);
      console.log("Got all ColdCutAndCheese!");
    }
  });
});

// delete coldcutandcheese data
router.delete("/:id", async (req, res) => {
  Menu.ColdCutAndCheese.findByIdAndRemove(
    req.params.id,
    { new: true },
    (err, deletedColdCutAndCheese) => {
      if (err) {
        res.status(400).send(err);
        console.log("Could not delete ColdCutAndCheese");
      } else {
        res.status(200).send({ deletedColdCutAndCheese });
        console.log("ColdCutAndCheese deleted!");
      }
    }
  );
});

// update sandwich data
router.put("/:id", async (req, res) => {
  try {
    Menu.ColdCutAndCheese.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true },
      (err, updatedColdCutAndCheese) => {
        res.json(updatedColdCutAndCheese);
      }
    );
  } catch (err) {
    res.status(400).send(err);
  }
});

module.exports = router;
