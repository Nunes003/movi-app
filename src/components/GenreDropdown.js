import React from 'react';

function GenreDropdown({ genres, selectedGenre, onGenreChange }) {
  return (
    <select
      onChange={(e) => onGenreChange(e.target.value)}
      value={selectedGenre}
    >
      <option value="All genres">All genres</option>
      {genres.map((genre, index) => (
        <option key={index} value={genre}>
          {genre}
        </option>
      ))}
    </select>
  );
}

export default GenreDropdown;
