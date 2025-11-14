import Header from './components/Header';
import MovieStats from './components/MovieStats';
import WatchedMovies from './components/WatchedMovies';
import MovieList from './components/MovieList';
import { MOVIES_DATA } from './utils/utils';
import { useState } from 'react';

function App() {
  const [movies, setMovies] = useState(
    MOVIES_DATA.map((m) => ({ ...m, movieRating: null, watched: false }))
  );

  // Derived state
  const unwatchedMovies = movies.filter((m) => !m.watched);
  const watchedMovies = movies.filter((m) => m.watched);

  function onRate(movieId, rating) {
    setMovies(
      movies.map((movie) =>
        movie.id === movieId ? { ...movie, movieRating: rating } : movie
      )
    );
  }

  function onEdit(movieId, newRating) {
    setMovies(
      movies.map((movie) =>
        movie.id === movieId ? { ...movie, movieRating: newRating } : movie
      )
    );
  }

  function onDelete(movieId) {
    setMovies(
      movies.map((movie) =>
        movie.id === movieId ? { ...movie, movieRating: null } : movie
      )
    );
  }

  function onWatch(movieId) {
    setMovies(
      movies.map((movie) =>
        movie.id === movieId ? { ...movie, watched: true } : movie
      )
    );
  }

  return (
    <div className='min-h-screen bg-linear-to-br from-gray-50 to-gray-100 p-4 md:p-8'>
      <div className='max-w-6xl mx-auto'>
        {/* Header */}
        <Header />

        {/* Statistics */}
        <MovieStats movies={movies} />

        {/* Unwatched Movies Section */}
        <MovieList
          movies={unwatchedMovies}
          onRate={onRate}
          onEdit={onEdit}
          onDelete={onDelete}
          onWatch={onWatch}
        />

        {/* No Movies Message */}
        {unwatchedMovies.length === 0 && (
          <div className='bg-white rounded-lg shadow-md p-8 text-center mb-8'>
            <p className='text-2xl text-gray-500 mb-2'>🎉 Congratulations!</p>
            <p className='text-gray-600'>You've watched all your movies!</p>
          </div>
        )}

        {/* Watched Movies Section */}
        {watchedMovies.length > 0 && (
          <WatchedMovies
            movies={watchedMovies}
            onEdit={onEdit}
            onDelete={onDelete}
            onWatch={onWatch}
          />
        )}
      </div>
    </div>
  );
}

export default App;
