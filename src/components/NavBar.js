import React from "react";
import "../css/NavBar.css";

// Definição do componente NavBar
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
        <select className="fav-button" onChange={handleGenreChange}>
          <option value="All genres">All genres</option>
          {genres.map((genre, index) => (
            <option key={index} value={genre}>
              {genre}
            </option>
          ))}
        </select>
        <button onClick={() => onShowFavorites(!showFavorites)} className="fav-button">Favorites</button>
      </div>
    </nav>
  );
}

// Exporta o componente NavBar
export default NavBar;
