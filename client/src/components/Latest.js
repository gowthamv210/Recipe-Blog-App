import { useEffect, useState } from "react";
import axios from "axios";
import styles from "./Latest.module.css";
import RecipeCard from "./RecipeCard";
import Loader from "./Loader";

export default function Latest() {
  const [latestRecipes, setLatestRecipes] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const apiUrl = process.env.REACT_APP_API_URL;

  /* const [currentIndex, setCurrentIndex] = useState(0);

  // Calculate the next index with wrapping logic
  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? latestRecipes.length - 1 : prevIndex - 1
    );
  };

  // Calculate the next index with wrapping logic
  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === latestRecipes.length - 1 ? 0 : prevIndex + 1
    );
  }; */

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await axios.get(`${apiUrl}/api/latest`);
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

      <div className={styles.carouselContainer}>
        {/*  <button
          onClick={handlePrev}
          className={`${styles.arrowButton} ${styles.left}`}
        >
          &#8249;
        </button> */}

        <div className={styles.recipeWrapper}>
          {latestRecipes.map((recipe, index) => (
            <RecipeCard key={recipe._id || index} recipe={recipe} />
          ))}
        </div>

        {/*  <button
          onClick={handleNext}
          className={`${styles.arrowButton} ${styles.right}`}
        >
          &#8250;
        </button> */}
      </div>
    </div>
  );
}
