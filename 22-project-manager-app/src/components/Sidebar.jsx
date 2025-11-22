import { Folder, Plus } from 'lucide-react';

import Button from './Button';

function Sidebar({ projects }) {
  return (
    <aside className='w-80 bg-linear-to-b from-gray-800 to-gray-900 text-white p-6 flex flex-col'>
      <div className='mb-8'>
        <h2 className='text-2xl font-bold mb-2'>📁 My Projects</h2>
        <p className='text-gray-400 text-sm'>
          Manage your projects efficiently
        </p>
      </div>

      <Button variant='success' icon={Plus}>
        New Project
      </Button>

      <div className='flex-1 overflow-y-auto space-y-2 mt-6'>
        {projects.map((project) => (
          <div
            key={project.id}
            className='p-3 rounded-lg cursor-pointer transition flex items-center gap-3 bg-gray-700 hover:bg-gray-600'
          >
            <Folder size={20} />
            <div className='flex-1 min-w-0'>
              <h3 className='font-semibold truncate'>{project.title}</h3>
              <p className='text-xs opacity-75'>{project.tasks.length} tasks</p>
            </div>
          </div>
        ))}
      </div>
    </aside>
  );
}

export default Sidebar;
