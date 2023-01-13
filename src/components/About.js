import React from 'react'


const About = () => {



  return (
    <div className="about" id="about">
      <h1>About me</h1>

      <div className="about-info">
        <img src="https://firebasestorage.googleapis.com/v0/b/vm-dev-fa2be.appspot.com/o/portfolio-photo.JPG?alt=media&token=f72d9c89-b609-430f-a927-fb1dce1f0743" className="about-photo" alt="My portfolio" />
        

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