import React from 'react'


const Projects = () => {

  return (
    <div className="projects" id="projects">
    <h1>Projects</h1>

    <div className="project-container">

      <a href="https://github.com/vmangahis/apartment-rental-system" className='project-card' style={{ backgroundImage: 'url(https://firebasestorage.googleapis.com/v0/b/vm-dev-fa2be.appspot.com/o/apt.jpg?alt=media&token=3be48125-394f-48b1-8db1-bec6de962a21)', backgroundRepeat: 'no-repeat', backgroundSize: 'cover'}} onMouseEnter={(e) => {
        e.target.style.background = `linear-gradient(rgba(0,0,0,0.8), rgba(0,0,0,0.9)), url(https://firebasestorage.googleapis.com/v0/b/vm-dev-fa2be.appspot.com/o/apt.jpg?alt=media&token=3be48125-394f-48b1-8db1-bec6de962a21) no-repeat`
        e.target.style.backgroundRepeat =  'no-repeat';
        e.target.style.backgroundSize = 'cover';
      }}
      onMouseLeave={(e) =>{
        e.target.style.background = `linear-gradient(rgba(0,0,0,0), rgba(0,0,0,0)), url(https://firebasestorage.googleapis.com/v0/b/vm-dev-fa2be.appspot.com/o/apt.jpg?alt=media&token=3be48125-394f-48b1-8db1-bec6de962a21) no-repeat`
        e.target.style.backgroundRepeat =  'no-repeat';
        e.target.style.backgroundSize = 'cover';
      }}
      >
      <p className="project-name">Apartment Rental Management System</p>
      </a>


      <a href="https://github.com/vmangahis/Kai" className="project-card" style={{ backgroundImage: 'url(https://firebasestorage.googleapis.com/v0/b/vm-dev-fa2be.appspot.com/o/kai.PNG?alt=media&token=c7f53b22-873c-44f8-8356-6d3fc37b3d0b) no-repeat', backgroundRepeat: 'no-repeat'}}
      onMouseEnter={(e) => {
        e.target.style.background = `linear-gradient(rgba(0,0,0,0.8), rgba(0,0,0,0.9)), url(https://firebasestorage.googleapis.com/v0/b/vm-dev-fa2be.appspot.com/o/kai.PNG?alt=media&token=c7f53b22-873c-44f8-8356-6d3fc37b3d0b) no-repeat`
      }}
      onMouseLeave={(e) =>{
        e.target.style.background = `linear-gradient(rgba(0,0,0,0), rgba(0,0,0,0)), url(https://firebasestorage.googleapis.com/v0/b/vm-dev-fa2be.appspot.com/o/kai.PNG?alt=media&token=c7f53b22-873c-44f8-8356-6d3fc37b3d0b) no-repeat`
      }}
      >
      <p className="project-name">Kai</p>
      </a>

    </div>

    </div>
  )
}

export default Projects
