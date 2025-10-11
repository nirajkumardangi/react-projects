import { Filter, Circle, CheckCircle2 } from "lucide-react";

function FilterButton() {
  return (
    <div className='flex gap-3 mb-6 justify-center flex-wrap'>
      <button className='px-6 py-3 rounded-full font-semibold transition-all duration-200 transform hover:scale-105 flex items-center gap-2 bg-white text-purple-600 shadow-lg'>
        <Filter className='w-5 h-5' />
        All Tasks
      </button>
      <button className='px-6 py-3 rounded-full font-semibold transition-all duration-200 transform hover:scale-105 flex items-center gap-2 bg-white/20 text-white border-2 border-white/30 hover:bg-white/30'>
        <Circle className='w-5 h-5' />
        Pending
      </button>
      <button className='px-6 py-3 rounded-full font-semibold transition-all duration-200 transform hover:scale-105 flex items-center gap-2 bg-white/20 text-white border-2 border-white/30 hover:bg-white/30'>
        <CheckCircle2 className='w-5 h-5' />
        Completed
      </button>
    </div>
  );
}

export default FilterButton