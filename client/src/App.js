import { BrowserRouter, Routes, Route } from "react-router-dom";
import AboutUs from "./components/AboutUs";
import Navbar from "./components/Navbar";
import Recipes from "./components/Recipes";
import DisplayRecipe from "./components/DisplayRecipe";
import SearchRecipes from "./components/SearchRecipes";
import HomePage from "./components/HomePage";

export default function App() {
  return (
    <BrowserRouter>
      <div className="app">
        <Navbar />

        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/recipes/:category" element={<Recipes />} />
          <Route path="/search/:input" element={<SearchRecipes />} />
          <Route path="/recipe/:name" element={<DisplayRecipe />} />
        </Routes>
        <AboutUs />
      </div>
    </BrowserRouter>
  );
}
