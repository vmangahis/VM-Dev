function ProjectCards({imglink, prname, prlink} : {imglink: string, prname: string, prlink: string}){
  const defStyle = {
    backgroundImage : `url(${imglink})`,
    backgroundRepeat: 'no-repeat'
  };


  const enterBgStyle = `linear-gradient(rgba(0,0,0,0.8), rgba(0,0,0,0.8)), url(${imglink}) no-repeat`;

  const leaveBgStyle = `linear-gradient(rgba(0,0,0,0), rgba(0,0,0,0)), url(${imglink}) no-repeat`;


  return (
        <>
        <a href={prlink} className="project-card" style={defStyle} onMouseEnter={(e) => {
          const element = e.target as HTMLInputElement
          element.style.background = enterBgStyle;
          element.style.backgroundRepeat = 'no-repeat';
          element.style.backgroundSize = 'cover';
        }}
          onMouseLeave={(e) => {
            const element = e.target as HTMLInputElement;
            element.style.background = leaveBgStyle;
            element.style.backgroundRepeat = 'no-repeat';
            element.style.backgroundSize = 'cover';
          }}
        >
            <p className="project-name">{prname}</p>
        </a>
        </>
  )
}

export default ProjectCards;