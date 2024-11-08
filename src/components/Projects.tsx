import ProjectCards from './ProjectCards';
import { useState, useEffect } from 'react';
import React from "react";

const Projects = () => {

const proj = [{imglink : 'https://res.cloudinary.com/dg1bym3ax/image/upload/v1730954820/vmdev/apt_jd51xf.png', prjname: 'Apartment Rental Management SystemApartment Rental Management System', prjlink: 'https://github.com/vmangahis/apartment-rental-system'},
    {imglink : 'https://res.cloudinary.com/dg1bym3ax/image/upload/v1730954839/vmdev/kai_gb2jzi.png', prjname: 'Kai', prjlink: 'https://github.com/vmangahis/Kai'},
    {imglink : 'https://res.cloudinary.com/dg1bym3ax/image/upload/v1730954822/vmdev/beowulf_tfac0o.png', prjname: 'Beowulf', prjlink: 'https://github.com/vmangahis/beowulf'},
    {imglink : 'https://res.cloudinary.com/dg1bym3ax/image/upload/v1730954820/vmdev/fcc_bi4o7r.png', prjname: 'Four Color Conjecture Game', prjlink: 'https://github.com/vmangahis/Four-Color-Conjecture-Game'}
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
