import { Star, Trash2, Edit2, Check, X } from 'lucide-react';
import { useState } from 'react';

function MovieItem({ onRate, onEdit, onDelete, onWatch, movie }) {
  const [rating, setRating] = useState('');
  const [isEditing, setIsEditing] = useState(false);
  const [editRating, setEditRating] = useState('');

  function handleRatingChange(e) {
    const value = e.target.value;
    if (value === '' || (Number(value) >= 0 && Number(value) <= 10)) {
      setRating(value);
    }
  }

  function handleSubmitRating() {
    if (rating) {
      onRate(movie.id, Number(rating));
      setRating('');
    }
  }

  function handleStartEdit() {
    setEditRating(movie.movieRating?.toString() || '');
    setIsEditing(true);
  }

  function handleEditRatingChange(e) {
    const value = e.target.value;
    if (value === '' || (Number(value) >= 0 && Number(value) <= 10)) {
      setEditRating(value);
    }
  }

  function handleSaveEdit() {
    if (editRating) {
      onEdit(movie.id, Number(editRating));
      setIsEditing(false);
    }
  }

  function handleCancelEdit() {
    setIsEditing(false);
    setEditRating('');
  }

  return (
    <div
      className={`bg-white rounded-lg shadow-md p-4 border-2 transition-all ${
        movie.watched ? 'border-green-400 bg-green-50' : 'border-gray-200'
      }`}
    >
      <div className='flex justify-between items-start mb-2'>
        <div className='flex-1'>
          <h3 className='text-lg font-bold text-gray-800'>{movie.title}</h3>
          <p className='text-sm text-gray-600'>
            {movie.year} • {movie.genre}
          </p>
        </div>

        {movie.watched && (
          <span className='bg-green-500 text-white text-xs px-2 py-1 rounded-full font-semibold'>
            Watched
          </span>
        )}
      </div>

      {/* Rating Display */}
      {!isEditing && movie.movieRating && (
        <div className='flex items-center gap-2 mb-3 bg-yellow-50 p-2 rounded'>
          <Star className='text-yellow-500 fill-yellow-500' size={20} />
          <span className='font-bold text-lg text-gray-800'>
            {movie.movieRating}/10
          </span>
          <div className='ml-auto flex gap-1'>
            <button
              onClick={handleStartEdit}
              className='p-1 hover:bg-yellow-100 rounded transition cursor-pointer'
            >
              <Edit2 size={16} className='text-gray-600' />
            </button>
            <button
              onClick={() => onDelete(movie.id)}
              className='p-1 hover:bg-red-100 rounded transition cursor-pointer'
            >
              <Trash2 size={16} className='text-red-600' />
            </button>
          </div>
        </div>
      )}

      {/* Edit Rating Interface */}
      {isEditing && (
        <div className='mb-3 bg-blue-50 p-3 rounded'>
          <div className='flex gap-2 items-center'>
            <input
              type='number'
              min='0'
              max='10'
              step='0.1'
              value={editRating}
              onChange={handleEditRatingChange}
              className='flex-1 px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500'
              placeholder='New rating (0-10)'
            />
            <button
              onClick={handleSaveEdit}
              disabled={!editRating}
              className='p-2 bg-green-500 text-white rounded hover:bg-green-600 transition cursor-pointer disabled:bg-gray-300 disabled:cursor-not-allowed'
            >
              <Check size={18} />
            </button>
            <button
              onClick={handleCancelEdit}
              className='p-2 bg-gray-500 text-white rounded hover:bg-gray-600 transition cursor-pointer'
            >
              <X size={18} />
            </button>
          </div>
        </div>
      )}

      {/* Rating Input */}
      {!movie.movieRating && !movie.watched && (
        <div className='flex gap-2 mb-2'>
          <input
            type='number'
            min='0'
            max='10'
            step='0.1'
            value={rating}
            onChange={handleRatingChange}
            className='flex-1 px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500'
            placeholder='Rating (0-10)'
          />
          <button
            onClick={handleSubmitRating}
            disabled={!rating}
            className='px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition disabled:bg-gray-300 disabled:cursor-not-allowed'
          >
            Rate
          </button>
        </div>
      )}

      {/* Mark as Watched Button */}
      {movie.movieRating && !movie.watched && (
        <button
          onClick={() => onWatch(movie.id)}
          className='w-full py-2 bg-green-500 text-white rounded hover:bg-green-600 transition font-semibold cursor-pointer'
        >
          Mark as Watched
        </button>
      )}
    </div>
  );
}

export default MovieItem;
