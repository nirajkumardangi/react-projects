import { useState } from 'react';
import AddProject from './components/AddProject';
import GlobalStats from './components/GlobalStats';
import Header from './components/Header';
import ProjectsList from './components/ProjectsList';
import SearchFilter from './components/SearchFilter';
import { INITIAL_PROJECTS } from './utils';

function App() {
  const [projects, setProjects] = useState(INITIAL_PROJECTS);

  return (
    <div className='app-container'>
      <Header />
      <GlobalStats projects={projects} />
      <SearchFilter />
      <AddProject projects={projects} setProjects={setProjects} />

      {projects.length === 0 ? (
        <div className='empty-state'>
          <p> No projects yet. Create one to get started! 🚀</p>
        </div>
      ) : (
        <ProjectsList projects={projects} setProjects={setProjects} />
      )}
    </div>
  );
}

export default App;
