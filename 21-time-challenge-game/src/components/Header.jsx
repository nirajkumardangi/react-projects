import { Clock } from 'lucide-react';

function Header() {
  return (
    <div className='text-center mb-8'>
      <div className='flex justify-center mb-4'>
        <div className='bg-white p-4 rounded-full shadow-lg'>
          <Clock className='text-purple-600' size={48} />
        </div>
      </div>
      <h1 className='text-5xl font-bold text-gray-800 mb-2'>Time Challenge</h1>
      <p className='text-gray-600 text-lg'>
        Can you stop at the perfect moment?
      </p>
    </div>
  );
}

export default Header;
