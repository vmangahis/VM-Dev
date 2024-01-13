import { useState } from 'react';
const Projects = () => {

 

  return (
    <div className="projects" id="projects">
      
    <h1>Projects</h1>
    
    <div className="project-container">

      <a href="https://github.com/vmangahis/apartment-rental-system"  className='project-card' style={{ backgroundImage: 'url(https://csqpvkwecmbobrlaxnrw.supabase.co/storage/v1/object/public/vm-dev/apt.jpg)', backgroundRepeat: 'no-repeat'}} onMouseEnter={(e) => {
        e.target.style.background = `linear-gradient(rgba(0,0,0,0.8), rgba(0,0,0,0.9)), url(https://csqpvkwecmbobrlaxnrw.supabase.co/storage/v1/object/public/vm-dev/apt.jpg) no-repeat`
        e.target.style.backgroundRepeat =  'no-repeat';
        e.target.style.backgroundSize = 'cover';
      }}
      onMouseLeave={(e) =>{
        e.target.style.background = `linear-gradient(rgba(0,0,0,0), rgba(0,0,0,0)), url(https://csqpvkwecmbobrlaxnrw.supabase.co/storage/v1/object/public/vm-dev/apt.jpg) no-repeat`
        e.target.style.backgroundRepeat =  'no-repeat';
        e.target.style.backgroundSize = 'cover';
      }}
      >
      <p className="project-name">Apartment Rental Management System</p>
      </a>


      <a href="https://github.com/vmangahis/Kai" className="project-card" style={{ backgroundImage: 'url(https://csqpvkwecmbobrlaxnrw.supabase.co/storage/v1/object/public/vm-dev/kai.PNG?t=2024-01-13T10%3A23%3A56.121Z)', backgroundRepeat: 'no-repeat'}}
      onMouseEnter={(e) => {
        e.target.style.background = `linear-gradient(rgba(0,0,0,0.8), rgba(0,0,0,0.9)), url(https://csqpvkwecmbobrlaxnrw.supabase.co/storage/v1/object/public/vm-dev/kai.PNG?t=2024-01-13T10%3A23%3A56.121Z) no-repeat`
        e.target.style.backgroundRepeat =  'no-repeat';
        e.target.style.backgroundSize = 'cover';
      }}
      onMouseLeave={(e) =>{
        e.target.style.background = `linear-gradient(rgba(0,0,0,0), rgba(0,0,0,0)), url(https://csqpvkwecmbobrlaxnrw.supabase.co/storage/v1/object/public/vm-dev/kai.PNG?t=2024-01-13T10%3A23%3A56.121Z) no-repeat`
        e.target.style.backgroundRepeat =  'no-repeat';
        e.target.style.backgroundSize = 'cover';
      }}
      >
      <p className="project-name">Kai</p>
      </a>

      <a href="https://github.com/vmangahis/beowulf" className="project-card" style={{ backgroundImage: 'url(https://csqpvkwecmbobrlaxnrw.supabase.co/storage/v1/object/public/vm-dev/beowulf.png)', backgroundRepeat: 'no-repeat'}}
      onMouseEnter={(e) => {
        e.target.style.background = `linear-gradient(rgba(0,0,0,0.8), rgba(0,0,0,0.9)), url(https://csqpvkwecmbobrlaxnrw.supabase.co/storage/v1/object/public/vm-dev/beowulf.png) no-repeat`
        e.target.style.backgroundRepeat =  'no-repeat';
        e.target.style.backgroundSize = 'cover';
      }}
      onMouseLeave={(e) =>{
        e.target.style.background = `linear-gradient(rgba(0,0,0,0), rgba(0,0,0,0)), url(https://csqpvkwecmbobrlaxnrw.supabase.co/storage/v1/object/public/vm-dev/beowulf.png) no-repeat`
        e.target.style.backgroundRepeat =  'no-repeat';
        e.target.style.backgroundSize = 'cover';
      }}
      >
      <p className="project-name">Beowulf</p>
      </a>

      <a href="https://github.com/vmangahis/Four-Color-Conjecture-Game" className="project-card" style={{ backgroundImage: 'url(https://csqpvkwecmbobrlaxnrw.supabase.co/storage/v1/object/public/vm-dev/fcc.png?t=2024-01-13T10%3A24%3A24.817Z)', backgroundRepeat: 'no-repeat'}}
      onMouseEnter={(e) => {
        e.target.style.background = `linear-gradient(rgba(0,0,0,0.8), rgba(0,0,0,0.9)), url(https://csqpvkwecmbobrlaxnrw.supabase.co/storage/v1/object/public/vm-dev/fcc.png?t=2024-01-13T10%3A24%3A24.817Z) no-repeat`
        e.target.style.backgroundRepeat =  'no-repeat';
        e.target.style.backgroundSize = 'cover';
      }}
      onMouseLeave={(e) =>{
        e.target.style.background = `linear-gradient(rgba(0,0,0,0), rgba(0,0,0,0)), url(https://csqpvkwecmbobrlaxnrw.supabase.co/storage/v1/object/public/vm-dev/fcc.png?t=2024-01-13T10%3A24%3A24.817Z) no-repeat`
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
