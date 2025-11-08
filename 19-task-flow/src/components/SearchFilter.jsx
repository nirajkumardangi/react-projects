import { useState } from 'react';
import { Search, Filter } from 'lucide-react';

function SearchFilter({ allProjects, setVisibleProjects }) {
  const [searchTerm, setSearchTerm] = useState('');
  const [priority, setPriority] = useState('');

  function handleSearchChange(e) {
    const value = e.target.value.toLowerCase();
    setSearchTerm(value);
    applyFilters(value, priority);
  }

  function handlePriorityChange(e) {
    const value = e.target.value;
    setPriority(value);
    applyFilters(searchTerm, value);
  }

  function applyFilters(searchValue, priorityValue) {
    // No filtering → show all originals
    if (!searchValue && !priorityValue) {
      setVisibleProjects(allProjects);
      return;
    }

    // Filter each project’s tasks
    const filtered = allProjects.map((project) => {
      const visibleTasks = project.tasks.filter((task) => {
        const matchesText = task.title.toLowerCase().includes(searchValue);
        const matchesPriority = priorityValue
          ? task.priority === priorityValue
          : true;
        return matchesText && matchesPriority;
      });

      return { ...project, tasks: visibleTasks };
    });

    const activeProjects = filtered.filter(
      (project) => project.tasks.length > 0
    );

    setVisibleProjects(activeProjects);
  }

  return (
    <section className='card card-padding'>
      <div className='search-filter-container'>
        <div className='search-box'>
          <Search size={20} className='search-icon' />
          <input
            type='text'
            placeholder='Search tasks...'
            value={searchTerm}
            onChange={handleSearchChange}
          />
        </div>

        <div className='filter-group'>
          <Filter size={25} className='filter-icon' />
          <select value={priority} onChange={handlePriorityChange}>
            <option value=''>All Priorities</option>
            <option value='high'>High</option>
            <option value='medium'>Medium</option>
            <option value='low'>Low</option>
          </select>
        </div>
      </div>
    </section>
  );
}

export default SearchFilter;
