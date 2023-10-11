import React, { useState } from 'react';

function Movie({ movie, onToggleFavorite, isFavorite }) {
  const [showAdditionalInfo, setShowAdditionalInfo] = useState(false);

  // Toggle the visibility of additional information
  const toggleAdditionalInfo = () => {
    setShowAdditionalInfo(!showAdditionalInfo);
  };

  return (
    <div className="movie-card" key={movie.id}>
      <p className="estrela" onClick={() => onToggleFavorite(movie.id)}>{isFavorite ? '🌟' : '✩'}</p>
      <img
        src={movie.posterUrl}
        alt={movie.title}
        onClick={toggleAdditionalInfo}
      />
      <h2>{movie.title}</h2>
      <p>{movie.year}</p>
      <p>{movie.runtime} min</p>
      <p>{movie.genres}</p>
      
      {showAdditionalInfo && (
        <div>
            <p>Director: {movie.director.join(', ')}</p>
            <p>Actors: {movie.actors.join(', ')}</p>
            <p>{movie.summary}</p>
        </div>
      )}
      
    </div>
  );
}

export default Movie;
