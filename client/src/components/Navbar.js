import { Link } from "react-scroll";
import SearchBox from "./SearchBox";
import styles from "./Navbar.module.css";

export default function Navbar() {
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
          >
            Community
          </Link>
        </li>
        <li>
          <Link
            style={{
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              margin: "0px 10px",
              cursor: "pointer",
            }}
            to="/"
            spy={true}
            smooth={true}
            offset={-100}
            duration={100}
          >
            <img
              className={styles.appLogo}
              src="images/app-icon.png"
              alt="app-logo"
            />
            <img
              className={styles.appLogoText}
              src="images/app-logo-text.png"
              alt="app-logo-text"
            />
          </Link>
        </li>

        <SearchBox />

        <li>
          <Link
            spy={true}
            smooth={true}
            offset={-100}
            duration={100}
            to="aboutus"
          >
            About Us
          </Link>
        </li>
      </ul>
    </nav>
  );
}
