import {useEffect, useState} from 'react';


const Projects = () => {


  let [projects, setProject] = useState([]);

  useEffect(() =>{
    let url = "http://localhost:8082/api/Projects";

    fetch(url)
    .then(resp => resp.json())
    .then(data => {
      
      setProject(data)})
  }, [])

  

  return (
    <div className="projects" id="projects">
    <h1>Projects</h1>

    <div className="project-container">
      {projects.map(el => {
        return(
          <a key={el.id} href={el.project_Link} className="project-card" style={{ backgroundImage: `url(${el.thumbnail_Link})`, backgroundRepeat: 'no-repeat', backgroundSize: 'cover'}}onMouseEnter={(e) =>{
            e.target.style.background =`linear-gradient(rgba(0,0,0,0.8), rgba(0,0,0,0.9)), url(${el.thumbnail_Link}) no-repeat`;
            e.target.style.bacgkroundRepeat = 'no-repeat';
            e.target.style.backgroundSize = 'cover';
          }}
          
          onMouseLeave={(e)=>{
          e.target.style.background = `linear-gradient(rgba(0,0,0,0), rgba(0,0,0,0)), url(${el.thumbnail_Link}) no-repeat`;
          e.target.style.backgroundRepeat =  'no-repeat';
          e.target.style.backgroundSize = 'cover';
          }}>
          <p className="project-name">{el.title}</p></a>

        );
      })}

    </div>

    </div>
  )
}

export default Projects
