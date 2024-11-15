import React, { useState } from "react";
import { useForm } from "react-hook-form";
import axios from "axios";
import styles from "./RecipeForm.module.css";

export default function RecipeForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const apiUrl = process.env.REACT_APP_API_URL;
  const [imageFile, setImageFile] = useState(null);

  const onSubmit = async (data) => {
    console.log(data);
    const formData = new FormData();
    formData.append("name", data.name);
    formData.append("description", data.description);
    formData.append("email", data.email);
    formData.append("ingredients", JSON.stringify(data.ingredients.split(",")));
    formData.append("category", data.category);

    if (imageFile) {
      formData.append("image", imageFile);
    } else if (data.imageURL) {
      formData.append("image", data.imageURL);
    }

    try {
      await axios.post(`${apiUrl}/api/recipes/add`, formData, {
        headers: { "Content-Type": "multipart/form-data" },
      });
      alert("Recipe added successfully!");
    } catch (error) {
      console.error("Error adding recipe:", error);
      alert("Failed to add recipe.");
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className={styles.formContainer}>
      <h3 className={styles.formTitle}>Add New Recipe</h3>

      <div className={styles.formField}>
        <label className={styles.label}>Recipe Name</label>
        <input
          type="text"
          className={styles.input}
          {...register("name", { required: "Recipe name is required" })}
        />
        {errors.name && <p className={styles.error}>{errors.name.message}</p>}
      </div>

      <div className={styles.formField}>
        <label className={styles.label}>Recipe Instructions</label>
        <textarea
          placeholder="Instructions.."
          className={styles.input}
          style={{ height: "150px" }}
          {...register("description", { required: "Description is required" })}
        />
        {errors.description && (
          <p className={styles.error}>{errors.description.message}</p>
        )}
      </div>

      <div className={styles.formField}>
        <label className={styles.label}>Email</label>
        <input
          type="email"
          placeholder="Email"
          className={styles.input}
          {...register("email", {
            required: "Email is required",
            pattern: {
              value: /^\S+@\S+$/i,
              message: "Invalid email format",
            },
          })}
        />
        {errors.email && <p className={styles.error}>{errors.email.message}</p>}
      </div>

      <div className={styles.formField}>
        <label className={styles.label}>Ingredients</label>
        <input
          type="text"
          placeholder="Ingredients (comma separated)"
          className={styles.input}
          {...register("ingredients", { required: "Ingredients are required" })}
        />
        {errors.ingredients && (
          <p className={styles.error}>{errors.ingredients.message}</p>
        )}
      </div>

      <div className={styles.formField}>
        <label className={styles.label}>Select Cuisine Category</label>
        <select
          className={styles.input}
          {...register("category", { required: "Category is required" })}
        >
          <option value="">Select Category</option>
          <option value="American">American</option>
          <option value="Chinese">Chinese</option>
          <option value="Indian">Indian</option>
          <option value="Mexican">Mexican</option>
          <option value="Italian">Italian</option>
          <option value="Japanese">Japanese</option>
        </select>
        {errors.category && (
          <p className={styles.error}>{errors.category.message}</p>
        )}
      </div>

      <div className={styles.fileInputContainer}>
        <label className={styles.label}>Upload Image</label>
        <input
          type="file"
          className={styles.input}
          onChange={(e) => setImageFile(e.target.files[0])}
        />
      </div>

      {/*   <div className={styles.urlInputContainer}>
        <label className={styles.label}>Or Enter Image URL</label>
        <input
          type="url"
          placeholder="Image URL"
          className={styles.input}
          {...register("imageURL")}
        />
      </div> */}

      <button type="submit" className={styles.button}>
        Add Recipe
      </button>
    </form>
  );
}
