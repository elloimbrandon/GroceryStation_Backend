const express = require("express");
const cors = require("cors");

// store model
const Menu = require("../models/foodModel");

// seed data for testing
// const sandwichSeed = require("../models/sandwichSeed.js");

// config
const router = express.Router();

// middle-ware
router.use(express.json());
router.use(cors());
router.use(express.urlencoded({ extended: false }));

// post sandwich data
router.post("/", (req, res) => {
  Menu.Breakfast.create(req.body, (err, createdBreakfast) => {
    res.json(createdBreakfast);
  });
});

// get sandwich data
router.get("/", (req, res) => {
  Menu.Breakfast.find({}, (err, foundBreakfast) => {
    res.json(foundBreakfast);
  });
});

// delete sandwich data
router.delete("/:id", (req, res) => {
  Menu.Breakfast.findByIdAndRemove(
    req.params.id,
    { new: true },
    (err, deletedBreakfast) => {
      res.json(deletedBreakfast);
    }
  );
});

// update sandwich data
router.put("/:id", (req, res) => {
  Menu.Breakfast.findByIdAndUpdate(
    req.params.id,
    req.body,
    { new: true },
    (err, updatedBreakfast) => {
      res.json(updatedBreakfast);
    }
  );
});

module.exports = router;
