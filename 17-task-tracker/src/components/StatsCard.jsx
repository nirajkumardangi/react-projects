import { Circle } from 'lucide-react';

function StatsCard({ tasks }) {
  let pendingTask = tasks.filter((item) => !item.completed).length;

  return (
    <div className='bg-white/20 backdrop-blur-lg rounded-3xl p-6 mb-6 border border-white/30 shadow-2xl'>
      <div className='flex items-center justify-between'>
        <div>
          <p className='text-white/80 text-sm font-medium'>Pending Tasks</p>
          <p className='text-5xl font-bold text-white mt-1'>{pendingTask}</p>
        </div>
        <div className='bg-white/20 p-4 rounded-full'>
          <Circle className='w-12 h-12 text-white' />
        </div>
      </div>
    </div>
  );
}

export default StatsCard;
