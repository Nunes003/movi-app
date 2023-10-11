// Importações de módulos e estilos
import React, { useState, useEffect } from 'react';
import './App.css';
import MovieList from './components/MovieList';
import Header from './components/Header';
import { movies, genres } from './data/moviesJson';
import Footer from './components/Footer';

function App() {
  // Declaração de estados usando o Hook useState
  const [selectedGenre, setSelectedGenre] = useState('All genres');
  const [showFavorites, setShowFavorites] = useState(false);
  const [favoriteMovies, setFavoriteMovies] = useState([]);
  const [filteredMovies, setFilteredMovies] = useState([]);

  // Efeito para carregar favoritos do localStorage ao iniciar a aplicação
  useEffect(() => {
    const favorites = JSON.parse(localStorage.getItem('favorites')) || [];
    setFavoriteMovies(favorites);
  }, []);

  // Efeito para filtrar filmes com base no gênero selecionado e na alternância de favoritos
  useEffect(() => {
    if (showFavorites) {
      // Se a opção de favoritos está ativa, filtra os filmes favoritos
      const favorites = movies.filter((movie) => favoriteMovies.includes(movie.id));
      setFilteredMovies(favorites);
    } else if (selectedGenre === 'All genres') {
      // Se "All genres" está selecionado, mostra todos os filmes
      setFilteredMovies(movies);
    } else {
      // Filtra os filmes com base no gênero selecionado
      const filtered = movies.filter(movie => movie.genres === selectedGenre);
      setFilteredMovies(filtered);
    }
  }, [selectedGenre, showFavorites, favoriteMovies]);

  // Função para alternar filmes favoritos
  const toggleFavorite = (movieId) => {
    const index = favoriteMovies.indexOf(movieId);
    if (index !== -1) {
      // Se o filme já é um favorito, remova-o da lista de favoritos
      const updatedFavorites = [...favoriteMovies];
      updatedFavorites.splice(index, 1);
      setFavoriteMovies(updatedFavorites);
    } else {
      // Se o filme não é um favorito, adicione-o à lista de favoritos
      setFavoriteMovies([...favoriteMovies, movieId]);
    }
  
    // Atualize o localStorage após cada alteração
    localStorage.setItem('favorites', JSON.stringify(favoriteMovies));
  };
  

  // Efeito para salvar a lista de favoritos no localStorage sempre que houver alterações
  useEffect(() => {
    const favorites = JSON.parse(localStorage.getItem('favorites')) || [];
    setFavoriteMovies(favorites);
  }, []);
  

  return (
    <div className="App">
      <Header
        genres={genres}
        selectedGenre={selectedGenre}
        onGenreChange={setSelectedGenre}
        showFavorites={showFavorites}
        onShowFavorites={setShowFavorites}
      />
      <MovieList
        movies={filteredMovies}
        onToggleFavorite={toggleFavorite}
        favoriteMovies={favoriteMovies}
      />
      <Footer 
      />
    </div>
  );
  }
export default App;
