import React from "react";
import "../css/NavBar.css";

function NavBar({
  genres,
  selectedGenre,
  onGenreChange,
  showFavorites,
  onShowFavorites,
}) {
  const handleGenreChange = (event) => {
    const value = event.target.value;
    if (value === "Favorites") {
      onShowFavorites(true);
    } else {
      onShowFavorites(false);
      onGenreChange(value);
    }
  };

  return (
    <nav className="navbar">
      <div className="navbar-item">
        <select className="fav-button"
          value={showFavorites ? "Favorites" : selectedGenre}
          onChange={handleGenreChange}
        >
          <option value="All genres">Categories</option>
          {genres.map((genre, index) => (
            <option key={index} value={genre}>
              {genre}
            </option>
          ))}
        </select>
        <button
          onClick={() => onShowFavorites(!showFavorites)}
          className="fav-button"
        >
          {showFavorites ? "Show All" : "Show Favorites"}{" "}
        </button>
      </div>
    </nav>
  );
}

export default NavBar;
