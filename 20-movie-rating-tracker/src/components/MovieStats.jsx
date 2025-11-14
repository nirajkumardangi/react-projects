import { Star } from 'lucide-react';

function MovieStats({ movies }) {
  const totalMovies = movies.length;
  const watchedMovies = movies.filter((m) => m.watched).length;
  const ratedMovies = movies.filter((movie) => movie.movieRating).length;

  const avgRating =
    ratedMovies > 0
      ? (
          movies.reduce((sum, m) => sum + (m.movieRating || 0), 0) / ratedMovies
        ).toFixed(1)
      : 0;

  const watchedPercentage =
    totalMovies > 0 ? Math.round((watchedMovies / totalMovies) * 100) : 0;

  const ratedPercentage =
    totalMovies > 0 ? Math.round((ratedMovies / totalMovies) * 100) : 0;

  return (
    <div className='bg-linear-to-r from-purple-600 to-indigo-700 text-white rounded-2xl shadow-xl p-8 mb-8'>
      <h2 className='text-3xl font-bold mb-6 text-center'>
        📊 Your Movie Stats
      </h2>

      <div className='grid grid-cols-2 md:grid-cols-4 gap-6'>
        <div className='bg-white/15 rounded-xl p-4 text-center backdrop-blur-sm hover:bg-white/25 transition'>
          <p className='text-sm opacity-90'>Total Movies</p>
          <p className='text-3xl font-extrabold'>{totalMovies}</p>
        </div>

        <div className='bg-white/15 rounded-xl p-4 text-center backdrop-blur-sm hover:bg-white/25 transition'>
          <p className='text-sm opacity-90'>Watched</p>
          <p className='text-3xl font-extrabold'>{watchedMovies}</p>
          <p className='text-xs opacity-75 mt-1'>
            {watchedPercentage}% of total
          </p>
        </div>

        <div className='bg-white/15 rounded-xl p-4 text-center backdrop-blur-sm hover:bg-white/25 transition'>
          <p className='text-sm opacity-90'>Rated</p>
          <p className='text-3xl font-extrabold'>{ratedMovies}</p>
          <p className='text-xs opacity-75 mt-1'>{ratedPercentage}% of total</p>
        </div>

        <div className='bg-white/15 rounded-xl p-4 text-center backdrop-blur-sm hover:bg-white/25 transition'>
          <p className='text-sm opacity-90'>Avg Rating</p>
          <div className='flex items-center justify-center gap-1 text-3xl font-extrabold'>
            <Star className='fill-yellow-400 text-yellow-400' size={22} />
            {avgRating}
          </div>
        </div>
      </div>
    </div>
  );
}

export default MovieStats;
