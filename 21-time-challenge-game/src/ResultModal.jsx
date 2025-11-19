function ResultModal() {
  return (
    <div className='fixed inset-0 bg-black bg-opacity-60 flex items-center justify-center z-50 p-4'>
      <div className='bg-white rounded-2xl shadow-2xl max-w-md w-full p-8'>
        <div className='bg-gradient-to-r from-green-500 to-emerald-600 text-white rounded-xl p-6 mb-6 text-center'>
          <div className='text-6xl mb-2'>🎯</div>
          <h2 className='text-3xl font-bold mb-2'>Perfect!</h2>
          <p className='text-lg opacity-90'>0.23s early</p>
        </div>

        <div className='space-y-3 mb-6'>
          <div className='flex justify-between items-center bg-gray-50 p-3 rounded-lg'>
            <span className='text-gray-600 font-medium'>Target Time:</span>
            <span className='font-bold text-lg'>10s</span>
          </div>
          <div className='flex justify-between items-center bg-gray-50 p-3 rounded-lg'>
            <span className='text-gray-600 font-medium'>Your Accuracy:</span>
            <span className='font-bold text-lg text-purple-600'>97.7%</span>
          </div>
        </div>

        <button className='w-full py-3 bg-gradient-to-r from-purple-600 to-indigo-600 text-white font-bold rounded-lg hover:from-purple-700 hover:to-indigo-700 transition transform hover:scale-105'>
          Play Again
        </button>
      </div>
    </div>
  );
}

export default ResultModal;
