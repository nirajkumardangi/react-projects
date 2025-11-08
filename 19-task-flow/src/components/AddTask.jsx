import { Plus } from 'lucide-react';
import { useState } from 'react';

function AddTask({ id, projects, setProjects }) {
  const [inputTask, setInputTask] = useState('');
  const [priority, setPriority] = useState('medium');

  function handleInputChange(e) {
    setInputTask(e.target.value);
  }
  function handleSelectChange(e) {
    setPriority(e.target.value);
  }

  function handleAddTask() {
    let title = inputTask.trim();
    if (title === '') return;

    const newTask = {
      id: Date.now(),
      title,
      completed: false,
      priority,
    };

    const updatedProjects = projects.map((project) =>
      project.id === id
        ? { ...project, tasks: [...project.tasks, newTask] }
        : project
    );

    setProjects(updatedProjects);
    setInputTask('');
    setPriority('medium');
  }

  function handleKeyDown(e) {
    if (e.key === 'Enter') handleAddTask();
  }

  return (
    <div className='add-task-section'>
      <div className='form-group'>
        <input
          type='text'
          value={inputTask}
          placeholder='New task...'
          onChange={handleInputChange}
          onKeyDown={handleKeyDown}
        />
        <select id='priority' onChange={handleSelectChange} value={priority}>
          <option value='high'>High</option>
          <option value='medium'>Medium</option>
          <option value='low'>Low</option>
        </select>
      </div>
      <button className='btn btn-secondary btn-full' onClick={handleAddTask}>
        <Plus size={16} />
        Add Task
      </button>
    </div>
  );
}

export default AddTask;
