const mongoose = require("mongoose");

const recipeSchema = new mongoose.Schema({
  name: {
    type: String,
    required: "This field is mandatory",
  },
  description: {
    type: String,
    required: "This field is mandatory",
  },
  email: {
    type: String,
    required: "This field is mandatory",
  },
  ingredients: {
    type: Array,
    required: "This field is mandatory",
  },
  category: {
    type: String,
    enum: ["American", "Chinese", "Indian", "Mexican", "Italian", "Japanese"],
    required: "This field is mandatory",
  },
  image: {
    type: String,
    required: "This field is mandatory",
  },
});

module.exports = mongoose.model("Recipe", recipeSchema);
