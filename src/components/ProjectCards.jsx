function ProjectCards({imglink, prname, prlink}) {
  const defStyle = {
    backgroundImage : `url(${imglink})`,
    backgroundRepeat: 'no-repeat'
  };

  const enterBgStyle = `linear-gradient(rgba(0,0,0,0.8), rgba(0,0,0,0.8)), url(${imglink}) no-repeat`;

  const leaveBgStyle = `linear-gradient(rgba(0,0,0,0), rgba(0,0,0,0)), url(${imglink}) no-repeat`;


  return (
        <>
        <a href={prlink} className="project-card" style={defStyle} onMouseEnter={(e) => {
          e.target.style.background = enterBgStyle;
          e.target.style.backgroundRepeat = 'no-repeat';
          e.target.style.backgroundSize = 'cover';
        }}
          onMouseLeave={(e) => {
            e.target.style.background = leaveBgStyle;
            e.target.style.backgroundRepeat = 'no-repeat';
            e.target.style.backgroundSize = 'cover';
          }}
        >
            <p className="project-name">{prname}</p>
        </a>
        </>
  )
}

export default ProjectCards;