import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import RecipeCard from "./RecipeCard";
import Loader from "./Loader";
import styles from "./SearchRecipes.module.css";

export default function SearchRecipes() {
  const { input } = useParams();
  const [searchedRecipes, setSearchedRecipes] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const apiUrl = process.env.REACT_APP_API_URL;

  useEffect(() => {
    async function fetchRecipes() {
      try {
        const response = await axios.get(`${apiUrl}/api/search/${input}`);

        setSearchedRecipes(response.data);
      } catch (err) {
        setError(`No Results found for your search query.. ${input} !!`);
        console.error(err);
      } finally {
        setLoading(false);
      }
    }

    console.log(input);
    fetchRecipes();
  }, [input]);

  if (loading) return <Loader />;

  if (error) return <div className="error">{error}</div>;

  return (
    <div className={styles.searchBox} style={{ margin: "4rem" }}>
      <h2>Search Results for {input}...</h2>
      <div className={styles.searchContainer}>
        {searchedRecipes.map((recipe, index) => (
          <RecipeCard key={index} recipe={recipe} />
        ))}
      </div>
    </div>
  );
}
