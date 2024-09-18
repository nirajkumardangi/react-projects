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

const KEY = '721c3a22';

export default function App() {
  const [movies, setMovies] = useState([]);
  const [watched, setWatched] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const query = 'hera pheri';

  useEffect(() => {
    async function fetchMovies() {
      setIsLoading(true);

      const res = await fetch(
        `http://www.omdbapi.com/?apikey=${KEY}&s=${query}`
      );
      const data = await res.json();
      setMovies(data.Search);

      setIsLoading(false);
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
        <Box>{isLoading ? <Loader /> : <MoviesList movies={movies} />}</Box>
        <Box>
          <WatchedMoviesList watched={watched} />
          <WatchedSummary watched={watched} />
        </Box>
      </Main>
    </>
  );
}
