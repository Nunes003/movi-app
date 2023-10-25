import React, { useState } from "react";
import "./App.css";
import "./css/Movie.css";
import MovieList from "./components/MovieList";
import Header from "./components/Header";
import { movies, genres } from "./data/moviesJson";
import Footer from "./components/Footer";

function App() {
  // declarar os estados
  const [selectedGenre, setSelectedGenre] = useState("All genres");
  const [showFavorites, setShowFavorites] = useState(false);
  const [favoriteMovies, setFavoriteMovies] = useState(() => {
    const favorites = JSON.parse(localStorage.getItem("favorites")) || [];
    return favorites;
  });

const toggleFavorite = (movieId) => {
  // se já está na lista de favoritos
  const isFavorite = favoriteMovies.includes(movieId);

  const updatedFavorites = isFavorite ? favoriteMovies.filter((id) => id !== movieId) : favoriteMovies.concat(movieId);

  setFavoriteMovies(updatedFavorites);
  localStorage.setItem("favorites", JSON.stringify(updatedFavorites));
};


const filterMovies = (showFavorites, genres) => {
  return movies.filter((movie) => {
    if (showFavorites) {
      return favoriteMovies.includes(movie.id);
    } else if (genres === "All genres") {
      return true;
    } else {
      return movie.genres === genres;
    }
  });
};

  const filteredMovies = filterMovies(showFavorites, selectedGenre);

  return (
    <div className="App">
      <Header
        genres={genres}
        selectedGenre={selectedGenre}
        onGenreChange={setSelectedGenre}
        showFavorites={showFavorites}
        onShowFavorites={setShowFavorites}
      />
      <div className="movie-list-container">
        <MovieList
          movies={filteredMovies}
          onToggleFavorite={toggleFavorite}
          favoriteMovies={favoriteMovies}
        />
      </div>
      <Footer />
    </div>
  );
}

export default App;