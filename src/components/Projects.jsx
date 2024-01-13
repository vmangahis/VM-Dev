import ProjectCards from './ProjectCards';
import { useState, useEffect } from 'react';
import { createClient } from '@supabase/supabase-js';
const Projects = () => {

  const [projects, setProjects] = useState([]);
  const cl =  createClient(import.meta.env.VITE_API_URL, import.meta.env.VITE_SPB_KEY);
  const getProjects = async (spbObj) => {
      const { data, error } = await spbObj
      .from('vm_projects')
      .select();
      return data;
  }

  useEffect(() =>{
      getProjects(cl)
      .then(pr => setProjects(pr));
  },[]);


  return (
    <div className="projects" id="projects">
      
    <h1>Projects</h1>
    
    <div className="project-container">
          {projects.map(({imglink, prjlink, prjname}) => {
              return(
                  <ProjectCards imglink={imglink} prname={prjname} prlink={prjlink} />
                );
          })}
     

    </div>

    </div>
  )
}

export default Projects
