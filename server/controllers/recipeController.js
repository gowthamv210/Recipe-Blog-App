/* GET / 
    HOMEPAGE
*/

require("../models/database");
const Category = require("../models/Category");
const Recipe = require("../models/Recipe");

// ENDPOINT functions

// send list all of categories

const categories = async (req, res) => {
  try {
    const categories = await Category.find({});
    res.status(200).json(categories);
  } catch (err) {
    console.error("Error fetching categories:", err);
    res.status(500).json({ message: err.message || "Error occurred.." });
  }
};

// send list top 10 latest recipes

const latest = async (req, res) => {
  try {
    const latestRecipes = await Recipe.find({})
      .sort({ createdAt: -1 })
      .limit(10);
    res.status(200).json(latestRecipes);
  } catch (err) {
    console.error("error when fetching latest recipes..");
    res.status(500).json({ message: err.message || "Error occurred.." });
  }
};

// send recipes by particular category

const categoryRecipes = async (req, res) => {
  try {
    const { category } = req.params;
    const recipes = await Recipe.find({ category });
    res.status(200).json(recipes);
  } catch (err) {
    console.error("Error fetching categories:", err);
    res.status(500).json({ message: err.message || "Error occurred.." });
  }
};

// add new Recipe to the database

const addRecipe = async (req, res) => {
  try {
    const newRecipe = new Recipe(req.body);
    await newRecipe.save();
  } catch (err) {
    console.error("Error fetching categories:", err);
    res.status(500).json({ message: err.message || "Error occurred.." });
  }
};

module.exports = {
  categories,
  latest,
  categoryRecipes,
  addRecipe,
};
