import React from "react";
import "../css/DropDown.css";

const DropDown = ({genres,selectedGenre,onGenreChange,showFavorites,onShowFavorites,}) =>{
  
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
        <select className="fav-button" value={showFavorites ? "Favorites" : selectedGenre} onChange={handleGenreChange}>
          <option value="All genres">All genres</option>
          {genres.map((genre, index) => (
            <option key={index} value={genre}>
              {genre}
            </option>
          ))}
          <option value="Favorites">Favorites</option>
        </select>
      </div>
    </nav>
  );
}

export default DropDown;
