import { useState } from 'react';
import Navbar from './components/Navbar';
import MoviesSearchList from './components/MoviesSearchList';
import MoviesWatchList from './components/MoviesWatchList';
import { tempMovieData } from './temp_data';
import Main from './components/Main';

const KEY = '721c3a22';

export default function App() {
  const [movies, setMovies] = useState(tempMovieData);

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
