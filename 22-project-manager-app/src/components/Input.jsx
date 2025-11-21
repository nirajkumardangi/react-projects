function Input({ label, error, placeholder, type = 'text' }) {
  return (
    <div className='mb-4'>
      {label && (
        <label className='block text-sm font-semibold text-gray-700 mb-2'>
          {label}
        </label>
      )}
      <input
        type={type}
        placeholder={placeholder}
        className={`w-full px-4 py-2 border-2 rounded-lg focus:outline-none focus:ring-2 transition ${
          error
            ? 'border-red-500 focus:ring-red-500'
            : 'border-gray-300 focus:ring-blue-500 focus:border-blue-500'
        }`}
      />
      {error && <p className='text-red-500 text-sm mt-1'>{error}</p>}
    </div>
  );
}

export default Input;
