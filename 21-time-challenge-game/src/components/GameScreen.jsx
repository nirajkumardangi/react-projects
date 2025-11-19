import { Target, Square } from 'lucide-react';

function GameScreen({ onStopTimer, targetTime }) {
  const radius = 112;
  const circumference = 2 * Math.PI * radius;

  return (
    <div className='space-y-8'>
      <div className='relative'>
        <div className='w-64 h-64 mx-auto'>
          <svg className='transform -rotate-90 w-64 h-64'>
            {/* Background circle */}
            <circle
              cx='128'
              cy='128'
              r={radius}
              stroke='#e5e7eb'
              strokeWidth='16'
              fill='none'
            />

            {/* Animated circle */}
            <circle
              cx='128'
              cy='128'
              r={radius}
              stroke='url(#gradient)'
              strokeWidth='16'
              fill='none'
              strokeDasharray={circumference}
              strokeDashoffset={0}
              strokeLinecap='round'
              style={{
                animation: `countdown ${targetTime}s linear forwards`,
              }}
            />

            <defs>
              <linearGradient id='gradient' x1='0%' y1='0%' x2='100%' y2='100%'>
                <stop offset='0%' stopColor='#8b5cf6' />
                <stop offset='100%' stopColor='#ec4899' />
              </linearGradient>
            </defs>
          </svg>

          {/* Center Text */}
          <div className='absolute inset-0 flex items-center justify-center flex-col'>
            <Target className='text-purple-600 mb-2' size={48} />
            <div className='text-gray-400 text-lg font-semibold'>
              Trust Your Timing
            </div>
          </div>
        </div>
      </div>

      {/* STOP Button */}
      <button
        onClick={onStopTimer}
        className='w-full py-6 bg-gradient-to-r from-red-500 to-rose-600 text-white font-bold text-2xl rounded-xl hover:from-red-600 hover:to-rose-700 transition transform hover:scale-105 shadow-lg disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-3 cursor-pointer'
      >
        <Square size={32} />
        STOP!
      </button>

      {/* Instructions */}
      <div className='text-center text-gray-500'>
        <p className='text-sm'>Press STOP when you think time is up!</p>
        <p className='text-xs mt-1'>Within ±0.5s = Perfect | ±1s = Good</p>
      </div>

      {/* CSS Animation */}
      <style>
        {`
          @keyframes countdown {
            from {
              stroke-dashoffset: 0;
            }
            to {
              stroke-dashoffset: ${circumference};
            }
          }
        `}
      </style>
    </div>
  );
}

export default GameScreen;
