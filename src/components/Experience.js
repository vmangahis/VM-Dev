import React from 'react'

const Experience = () => {
  return (
    <div className="experience" id="experience">
      <h1>Experience</h1>

      <div className="experience-table">

          <div>
            <p className="experience-date">April 2022 - July 2022</p>
            <div>
              <p className="experience-title">Frontend Developer (Intern)</p>
              <p className="company">DepEd Biñan City Division Information Office</p>
              <ul className="responsibilities">
                <li>Recreated UI of RMS and main site with the use of frontend languages</li>
                <li>Worked with co-intern designer</li>
              </ul>

            </div>
          </div>

          <div>
            <p className="experience-date">September 2020 - Present</p>
            
            <div>
              <p className="experience-title">Freelance Virtual Assistant</p>
              <p className="company">Upwork</p>
              
              <ul className="responsibilities">
                <li>Basic Data Entry tasks</li>
                <li>Loom video recordings</li>
                <li>Daily cryptocurrency transaction tracking</li>
                <li>Earned Top Rated badge</li>
              </ul>
            </div>
          </div>

          

          <div>
            <p className="experience-date">September 2020 - Present</p>
            
            <div>
              <p className="experience-title">Freelance Web Developer</p>
              <p className="company">Upwork</p>
            </div>

          

          </div>


      </div>
    </div>
  )
}

export default Experience;
