import { useEffect, useState } from 'react';
import Navbar from './components/Navbar';
import WatchedSummary from './components/WatchedSummary';
import WatchedMoviesList from './components/WatchedMoviesList';
import MoviesList from './components/MoviesList';
import Loader from './components/Loader';
import Main from './components/Main';
import Box from './components/Box';
import Search from './components/Search';
import NumResults from './components/NumResult';
import ErrorMessage from './components/ErrorMessage';

const KEY = '721c3a22';

export default function App() {
  const [movies, setMovies] = useState([]);
  const [watched, setWatched] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');
  const query = 'arjuna';

  useEffect(() => {
    async function fetchMovies() {
      try {
        setError('');
        setIsLoading(true);

        const res = await fetch(
          `http://www.omdbapi.com/?apikey=${KEY}&s=${query}`
        );

        if (!res.ok) {
          throw new Error('Something went wrong with fetching movies');
        }

        const data = await res.json();

        if (!data.Search) {
          throw new Error('Movie not found');
        }

        setMovies(data.Search);
      } catch (err) {
        setError(err.message);
      } finally {
        setIsLoading(false);
      }
    }

    fetchMovies();
  }, []);

  return (
    <>
      <Navbar>
        <Search />
        <NumResults movies={movies} />
      </Navbar>

      <Main>
        <Box>
          {/* {isLoading ? <Loader /> : <MoviesList movies={movies} />} */}
          {isLoading && <Loader />}
          {!isLoading && !error && <MoviesList movies={movies} />}
          {error && <ErrorMessage message={error} />}
        </Box>

        <Box>
          <WatchedMoviesList watched={watched} />
          <WatchedSummary watched={watched} />
        </Box>
      </Main>
    </>
  );
}
