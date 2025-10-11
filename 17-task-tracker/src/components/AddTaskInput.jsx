import { Plus } from 'lucide-react';
import { useState } from 'react';

function AddTaskInput({ tasks, setTasks }) {
  const [newTask, setNewTask] = useState('');

  // handle input change
  function handleChange(e) {
    setNewTask(e.target.value);
  }

  function handleKeyDown(e) {
    if (e.key === 'Enter') handleClick();
  }

  // handle add button click
  function handleClick() {
    if (!newTask.trim()) return; // prevent empty tasks

    const newTaskObj = {
      id: Date.now(),
      text: newTask,
      completed: false,
    };

    // update tasks list
    setTasks([...tasks, newTaskObj]);

    // clear input field
    setNewTask('');
  }

  return (
    <div className='bg-white rounded-3xl shadow-2xl p-4 mb-6 border-2 border-purple-200'>
      <div className='flex gap-3'>
        <input
          value={newTask}
          onChange={handleChange}
          onKeyDown={handleKeyDown}
          type='text'
          placeholder='Add a new task...'
          className='flex-1 px-6 py-4 text-lg rounded-2xl bg-gradient-to-r from-purple-50 to-pink-50 border-2 border-purple-200 focus:border-purple-400 focus:outline-none transition-all'
        />
        <button
          onClick={handleClick}
          className='bg-gradient-to-r from-purple-600 to-pink-600 text-white px-8 py-4 rounded-2xl font-semibold hover:from-purple-700 hover:to-pink-700 transform hover:scale-105 transition-all duration-200 shadow-lg flex items-center gap-2 cursor-pointer'
        >
          <Plus className='w-6 h-6' />
          Add
        </button>
      </div>
    </div>
  );
}

export default AddTaskInput;
