import { useEffect, useState } from 'react';
import Navbar from './components/Navbar';
import MoviesSearchList from './components/MoviesSearchList';
import MoviesWatchList from './components/MoviesWatchList';
// import { tempMovieData } from './temp_data';
import Main from './components/Main';

const KEY = '721c3a22';

export default function App() {
  const [movies, setMovies] = useState([]);
  const query = 'hera pheri';

  useEffect(() => {
    async function fetchMovies() {
      const res = await fetch(`http://www.omdbapi.com/?apikey=${KEY}&s=${query}`);
      const data = await res.json();
      setMovies(data.Search);
    }

    fetchMovies();
  }, []);

  return (
    <>
      <Navbar movies={movies} />

      <Main>
        <MoviesSearchList movies={movies} />
        <MoviesWatchList />
      </Main>
    </>
  );
}
