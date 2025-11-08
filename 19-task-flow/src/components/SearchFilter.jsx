import { Search, Filter } from 'lucide-react';

function SearchFilter() {
  return (
    <section className='card card-padding'>
      <div className='search-filter-container'>
        <div className='search-box'>
          <Search size={20} className='search-icon' />
          <input type='text' placeholder='Search tasks...' />
        </div>

        <div className='filter-group'>
          <Filter size={25} className='filter-icon' />
          <select>
            <option value=''>All Priorities</option>
            <option value='completed'>High</option>
            <option value='pending'>Medium</option>
            <option value='high'>Low</option>
          </select>
        </div>
      </div>
    </section>
  );
}

export default SearchFilter;
