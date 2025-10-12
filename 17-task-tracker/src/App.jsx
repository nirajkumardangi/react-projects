import { useState } from 'react';

import './styles/App.css';
import AddTaskInput from './components/tasks/AddTaskInput';
import FilterButtons from './components/common/FilterButtons';
import Footer from './components/layout/Footer';
import Header from './components/layout/Header';
import StatsCard from './components/tasks/StatsCard';
import TasksList from './components/tasks/TasksList';

import { TASKS } from './utils/utils';

function App() {
  const [tasks, setTasks] = useState(TASKS);
  const [filter, setFilter] = useState('all');

  const filteredTasks = tasks.filter((task) => {
    if (filter === 'all') return true;
    if (filter === 'pending') return !task.completed;
    if (filter === 'completed') return task.completed;
  });

  return (
    <>
      <div className='min-h-screen bg-gradient-to-br from-purple-600 via-pink-500 to-orange-400 p-4 md:p-8'>
        <div className='max-w-3xl mx-auto'>
          <Header />
          <StatsCard tasks={tasks} />
          <AddTaskInput tasks={tasks} setTasks={setTasks} />
          <FilterButtons activeFilter={filter} setActiveFilter={setFilter} />
          <TasksList tasks={filteredTasks} allTasks={tasks} setTasks={setTasks} />
          <Footer tasks={tasks} />
        </div>
      </div>
    </>
  );
}

export default App;
