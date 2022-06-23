const mongoose = require("mongoose");

const HomeSchema = new mongoose.Schema(
  {
    lastActiveAt: Date,
    title: String,
    description: String,
  },
  { timestamps: true }
);

const Updates = mongoose.model("Update", HomeSchema);

module.exports = Updates;
