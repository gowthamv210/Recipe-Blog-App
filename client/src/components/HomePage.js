import Categories from "./Categories";
import Community from "./Community";
import Latest from "./Latest";

export default function HomePage() {
  return (
    <div className="homePage">
      <Categories />
      <Latest />
      <Community />
    </div>
  );
}
