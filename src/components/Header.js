import React from 'react';
import '../css/Header.css';
import DropDown from './DropDown';


const Header = ({ genres, selectedGenre, onGenreChange, showFavorites, onShowFavorites }) => {
  return (
    <header className="header">
      <img src="popcorn.png" alt="Popcorn" className="popcorn-image"/>
      <h1>Movie App</h1>
      <DropDown
        genres={genres}
        selectedGenre={selectedGenre}
        onGenreChange={onGenreChange}
        showFavorites={showFavorites}
        onShowFavorites={onShowFavorites}
      />
    </header>
  );
}

export default Header;