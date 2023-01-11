import React from 'react'
import photo from '../portfolio-photo.JPG'

const About = () => {



  return (
    <div className="about" id="about">
      <h1>About me</h1>

      <div className="about-info">
        <img src={photo} className="about-photo" alt="My portfolio" />

        <ul className="about-info-text">
          <li>Name: Vince Baron Mangahis</li>
          <li>Address: Santa Rosa, Laguna</li>
          <li>Gender: Male</li>
          <li>Birthday: September 22, 1999</li>
          <li>Contact Number: +639057555624</li>
          <li>Contact Email: vince.baron092299@gmail.com</li>
        </ul>

      </div>
      </div>
  )
}

export default About