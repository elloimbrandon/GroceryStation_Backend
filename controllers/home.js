const express = require("express");
const cors = require("cors");

const Updates = require("../models/homeModel.js");

// config
const router = express.Router();

// seed data for testing
const updateSeed = require("../seed-data/updatesSeed.js");

// middle-ware
router.use(express.json());
router.use(cors());
router.use(express.urlencoded({ extended: false }));

// post Updates data
router.post("/", async (req, res) => {
  const updates = new Updates(req.body);
  try {
    await updates.save();
    res.status(201).send({ updates });
    console.log("Updates created!");
  } catch (err) {
    res.status(400).send(err);
    console.log("Could not Create Updates");
  }
});

// get sandwich data
router.get("/", (req, res) => {
  Updates.find({}, (err, foundUpdates) => {
    if (err) {
      res.status(400).send(err);
      console.log("Error getting all Updates");
    } else {
      res.status(200).json(foundUpdates);
      console.log("Got all Updates!");
    }
  });
});

// delete sandwich data
router.delete("/:id", async (req, res) => {
  Updates.findByIdAndRemove(
    req.params.id,
    { new: true },
    (err, deletedUpdates) => {
      if (err) {
        res.status(400).send(err);
        console.log("Could not delete Updates");
      } else {
        res.status(200).send({ deletedUpdates });
        console.log("Updates deleted!");
      }
    }
  );
});

// update sandwich data
router.put("/:id", async (req, res) => {
  try {
    Updates.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true },
      (err, updatedUpdates) => {
        res.json(updatedUpdates);
      }
    );
  } catch (err) {
    res.status(400).send(err);
  }
});

// seed data

// updates seed data

// Updates.create(updateSeed, (err, data) => {
//   if (err) console.log(err.message);
//   console.log("Added provided updates data....");
// });

module.exports = router;
