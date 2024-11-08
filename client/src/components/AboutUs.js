import LetterBox from "./LetterBox";
import "./AboutUs.css";
import { FaFacebookF } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa6";
import { FaPinterestP } from "react-icons/fa6";
import { FaYoutube } from "react-icons/fa6";
import { FaThreads } from "react-icons/fa6";

export default function AboutUs() {
  return (
    <div id="aboutus" className="aboutus-box">
      <div className="aboutus-container">
        <div className="logo-aboutUs">
          <img
            className="app-logo-aboutUs"
            src="images/app-icon.png"
            alt="app-logo"
          />
          <img
            className="app-logo-text"
            src="images/app-logo-text.png"
            alt="app-logo-text"
          />
        </div>
        <div className="more-from-us">
          <h6>MORE FROM US</h6>
          <p>Our Team</p>
          <p>About Us</p>
          <p>Contact</p>
          <p>Site Map</p>
        </div>
        <div className="socials">
          <h6>FOLLOW ALONG</h6>
          <span>
            <a href="https://www.facebook.com">
              {" "}
              <FaFacebookF style={{ fontSize: "1.5rem" }} />
            </a>
            <a href="https://www.pinterest.com">
              <FaPinterestP style={{ fontSize: "1.5rem" }} />
            </a>
            <a href="https://www.instagram.com">
              <FaInstagram style={{ fontSize: "1.5rem" }} />
            </a>
            <a href="https://www.x.com">
              <FaXTwitter style={{ fontSize: "1.5rem" }} />
            </a>
            <a href="https://www.youtube.com">
              <FaYoutube style={{ fontSize: "1.5rem" }} />
            </a>
            <a href="https://www.threads.com">
              <FaThreads style={{ fontSize: "1.5rem" }} />
            </a>
          </span>
        </div>

        <div className="sign-up">
          <h4>Sign up for our newsletter.</h4>
          <p>
            Enjoy a daily dose of recipes, grocery finds, clever kitchen tips,
            and more.
          </p>
          <LetterBox />
        </div>
      </div>
      <footer class="footer">
        <span>
          ©2024 <strong>Food52 </strong>
        </span>
        <a href="/terms">Terms</a> | <a href="/privacy">Privacy</a> |
        <a href="/codeofconduct">Code of Conduct</a> |
        <a href="/accessibility">Accessibility Policy</a>
      </footer>
    </div>
  );
}
