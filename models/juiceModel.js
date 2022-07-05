const mongoose = require("mongoose");

const JuiceSchema = new mongoose.Schema(
  {
    flavor: String,
    description: String,
  },
  { timestamps: true }
);

const Juice = mongoose.model("Juice", JuiceSchema);

module.exports = Juice;
