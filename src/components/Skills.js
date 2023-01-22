import React from 'react'
import DevIcon from "devicon-react-svg";


const Skills = () => {


  const languages = [
    {skill :  'django', },
    {skill :  'laravel', },
    {skill:  'react', },
    {skill:  'bootstrap', },
    {skill :  'jquery', },
    
]


  const langStyle = {
    fill: "#058ED9",
    width: "250px"
  }




  return (
    <div className='skills' id="skills">
      <h1>Skills</h1>
      <div className="skills-container">
      {languages.map(el => {
        return(<DevIcon icon={el.skill} style={langStyle} />);
      })}
      </div>
      </div>
  )
}

export default Skills;