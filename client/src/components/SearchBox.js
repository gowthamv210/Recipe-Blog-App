import "./SearchBox.css";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function SearchBox() {
  const navigate = useNavigate();
  const [input, setSearchInput] = useState("");

  return (
    <div className="InputContainer">
      <input
        placeholder="Search for a recipe"
        id="input"
        className="input-search"
        name="search"
        type="text"
        value={input}
        onChange={(e) => setSearchInput(e.target.value)}
        onKeyDown={(e) => {
          if (e.key === "Enter") {
            navigate(`/search/${input}`);
            setSearchInput("");
          }
        }}
      />

      <label className="labelforsearch" htmlFor="input">
        <svg className="searchIcon" viewBox="0 0 512 512">
          <path d="M416 208c0 45.9-14.9 88.3-40 122.7L502.6 457.4c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L330.7 376c-34.4 25.2-76.8 40-122.7 40C93.1 416 0 322.9 0 208S93.1 0 208 0S416 93.1 416 208zM208 352a144 144 0 1 0 0-288 144 144 0 1 0 0 288z"></path>
        </svg>
      </label>
    </div>
  );
}
