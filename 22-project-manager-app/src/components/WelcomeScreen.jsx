import { Folder, Plus } from 'lucide-react';
import Button from './Button';

function WelcomeScreen() {
  return (
    <div className='flex-1 flex items-center justify-center bg-gradient-to-br from-blue-50 to-purple-50'>
      <div className='text-center'>
        <Folder size={80} className='mx-auto mb-4 text-blue-600' />
        <h1 className='text-4xl font-bold text-gray-800 mb-2'>
          No Project Selected
        </h1>
        <p className='text-gray-600 mb-6'>
          Select a project or create a new one to get started
        </p>
        <div className='flex item-center justify-center'>
          <Button variant='primary' icon={Plus}>
            Create New Project
          </Button>
        </div>
      </div>
    </div>
  );
}

export default WelcomeScreen;
