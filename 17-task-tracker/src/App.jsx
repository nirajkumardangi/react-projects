import './App.css';
import AddTaskInput from './components/AddTaskInput';
import FilterButton from './components/FilterButton';
import Footer from './components/Footer';
import Header from './components/Header';
import StatsCard from './components/StatsCard';
import TasksList from './components/TasksList';

import { useState } from 'react';

function App() {
  const TASKS = [
    { id: 1, text: 'Learn React', completed: true },
    { id: 2, text: 'Build a project', completed: false },
    { id: 3, text: 'Deploy Online', completed: false },
    { id: 4, text: 'Testing the app', completed: true },
    { id: 5, text: 'Maintain app', completed: false },
  ];

  const [tasks, setTasks] = useState(TASKS);

  return (
    <>
      <div className='min-h-screen bg-gradient-to-br from-purple-600 via-pink-500 to-orange-400 p-4 md:p-8'>
        <div className='max-w-3xl mx-auto'>
          <Header />
          <StatsCard tasks={tasks} />
          <AddTaskInput tasks={tasks} setTasks={setTasks} />
          <FilterButton />
          <TasksList tasks={tasks} />
          <Footer tasks = {tasks} />
        </div>
      </div>
    </>
  );
}

export default App;
