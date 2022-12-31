const mongoose = require("mongoose");
const productSchema = mongoose.Schema(
  {
    Brand_name: {
      type: String,
      required: [true],
    },
    IPR: {
      type: String,
      required: [true],
    },
    Status: {
      type: String,
      required: [true],
    },
    Number: {
      type: String,
      required: [true],
    },
    Office: {
      type: String,
      required: [true],
    },
    Owner: {
      type: String,
      required: [true],
    },
    Designation: {
      type: String,
      required: [true],
    },
    Nice_classification: {
      type: String,
      required: [true],
    },
  },
  {
    timestamps: true,
  }
);
module.exports = mongoose.model("Product", productSchema);
