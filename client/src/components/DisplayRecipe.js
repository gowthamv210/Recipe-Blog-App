import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import styles from "./DisplayRecipe.module.css";
import Loader from "./Loader";

export default function DisplayRecipe() {
  const { name } = useParams();
  const [recipeData, setRecipeData] = useState({});
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const apiUrl = process.env.REACT_APP_API_URL;

  useEffect(() => {
    async function fetchRecipes() {
      try {
        const response = await axios.get(`${apiUrl}/api/recipe/${name}`);
        setRecipeData(response.data[0]);
        console.log(response.data[0]);
      } catch (err) {
        setError(err.message);
        console.error(err);
      } finally {
        setLoading(false);
      }
    }

    fetchRecipes();
  }, [name]);

  if (loading) return <Loader />;
  if (error) return <div className={styles.error}>Error: {error}</div>;

  return (
    <div className={styles.displayBox}>
      <div className={styles.recipeContainer}>
        <div className={styles.imageColumn}>
          <img
            src={`${apiUrl}/images/recipes/${recipeData.image}`}
            alt={recipeData.name}
            className={styles.recipeImage}
          />
        </div>

        <div className={styles.recipeBox}>
          <h2>{recipeData.name}</h2>

          <h4>Ingredients</h4>
          <ul>
            {recipeData.ingredients.map((ingredient, index) => (
              <li key={index}>{ingredient}</li>
            ))}
          </ul>

          <div className={styles.instructionBox}>
            <h4>Instructions</h4>
            <ul>
              {recipeData.description
                .split(".")
                .map((line) => line.trim())
                .filter((line) => line.length > 0)
                .map((line, index) => (
                  <li key={index}>{line}.</li>
                ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
