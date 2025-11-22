import { useState } from 'react';
import NewProject from './components/NewProject';
import Sidebar from './components/Sidebar';
import WelcomeScreen from './components/WelcomeScreen';

function App() {
  const [projects, setProjects] = useState([]);

  const [view, setView] = useState('new');

  return (
    <div className='h-screen flex bg-gray-100'>
      <Sidebar projects={projects} />

      {view === 'welcome' && <WelcomeScreen />}

      {view === 'new' && (
        <NewProject projects={projects} setProjects={setProjects} />
      )}
    </div>
  );
}

export default App;
