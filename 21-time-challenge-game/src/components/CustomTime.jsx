import { Play } from 'lucide-react';
import { useState } from 'react';

function CustomTime({ onStartTimer }) {
  const [customTime, setCustomTime] = useState('');

  function handleStart() {
    onStartTimer(Number(customTime));
  }

  return (
    <div className='pt-4 border-t-2 border-gray-200'>
      <label className='block text-gray-700 font-semibold mb-3'>
        Custom Duration (1-120s)
      </label>

      <div className='flex gap-3'>
        <input
          type='number'
          min='1'
          max='120'
          value={customTime}
          onChange={(e) => setCustomTime(e.target.value)}
          className='flex-1 px-4 py-3 border-2 border-gray-300 rounded-xl
                     focus:outline-none focus:ring-2 focus:ring-purple-500
                     focus:border-transparent text-lg'
          placeholder='Enter seconds'
        />

        <button
          onClick={handleStart}
          disabled={!customTime || customTime < 1 || customTime > 120}
          className='px-6 py-3 bg-gradient-to-r from-green-500 to-emerald-600
                     text-white font-bold rounded-xl hover:from-green-600
                     hover:to-emerald-700 transition flex items-center gap-2
                     cursor-pointer disabled:bg-gray-400 disabled:cursor-not-allowed
                     disabled:opacity-60'
        >
          <Play size={20} />
          Start
        </button>
      </div>
    </div>
  );
}

export default CustomTime;
