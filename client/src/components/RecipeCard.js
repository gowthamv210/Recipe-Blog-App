import React from "react";
import styles from "./RecipeCard.module.css";

export default function RecipeCard({ recipe }) {
  return (
    <div className={styles.recipeCard}>
      <img src={`/images/recipes/${recipe.image}`} alt={recipe.name} />
      <p>{recipe.name}</p>
    </div>
  );
}
