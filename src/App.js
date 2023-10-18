import React, { useState } from "react";
import "./App.css";
import "./css/Movie.css";
import MovieList from "./components/MovieList";
import Header from "./components/Header";
import { movies, genres } from "./data/moviesJson";
import Footer from "./components/Footer";

function App() {
  // declara os estados
  const [selectedGenre, setSelectedGenre] = useState("All genres");
  const [showFavorites, setShowFavorites] = useState(false);
  const [favoriteMovies, setFavoriteMovies] = useState(() => {
    const favorites = JSON.parse(localStorage.getItem("favorites")) || [];
    return favorites;
  });

  // Função para adicionar aos favoritos
  const toggleFavorite = (movieId) => {
    const updatedFavorites = [...favoriteMovies];
    const index = updatedFavorites.indexOf(movieId);
    if (index !== -1) {
      // Se o filme já é um favorito, remova-o da lista de favoritos
      updatedFavorites.splice(index, 1);
    } else {
      // Se o filme não é um favorito, adicione-o à lista
      updatedFavorites.push(movieId);
    }
    setFavoriteMovies(updatedFavorites);
    // Salve os favoritos no localStorage
    localStorage.setItem("favorites", JSON.stringify(updatedFavorites));
  };


  const filterMovies = (showFavorites, genre) => {
    if (showFavorites) {
      // Mostra os filmes dos favoritos
      return movies.filter((movie) => favoriteMovies.includes(movie.id));
    } else if (genre === "All genres") {
      // Mostra os filmes todos
      return movies;
    } else {
      // Mostra os filmes por genero
      return movies.filter((movie) => movie.genres === genre);
    }
  };

  // Filtragem inicial de filmes
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
