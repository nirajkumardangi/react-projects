import { Trophy} from 'lucide-react';

function Instructions() {
  return (
    <div className='mt-6 bg-white bg-opacity-50 backdrop-blur rounded-2xl p-6'>
      <h3 className='font-bold text-gray-800 mb-3 flex items-center gap-2'>
        <Trophy className='text-yellow-500' />
        How to Win:
      </h3>
      <ul className='space-y-2 text-gray-700'>
        <li>
          • 🎯 <strong>Perfect!</strong> - Stop within ±0.5 seconds
        </li>
        <li>
          • 👍 <strong>Good</strong> - Stop within ±1 second
        </li>
        <li>
          • ❌ <strong>Try Again</strong> - Outside 1 second range
        </li>
      </ul>
    </div>
  );
}

export default Instructions;
