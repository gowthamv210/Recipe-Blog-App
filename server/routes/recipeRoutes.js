const express = require("express");
const router = express.Router();

const {
  categories,
  latest,
  categoryRecipes,
  addRecipe,
} = require("../controllers/recipeController");

router.get("/api/categories", categories);
router.get("/api/recipes/:category", categoryRecipes);
router.get("/api/recipes/latest", latest);
router.post("/api/recipes", addRecipe);

module.exports = router;
