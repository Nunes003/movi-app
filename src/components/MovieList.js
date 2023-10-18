import React from 'react';
import Movie from './Movie';
import '../css/Movie.css';

const MovieList = ({ movies, onToggleFavorite, favoriteMovies }) =>{
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
        <p className='letra2'>Não existem filmes para esta categoria....</p>
      )}
    </div>
  );
}

export default MovieList;
