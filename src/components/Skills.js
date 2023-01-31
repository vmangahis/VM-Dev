import React from 'react'
import DevIcon from "devicon-react-svg";


const Skills = () => {


  const languages = [
    {skill :  'django', },
    {skill :  'laravel', },
    {skill:  'react', },
    {skill:  'bootstrap', },
    {skill :  'jquery', },
    {skill: 'dotnet'}
    
]


  const langStyle = {
    fill: "",
    width: "250px",
  }

  return (
    <div className='skills' id="skills">
      <h1>Skills</h1>
      <div className="skills-container">
      {languages.map(el => {
        return(<DevIcon icon={el.skill} style={langStyle} className="devIcon" />);
      })}
      </div>
      </div>
  )
}

export default Skills;