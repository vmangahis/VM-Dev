import { ProjectTypes } from '../types/PortfolioTypes';
import ProjectCards from './ProjectCards';
import { useEffect, useState } from 'react';

const Projects = () => {
  const [projects, setProjects] = useState<ProjectTypes[]>([]);
  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const resp = await fetch(
          `${import.meta.env.VITE_API_URL}api/vm/projects`
        );
        if (!resp.ok) {
          throw new Error('Error!');
        }
        var respData = await resp.json();
        setProjects(respData);
      } catch (err) {
        console.log(err);
      }
    };
    fetchProjects();
  }, []);

  return (
    <div className="projects" id="projects">
      <h1>Projects</h1>
      <div className="project-container">
        {projects.map(({ imageLink, projectLink, projectName }) => {
          return (
            <ProjectCards
              key={projectName}
              imglink={imageLink}
              prname={projectName}
              prlink={projectLink}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Projects;
