const express = require("express");
const router = express.Router();

const Recipe = require("../models/Recipe");

const {
  categories,
  allRecipes,
  latest,
  upload,
  oneRecipe,
  searchRecipe,
  categoryRecipes,
  addRecipe,
} = require("../controllers/recipeController");

router.get("/categories", categories);
router.get("/recipes", allRecipes);
router.get("/latest", latest);
router.get("/recipes/:category", categoryRecipes);
router.get("/search/:input", searchRecipe);
router.get("/recipe/:name", oneRecipe);
router.post("/recipes/add", upload.single("image"), addRecipe);

module.exports = router;
