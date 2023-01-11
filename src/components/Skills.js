import React from 'react'
import SkillBar from 'react-skillbars'

const Skills = () => {

  const skills = [
    {type: 'Python', level: 90},
    {type: 'Django', level: 85},
    {type: 'PHP', level: 75},
    {type: 'Laravel', level: 70},
    {type: 'HTML', level: 70},
    {type: 'Javascript', level: 70},
    {type: 'JQuery', level: 70},
    {type: 'React', level: 65},
    {type: 'ExpressJS', level: 65},
    {type: 'NodeJS', level: 60},
    {type: 'CSS', level: 50},
  ]


  const colors = {
      bar: "#70848E",
      title:{
        text: "#fff",
        background: "#19191F"
      }
  }


  return (
    <div className='skills' id="skills">
      <h1>Skills</h1>

      <SkillBar skills = {skills} colors={colors} />
      </div>
  )
}

export default Skills;