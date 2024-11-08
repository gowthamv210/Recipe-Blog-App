import { useEffect, useState } from "react";
import axios from "axios";
import styles from "./Latest.module.css";
import RecipeCard from "./RecipeCard";
import Loader from "./Loader";

export default function Latest() {
  const [latestRecipes, setLatestRecipes] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await axios.get("/api/recipes/latest");
        setLatestRecipes(response.data);
        console.log(response.data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    }

    fetchData();
  }, []);

  if (loading) return <Loader />;
  if (error) return <div>{`Error: ${error}`}</div>;

  return (
    <div id="latest" className={styles.latestBox}>
      <h2>Latest Recipes</h2>
      <ul className={styles.RecipeList}>
        {latestRecipes.map((recipe) => (
          <RecipeCard key={recipe._id} recipe={recipe} />
        ))}
      </ul>
    </div>
  );
}
