import ProjectCard from './ProjectCard';

function ProjectsList({
  projects,
  allProjects,
  setAllProjects,
  setVisibleProjects,
}) {
  return (
    <>
      {projects.map((project) => (
        <ProjectCard
          key={project.id}
          projects={allProjects}
          setProjects={(updated) => {
            setAllProjects(updated);
            setVisibleProjects(updated);
          }}
          {...project}
        />
      ))}
    </>
  );
}

export default ProjectsList;
