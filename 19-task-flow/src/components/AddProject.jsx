import { Plus } from 'lucide-react';
import { useState } from 'react';

function AddProject({ projects, setProjects }) {
  const [inputValue, setInputValue] = useState('');

  function handleInputChange(e) {
    setInputValue(e.target.value);
  }

  function handleClick() {
    if (inputValue.trim() === '') return;

    const newProject = {
      id: Date.now(),
      name: inputValue,
      tasks: [],
    };

    setProjects([...projects, newProject]);
    setInputValue('');
  }

  function handleKeyDown(e) {
    if (e.key === 'Enter') handleClick();
  }

  return (
    <section className='card card-padding'>
      <h2 className='section-title'>Add New Project</h2>
      <div className='search-filter-container '>
        <input
          className='search-box'
          type='text'
          value={inputValue}
          placeholder='Project name...'
          onChange={handleInputChange}
        />
        <button
          className='btn btn-primary'
          onClick={handleClick}
          onKeyDown={handleKeyDown}
        >
          <Plus size={20} />
          Add project
        </button>
      </div>
    </section>
  );
}

export default AddProject;
