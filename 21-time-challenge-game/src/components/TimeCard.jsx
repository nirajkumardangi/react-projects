import { Timer } from 'lucide-react';

function TimeCard({ duration, onStartTimer }) {
  return (
    <button
      onClick={() => onStartTimer(duration)}
      className='bg-gradient-to-br from-purple-500 to-indigo-600 text-white font-bold py-6 rounded-xl hover:from-purple-600 hover:to-indigo-700 transition transform hover:scale-105 shadow-lg cursor-pointer'
    >
      <Timer className='mx-auto mb-2' size={32} />
      <div className='text-3xl'>{duration}s</div>
    </button>
  );
}

export default TimeCard;
