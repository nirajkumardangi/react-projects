import MovieItem from './MovieItem';

function WatchedMovies({ movies, onRate, onEdit, onDelete, onWatch }) {
  const totalWatchedMovies = movies.length;

  return (
    <section className='mb-8'>
      <h2 className='text-2xl font-bold text-gray-800 mb-4'>
        ✅ Watched Movies ({totalWatchedMovies})
      </h2>

      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'>
        {movies.map((movie) => (
          <MovieItem
            key={movie.id}
            movie={movie}
            onRate={onRate}
            onEdit={onEdit}
            onDelete={onDelete}
            onWatch={onWatch}
          />
        ))}
      </div>
    </section>
  );
}

export default WatchedMovies;
