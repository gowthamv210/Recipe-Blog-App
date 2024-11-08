import Community from "./components/Community";
import AboutUs from "./components/AboutUs";
import Navbar from "./components/Navbar";
import Latest from "./components/Latest";
import Recipes from "./components/Recipes";
import Categories from "./components/Categories";

function App() {
  return (
    <div>
      <Navbar />
      <Categories />
      <Latest />
      {/*  <Recipes /> */}
      <Community />
      <AboutUs />
    </div>
  );
}

export default App;
