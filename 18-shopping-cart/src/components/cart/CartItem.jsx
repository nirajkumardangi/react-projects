import { Trash2, Plus, Minus } from 'lucide-react';

function CartItem() {
  return (
    <div className='bg-white rounded-xl p-4 shadow-lg'>
      <div className='flex gap-3 mb-3'>
        <div className='w-16 h-16 bg-gradient-to-br from-blue-400 to-blue-600 rounded-lg flex items-center justify-center text-white text-2xl flex-shrink-0'>
          👟
        </div>
        <div className='flex-1 min-w-0'>
          <h3 className='font-bold text-gray-800 truncate'>Running Shoes</h3>
          <p className='text-indigo-600 font-semibold'>₹1,999</p>
        </div>
        <button className='text-red-500 hover:text-red-700 transition-colors flex-shrink-0'>
          <Trash2 className='w-5 h-5' />
        </button>
      </div>
      <div className='flex items-center justify-between'>
        <div className='flex items-center gap-2'>
          <button className='w-8 h-8 bg-gray-200 hover:bg-gray-300 rounded-lg flex items-center justify-center transition-colors'>
            <Minus className='w-4 h-4 text-gray-700' />
          </button>
          <span className='text-lg font-bold text-gray-800 w-8 text-center'>
            1
          </span>
          <button className='w-8 h-8 bg-indigo-600 hover:bg-indigo-700 rounded-lg flex items-center justify-center transition-colors'>
            <Plus className='w-4 h-4 text-white' />
          </button>
        </div>
        <span className='text-lg font-bold text-gray-800'>₹1,999</span>
      </div>
    </div>
  );
}

export default CartItem;
