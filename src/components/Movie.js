import React, { useState } from 'react';

function Movie({ movie, onToggleFavorite, isFavorite }) {
  const [showAdditionalInfo, setShowAdditionalInfo] = useState(false);

  // Toggle the visibility of additional information
  const toggleAdditionalInfo = () => {
    setShowAdditionalInfo(!showAdditionalInfo);
  };

  return (
    <div className="movie-card" key={movie.id}>
      <p onClick={() => onToggleFavorite(movie.id)}>{isFavorite ? '🌟' : '✩'}</p>
      <img
        src={movie.posterUrl}
        alt={movie.title}
        onClick={toggleAdditionalInfo}
      />
      <h2>{movie.title}</h2>
      <p className='letra'> Year: {movie.year}</p>
      <p className='letra'> {movie.genres}</p>
      
      {showAdditionalInfo && (
        <div>
            <p className='letra'>Time: {movie.runtime} min</p>
            <p className='letra'>Director: {movie.director.join(', ')}</p>
            <p className='letra'>Actors: {movie.actors.join(', ')}</p>
            <p className='letra'>About: {movie.summary}</p>
        </div>
      )}
      
    </div>
  );
}

export default Movie;
