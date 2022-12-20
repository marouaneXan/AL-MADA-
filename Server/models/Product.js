const mongoose = require("mongoose");
const clientSchema = mongoose.Schema(
  {
    Brand_name: {
      type: String,
      required: [true, "Please add a first name field"],
    },
    IPR: {
      type: String,
      required: [true, "Please add a first name field"],
    },
    Status: {
      type: String,
      required: [true, "Please add a first name field"],
    },
    Number: {
      type: String,
      required: [true, "Please add a first name field"],
    },
    Office: {
      type: String,
      required: [true, "Please add a first name field"],
    },
    Owner: {
      type: String,
      required: [true, "Please add a first name field"],
    },
    Designation: {
      type: String,
      required: [true, "Please add a first name field"],
    },
    Nice_classification: {
      type: String,
      required: [true, "Please add a first name field"],
    },
  },
  {
    timestamps: true,
  }
);
module.exports = mongoose.model("Client", clientSchema);
