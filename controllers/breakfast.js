const express = require("express");
const cors = require("cors");

const Menu = require("../models/foodModel.js");

// config
const router = express.Router();

// middle-ware
router.use(express.json());
router.use(cors());
router.use(express.urlencoded({ extended: false }));

// post breakfast data
router.post("/", async (req, res) => {
  const breakfast = new Menu.Breakfast(req.body);
  try {
    await breakfast.save();
    res.status(201).send({ breakfast });
    console.log("Breakfast created!");
  } catch (err) {
    res.status(400).send(err);
    console.log("Could not Create Breakfast");
  }
});

// get breakfast data
router.get("/", (req, res) => {
  Menu.Breakfast.find({}, (err, foundBreakfast) => {
    if (err) {
      res.status(400).send(err);
      console.log("Error getting all Breakfast");
    } else {
      res.status(200).json(foundBreakfast);
      console.log("Got all Breakfast!");
    }
  });
});

// delete breakfast data
router.delete("/:id", async (req, res) => {
  Menu.Breakfast.findByIdAndRemove(
    req.params.id,
    { new: true },
    (err, deletedBreakfast) => {
      if (err) {
        res.status(400).send(err);
        console.log("Could not delete Breakfast");
      } else {
        res.status(200).send({ deletedBreakfast });
        console.log("Breakfast deleted!");
      }
    }
  );
});

// update breakfast data
router.put("/:id", async (req, res) => {
  try {
    Menu.Breakfast.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true },
      (err, updatedBreakfast) => {
        res.json(updatedBreakfast);
      }
    );
  } catch (err) {
    res.status(400).send(err);
  }
});

module.exports = router;
