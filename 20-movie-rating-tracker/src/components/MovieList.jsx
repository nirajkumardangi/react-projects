import MovieItem from './MovieItem';

function MovieList({ movies, onRate, onEdit, onDelete, onWatch }) {
  const totalMovies = movies.length;

  return (
    <section className='mb-8'>
      <h2 className='text-2xl font-bold text-gray-800 mb-4'>
        📝 Movies to Watch ({totalMovies})
      </h2>

      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'>
        {/* Movie Card */}
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

export default MovieList;
