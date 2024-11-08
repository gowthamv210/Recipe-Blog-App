// CATEGORY COLLECTION

const mongoose = require("mongoose");

const categorySchema = new mongoose.Schema({
  name: {
    type: String,
    required: "This field is mandatory",
  },
  image: {
    type: String,
    required: "This field is mandatory",
  },
});

module.exports = mongoose.model("Category", categorySchema);
