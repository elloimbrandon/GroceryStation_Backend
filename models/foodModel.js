const mongoose = require("mongoose");

const SandwichSchema = new mongoose.Schema(
  {
    itemName: String,
    description: String,
    priceFull: { type: mongoose.Types.Decimal128 },
    priceHalf: { type: mongoose.Types.Decimal128 },
    image: String,
  },
  { timestamps: true }
);

const BreakfastSchema = new mongoose.Schema(
  {
    itemName: String,
    description: String,
    price: { type: mongoose.Types.Decimal128 },
    image: String,
  },
  { timestamps: true }
);

const SaladSchema = new mongoose.Schema(
  {
    itemName: String,
    description: String,
    price: { type: mongoose.Types.Decimal128 },
    image: String,
  },
  { timestamps: true }
);

// remember to update in postman at some point to check the dif between chz and meat options
const MeatAndCheeseSchema = new mongoose.Schema(
  {
    itemName: String,
    meat: Boolean,
    price: { type: mongoose.Types.Decimal128 },
    image: String,
  },
  { timestamps: true }
);

const Sandwich = mongoose.model("Sandwich", SandwichSchema);
const Breakfast = mongoose.model("Breakfast", BreakfastSchema);
const Salad = mongoose.model("Salad", SaladSchema);
const ColdCutAndCheese = mongoose.model(
  "ColdCutsAndCheese",
  MeatAndCheeseSchema
);

module.exports = { Sandwich, Breakfast, Salad, ColdCutAndCheese };
