import React from 'react';
import Movie from './Movie';

function MovieList({ movies, onToggleFavorite, favoriteMovies }) {
  return (
    <div className="movie-list">
      {movies.length > 0 ? (
        movies.map((movie) => (
          <Movie
            key={movie.id}
            movie={movie}
            onToggleFavorite={onToggleFavorite}
            isFavorite={favoriteMovies.includes(movie.id)}
          />
        ))
      ) : (
        <p>Não existem filmes para esta categoria.</p>
      )}
    </div>
  );
}

export default MovieList;
