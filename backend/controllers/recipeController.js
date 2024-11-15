/* GET / 
    HOMEPAGE
*/

require("../models/database");
const Category = require("../models/Category");
const Recipe = require("../models/Recipe");

const multer = require("multer");
const path = require("path");
const fs = require("fs");

// Ensure the images directory exists
const imagesDir = path.join(__dirname, "../public/images/recipes");
if (!fs.existsSync(imagesDir)) {
  fs.mkdirSync(imagesDir, { recursive: true });
}
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, imagesDir);
  },
  filename: (req, file, cb) => {
    cb(null, file.originalname);
  },
});

const upload = multer({ storage });

// ENDPOINT functions

// Send list all of categories
const categories = async (req, res) => {
  try {
    const categories = await Category.find({});
    res.status(200).json(categories);
  } catch (err) {
    console.error("Error fetching categories:", err);
    res.status(500).json({ message: err.message || "Error occurred.." });
  }
};

// View all recipes
const allRecipes = async (req, res) => {
  try {
    const viewrecipes = await Recipe.find({});
    res.status(200).json(viewrecipes);
  } catch (err) {
    console.error("Error when fetching all recipes:", err);
    res.status(500).json({ message: err.message || "Error occurred.." });
  }
};

// Send list top 10 latest recipes
const latest = async (req, res) => {
  try {
    const latestRecipes = await Recipe.find({}).sort({ _id: -1 }).limit(10);
    res.status(200).json(latestRecipes);
  } catch (err) {
    console.error("Error when fetching latest recipes:", err);
    res.status(500).json({ message: err.message || "Error occurred.." });
  }
};

// Search Feature
const searchRecipe = async (req, res) => {
  try {
    let searchquery = req.params.input;
    const stopwords = ["recipes", "food", "dish", "cuisine"];

    const keywords = searchquery
      .toLowerCase()
      .split("%")
      .filter((word) => !stopwords.includes(word));

    const searchTerm = keywords.length > 0 ? keywords.join(" ") : searchQuery;

    const regex = new RegExp(searchquery, "i");

    const categoryResults = await Recipe.find({ category: regex });

    if (categoryResults.length > 0) {
      return res.status(200).json(categoryResults);
    }

    const nameResults = await Recipe.find({ name: regex });

    if (nameResults.length > 0) {
      return res.status(200).json(nameResults);
    }

    res
      .status(404)
      .json({ message: "No recipes found for your search query." });
  } catch (err) {
    console.error("Error when fetching selected recipes:", err);
    res.status(500).json({
      message: err.message || "Error occurred while fetching the recipe",
    });
  }
};

// Fetch Single recipe data
const oneRecipe = async (req, res) => {
  try {
    let name = req.params.name;
    name = name.split("%").join(" ");

    const recipeData = await Recipe.find({ name });

    if (recipeData.length > 0) {
      res.status(200).json(recipeData);
    } else {
      res.status(404).json({ message: "Recipe not found" });
    }
  } catch (err) {
    console.error("Error when fetching selected recipes:", err);
    res.status(500).json({
      message: err.message || "Error occurred while fetching the recipe",
    });
  }
};

// Send recipes by particular category
const categoryRecipes = async (req, res) => {
  try {
    const recipes = await Recipe.find({ category: req.params.category });
    res.status(200).json(recipes);
  } catch (err) {
    console.error("Error fetching categories:", err);
    res.status(500).json({ message: err.message || "Error occurred.." });
  }
};

// Add new Recipe to the database
const addRecipe = async (req, res) => {
  try {
    const { name, description, email, ingredients, category } = req.body;

    const ingredientsList = Array.isArray(ingredients)
      ? ingredients
      : JSON.parse(ingredients);

    const imagePath = req.file ? req.file.filename : req.body.image;

    const newRecipe = new Recipe({
      name,
      description,
      email,
      ingredients: ingredientsList,
      category,
      image: imagePath,
    });

    await newRecipe.save();
    res
      .status(201)
      .json({ message: "Recipe added successfully", recipe: newRecipe });
  } catch (error) {
    console.error("Error adding recipe:", error);
    res.status(500).json({ error: error.message });
  }
};

module.exports = {
  categories,
  allRecipes,
  latest,
  upload,
  oneRecipe,
  searchRecipe,
  categoryRecipes,
  addRecipe,
};
