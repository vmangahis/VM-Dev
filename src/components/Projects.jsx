import ProjectCards from './ProjectCards';
import { useState, useEffect } from 'react';
const Projects = () => {

  const [projects, setProjects] = useState([]);
  const proj = [{imglink : '', prjname: 'Apartment Rental Management SystemApartment Rental Management System', prjlink: 'https://github.com/vmangahis/apartment-rental-system'},
    {imglink : '', prjname: 'Apartment Rental Management SystemApartment Rental Management System', prjlink: 'https://github.com/vmangahis/apartment-rental-system'},
    {imglink : '', prjname: 'Apartment Rental Management SystemApartment Rental Management System', prjlink: 'https://github.com/vmangahis/apartment-rental-system'},
    {imglink : '', prjname: 'Apartment Rental Management SystemApartment Rental Management System', prjlink: 'https://github.com/vmangahis/apartment-rental-system'}
  ];


  return (
    <div className="projects" id="projects">
      
    <h1>Projects</h1>
    
    <div className="project-container">
          {proj.map(({imglink, prjlink, prjname}) => {
              return(
                  <ProjectCards imglink={imglink} prname={prjname} prlink={prjlink} />
                );
          })}
     

    </div>

    </div>
  )
}

export default Projects
