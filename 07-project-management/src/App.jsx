import { useState } from 'react';
import NewProject from './components/NewProject';
import NoProjectSelected from './components/NoProjectSelected';
import Sidebar from './components/Sidebar';
import SelectedProject from './components/SelectedProject';

function App() {
  const [projectState, setProjectState] = useState({
    selectedProjectID: undefined,
    projects: [],
    tasks: [],
  });

  function handleAddTask(text) {
    setProjectState((prevState) => {
      const taskId = Date.now();
      const newTask = {
        text: text,
        projectId: prevState.selectedProjectID,
        id: taskId,
      };

      return {
        ...prevState,
        tasks: [...prevState.tasks, newTask],
      };
    });
  }

  function handleDeleteTask(id) {
    setProjectState((prevState) => {
      return {
        ...prevState,
        tasks: prevState.tasks.filter((task) => task.id !== id),
      };
    });
  }

  function handleSelectProject(id) {
    setProjectState((prevState) => {
      return {
        ...prevState,
        selectedProjectID: id,
      };
    });
  }

  function handleAddProject(projectData) {
    setProjectState((prevState) => {
      const projectID = Date.now();
      const newProject = {
        ...projectData,
        id: projectID,
      };

      return {
        ...prevState,
        selectedProjectID: undefined,
        projects: [...prevState.projects, newProject],
      };
    });
  }

  function handleCancelAddProject() {
    setProjectState((prevState) => {
      return {
        ...prevState,
        selectedProjectID: undefined,
      };
    });
  }

  function handleStartAddProject() {
    setProjectState((prevState) => {
      return {
        ...prevState,
        selectedProjectID: null,
      };
    });
  }

  function handleDeleteProject() {
    setProjectState((prevState) => {
      return {
        ...prevState,
        selectedProjectID: undefined,
        projects: prevState.projects.filter(
          (project) => project.id !== prevState.selectedProjectID
        ),
      };
    });
  }

  const selectedProject = projectState.projects.find(
    (project) => project.id === projectState.selectedProjectID
  );

  let content = (
    <SelectedProject
      project={selectedProject}
      onDelete={handleDeleteProject}
      onAddTask={handleAddTask}
      onDeleteTask={handleDeleteTask}
      tasks={projectState.tasks}
    />
  );

  if (projectState.selectedProjectID === null) {
    content = (
      <NewProject onCancel={handleCancelAddProject} onAdd={handleAddProject} />
    );
  } else if (projectState.selectedProjectID === undefined) {
    content = <NoProjectSelected onStartAddProject={handleStartAddProject} />;
  }

  return (
    <main className='h-screen flex gap-8'>
      <Sidebar
        onStartAddProject={handleStartAddProject}
        projects={projectState.projects}
        onSelectProject={handleSelectProject}
        selectedProjectId={projectState.selectedProjectID}
      />
      {content}
    </main>
  );
}

export default App;
