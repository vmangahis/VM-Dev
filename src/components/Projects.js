import React from 'react'
import apt from '../apt.jpg'
import kai from '../kai.PNG'

const Projects = () => {

  return (
    <div className="projects" id="projects">
    <h1>Projects</h1>

    <div className="project-container">

      <a href="https://github.com/vmangahis/apartment-rental-system" className='project-card' style={{ backgroundImage: `url(${apt})`}} onMouseEnter={(e) => {
        e.target.style.background = `linear-gradient(rgba(0,0,0,0.8), rgba(0,0,0,0.9)), url(${apt})`
      }}
      onMouseLeave={(e) =>{
        e.target.style.background = `linear-gradient(rgba(0,0,0,0), rgba(0,0,0,0)), url(${apt})`
      }}
      >
      <p className="project-name">Apartment Rental Management System</p>
      </a>


      <a href="https://github.com/vmangahis/Kai" className="project-card" style={{ backgroundImage: `url(${kai})`}}
      onMouseEnter={(e) => {
        e.target.style.background = `linear-gradient(rgba(0,0,0,0.8), rgba(0,0,0,0.9)), url(${kai})`
      }}
      onMouseLeave={(e) =>{
        e.target.style.background = `linear-gradient(rgba(0,0,0,0), rgba(0,0,0,0)), url(${kai})`
      }}
      >
      <p className="project-name">Kai</p>
      </a>

    </div>

    </div>
  )
}

export default Projects
