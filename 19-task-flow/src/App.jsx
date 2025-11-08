import { useState } from 'react';
import AddProject from './components/AddProject';
import GlobalStats from './components/GlobalStats';
import Header from './components/Header';
import ProjectsList from './components/ProjectsList';
import SearchFilter from './components/SearchFilter';
import { INITIAL_PROJECTS } from './utils';

function App() {
  const [allProjects, setAllProjects] = useState(INITIAL_PROJECTS);
  const [visibleProjects, setVisibleProjects] = useState(INITIAL_PROJECTS);

  return (
    <div className='app-container'>
      <Header />
      <GlobalStats projects={visibleProjects} />
      <SearchFilter
        allProjects={allProjects}
        setVisibleProjects={setVisibleProjects}
      />
      <AddProject
        projects={allProjects}
        setProjects={(newList) => {
          setAllProjects(newList);
          setVisibleProjects(newList);
        }}
      />

      {visibleProjects.length === 0 ? (
        <div className='empty-state'>
          <p> No projects yet. Create one to get started! 🚀</p>
        </div>
      ) : (
        <ProjectsList
          projects={visibleProjects}
          allProjects={allProjects}
          setAllProjects={setAllProjects}
          setVisibleProjects={setVisibleProjects}
        />
      )}
    </div>
  );
}

export default App;
