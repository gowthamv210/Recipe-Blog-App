import React from "react";
import styles from "./RecipeCard.module.css";
import { useNavigate } from "react-router-dom";

export default function RecipeCard({ recipe }) {
  const navigate = useNavigate();

  function handleOnClick(name) {
    navigate(`/recipe/${name}`);
  }

  return (
    <div
      className={styles.recipeCard}
      onClick={() => handleOnClick(recipe.name)}
    >
      <img src={`/images/recipes/${recipe.image}`} alt={recipe.name} />
      <p>{recipe.name}</p>
    </div>
  );
}
