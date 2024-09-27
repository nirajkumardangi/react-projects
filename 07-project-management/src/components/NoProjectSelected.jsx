import Button from './Button';
import bookImage from '../assets/no-projects.png';

export default function NoProjectSelected({ onStartAddProject }) {
  return (
    <div className='mt-24 text-center w-2/3'>
      <img
        src={bookImage}
        alt='An empty task list'
        className='w-16 h-16 object-contain mx-auto'
      />
      <h2 className='text-xl font-bold text-stone-500 my-4'>
        No Project Selected
      </h2>
      <p className='text-stone-400 mb-4'>
        Select a project or get started with a new one
      </p>
      <p className='mt-8'>
        <Button onClick={onStartAddProject} btnName='Create new project' />
      </p>
    </div>
  );
}
