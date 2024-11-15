import React from "react";
import { useState, useEffect } from "react";

import Loader from "./Loader";
import styles from "./Categories.module.css";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export default function Categories() {
  const apiUrl = process.env.REACT_APP_API_URL;
  const navigate = useNavigate();
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  const [currentIndex, setCurrentIndex] = useState(0);

  const nextCategory = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % categories.length);
  };

  const prevCategory = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + categories.length) % categories.length
    );
  };

  function handleCategory(category) {
    navigate(`/recipes/${category}`);
  }

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await axios.get(`${apiUrl}/api/categories`);
        setCategories(response.data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    }

    fetchData();
  }, []);

  useEffect(() => {
    const intervalId = setInterval(nextCategory, 5000);

    return () => clearInterval(intervalId);
  }, [categories.length]);

  if (loading) return <Loader />;

  if (error) return <div>{error}</div>;

  return (
    <div className={styles.carouselContainer}>
      <button
        className={`${styles.navButton} ${styles.navButtonLeft}`}
        onClick={prevCategory}
      >
        ‹
      </button>

      <div
        className={styles.carouselItem}
        onClick={() => handleCategory(categories[currentIndex].name)}
      >
        <h2 className={styles.categoryName}>{categories[currentIndex].name}</h2>
        <img
          src={`${apiUrl}/images/categories/${categories[currentIndex].image}`}
          alt={categories[currentIndex].name}
          className={styles.categoryImage}
        />
      </div>

      <button
        className={`${styles.navButton} ${styles.navButtonRight}`}
        onClick={nextCategory}
      >
        ›
      </button>
    </div>
  );
}
