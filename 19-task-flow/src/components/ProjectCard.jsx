import { Trash2 } from 'lucide-react';
import ProgressBar from './ProgressBar';
import AddTask from './AddTask';
import TaskItem from './TaskItem';

function ProjectCard({ id, name, tasks, projects, setProjects }) {
  const totalTasks = tasks.length;
  const completedTasks = tasks.filter((task) => task.completed).length;

  function handleDeleteProject() {
    const updated = projects.filter((project) => project.id !== id);
    setProjects(updated);
  }

  return (
    <section className='card card-section'>
      <div className='project-grid'>
        {/* Project Header */}
        <div className='project-header'>
          <div className='project-title'>
            <h3>{name}</h3>
            <p className='project-subtitle'>
              {completedTasks} of {totalTasks} tasks completed
            </p>
          </div>

          <div>
            <Trash2
              className='btn-icon'
              size={40}
              onClick={handleDeleteProject}
            />
          </div>
        </div>

        {/* Progress Bar */}
        <ProgressBar completed={completedTasks} total={totalTasks} />

        {/* Add Task Section */}
        <AddTask id={id} projects={projects} setProjects={setProjects} />

        {/* Tasks List */}
        <div className='tasks-list'>
          {tasks.length === 0 ? (
            <p className='empty-state tasks-empty'>No tasks found</p>
          ) : (
            tasks.map((task) => (
              <TaskItem
                key={task.id}
                projectId={id}
                projects={projects}
                setProjects={setProjects}
                {...task}
              />
            ))
          )}
        </div>
      </div>
    </section>
  );
}

export default ProjectCard;
