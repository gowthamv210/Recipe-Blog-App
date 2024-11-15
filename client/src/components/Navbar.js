import { Link } from "react-scroll";
import SearchBox from "./SearchBox";
import styles from "./Navbar.module.css";
import { useNavigate } from "react-router-dom";

export default function Navbar() {
  const navigate = useNavigate();

  function handleClick(name) {
    navigate("/");

    setTimeout(() => {
      window.scrollTo({
        top: document.getElementById(name)?.offsetTop - 100,
        behavior: "smooth",
      });
    }, 100);
  }
  return (
    <nav className={styles.navBar}>
      <ul className={styles.navList}>
        <li>
          <Link
            to="recipes"
            spy={true}
            smooth={true}
            offset={-100}
            duration={100}
            onClick={() => handleClick("recipes")}
          >
            Recipes
          </Link>
        </li>
        <li>
          <Link
            to="latest"
            spy={true}
            smooth={true}
            offset={-100}
            duration={100}
            onClick={() => handleClick("latest")}
          >
            Latest
          </Link>
        </li>
        <li>
          <Link
            to="community"
            spy={true}
            smooth={true}
            offset={-100}
            duration={100}
            onClick={() => handleClick("community")}
          >
            Community
          </Link>
        </li>
        <li
          onClick={() => navigate("/")}
          style={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            margin: "0px 10px",
            cursor: "pointer",
          }}
        >
          <img
            className={styles.appLogo}
            src="/images/app-icon.png"
            alt="app-logo"
          />
          <img
            className={styles.appLogoText}
            src="/images/app-logo-text.png"
            alt="app-logo-text"
          />
        </li>

        <SearchBox />

        <li>
          <Link
            to="aboutus"
            spy={true}
            smooth={true}
            offset={-100}
            duration={100}
          >
            About Us
          </Link>
        </li>
      </ul>
    </nav>
  );
}
