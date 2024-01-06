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


      <a href="https://github.com/vmangahis/Kai" className="project-card" style={{ backgroundImage: 'url(https://firebasestorage.googleapis.com/v0/b/vm-dev-fa2be.appspot.com/o/kai.PNG?alt=media&token=c7f53b22-873c-44f8-8356-6d3fc37b3d0b)', backgroundRepeat: 'no-repeat'}}
      onMouseEnter={(e) => {
        e.target.style.background = `linear-gradient(rgba(0,0,0,0.8), rgba(0,0,0,0.9)), url(https://firebasestorage.googleapis.com/v0/b/vm-dev-fa2be.appspot.com/o/kai.PNG?alt=media&token=c7f53b22-873c-44f8-8356-6d3fc37b3d0b) no-repeat`
        e.target.style.backgroundRepeat =  'no-repeat';
        e.target.style.backgroundSize = 'cover';
      }}
      onMouseLeave={(e) =>{
        e.target.style.background = `linear-gradient(rgba(0,0,0,0), rgba(0,0,0,0)), url(https://firebasestorage.googleapis.com/v0/b/vm-dev-fa2be.appspot.com/o/kai.PNG?alt=media&token=c7f53b22-873c-44f8-8356-6d3fc37b3d0b) no-repeat`
        e.target.style.backgroundRepeat =  'no-repeat';
        e.target.style.backgroundSize = 'cover';
      }}
      >
      <p className="project-name">Kai</p>
      </a>

      <a href="https://github.com/vmangahis/beowulf" className="project-card" style={{ backgroundImage: 'url(https://firebasestorage.googleapis.com/v0/b/vm-dev-fa2be.appspot.com/o/beowulf.png?alt=media&token=547b5150-339c-47e7-82a6-f57d3a7034b9)', backgroundRepeat: 'no-repeat'}}
      onMouseEnter={(e) => {
        e.target.style.background = `linear-gradient(rgba(0,0,0,0.8), rgba(0,0,0,0.9)), url(https://firebasestorage.googleapis.com/v0/b/vm-dev-fa2be.appspot.com/o/beowulf.png?alt=media&token=547b5150-339c-47e7-82a6-f57d3a7034b9) no-repeat`
        e.target.style.backgroundRepeat =  'no-repeat';
        e.target.style.backgroundSize = 'cover';
      }}
      onMouseLeave={(e) =>{
        e.target.style.background = `linear-gradient(rgba(0,0,0,0), rgba(0,0,0,0)), url(https://firebasestorage.googleapis.com/v0/b/vm-dev-fa2be.appspot.com/o/beowulf.png?alt=media&token=547b5150-339c-47e7-82a6-f57d3a7034b9) no-repeat`
        e.target.style.backgroundRepeat =  'no-repeat';
        e.target.style.backgroundSize = 'cover';
      }}
      >
      <p className="project-name">Beowulf</p>
      </a>

      <a href="https://github.com/vmangahis/Four-Color-Conjecture-Game" className="project-card" style={{ backgroundImage: 'url(https://firebasestorage.googleapis.com/v0/b/vm-dev-fa2be.appspot.com/o/fcc.png?alt=media&token=b74b049e-1f4e-4f4d-a42f-66d1e9cbdc1d)', backgroundRepeat: 'no-repeat'}}
      onMouseEnter={(e) => {
        e.target.style.background = `linear-gradient(rgba(0,0,0,0.8), rgba(0,0,0,0.9)), url(https://firebasestorage.googleapis.com/v0/b/vm-dev-fa2be.appspot.com/o/fcc.png?alt=media&token=b74b049e-1f4e-4f4d-a42f-66d1e9cbdc1d) no-repeat`
        e.target.style.backgroundRepeat =  'no-repeat';
        e.target.style.backgroundSize = 'cover';
      }}
      onMouseLeave={(e) =>{
        e.target.style.background = `linear-gradient(rgba(0,0,0,0), rgba(0,0,0,0)), url(https://firebasestorage.googleapis.com/v0/b/vm-dev-fa2be.appspot.com/o/fcc.png?alt=media&token=b74b049e-1f4e-4f4d-a42f-66d1e9cbdc1d) no-repeat`
        e.target.style.backgroundRepeat =  'no-repeat';
        e.target.style.backgroundSize = 'cover';
      }}
      >
      <p className="project-name">Four Color Conjecture Game</p>
      </a>

    </div>

    </div>
  )
}

export default Projects
