import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import styles from "./Recipes.module.css";
import Loader from "./Loader";
import RecipeCard from "./RecipeCard";

export default function Recipes() {
  const { category } = useParams();
  const [recipes, setRecipes] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    async function fetchRecipes() {
      try {
        const response = await axios.get(`/api/recipes/${category}`);
        setRecipes(response.data);
      } catch (err) {
        setError(err.message);
        console.error(err);
      } finally {
        setLoading(false);
      }
    }

    fetchRecipes();
  });

  if (loading) return <Loader />;

  if (error) return <div>{error}</div>;

  return (
    <div className={styles.recipesBox}>
      <h2>{category} Recipes</h2>

      <div className={styles.recipesContainer}>
        {recipes.map((recipe, index) => (
          <RecipeCard key={index} recipe={recipe} />
        ))}
      </div>
    </div>
  );
}
