import ProjectCard from './ProjectCard';

function ProjectsList({ projects, setProjects }) {
  return (
    <>
      {projects.map((project) => (
        <ProjectCard
          key={project.id}
          projects={projects}
          setProjects={setProjects}
          {...project}
        />
      ))}
    </>
  );
}

export default ProjectsList;
