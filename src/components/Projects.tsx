import ProjectCards from './ProjectCards';
import {useEffect, useState} from 'react';

interface ProjectObject {
  projectLink: string;
  imageLink: string;
  projectName: string;
}

const Projects = () => {

const [projects, setProjects] = useState<ProjectObject[]>([]);
useEffect(() => {
  const fetchProjects = async() =>{
      try{
        const resp = await fetch("https://vmdevserver.azurewebsites.net/api/vm/projects");
        if(!resp.ok){
          throw new Error("Error!");
        }
        var respData =  await resp.json();
        setProjects(respData);
      }
      catch(err){
          console.log(err);
      }
  };
  fetchProjects();
}, []);


  return (
    <div className="projects" id="projects">
      
    <h1>Projects</h1>
    
    <div className="project-container">
          {projects.map(({imageLink, projectLink, projectName}) => {
              return(
                  <ProjectCards imglink={imageLink} prname={projectName} prlink={projectLink} />
                );
          })}
     

    </div>

    </div>
  )
}

export default Projects
