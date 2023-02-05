import TimelineCard from "./TimelineCard";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBusinessTime } from '@fortawesome/free-solid-svg-icons';
import { useEffect, useState } from 'react';

const Experience = () => {


  const [experiences, setExperiences] = useState([]);

  useEffect(() => {
      const url = "https://localhost:7006/api/exp";
     
      fetch(url
        )
      .then(resp => resp.json())
      .then(data => {console.log(data);
        setExperiences(data)})
  },[])


  return (
    <div className="experience" id="experience">
      <h1>Experience</h1>

      <div className="experience-timeline">
            <div className="timeline-line">
            </div>
          
          {experiences.map(el => {
            console.log(el);
            return(<TimelineCard expIcon={<FontAwesomeIcon icon={faBusinessTime} className="expIcon" inverse />} rowType="odd" title={el.role_Name} company={el.comp}  st_date={el.stDate} ed_date={el.edDate} />);
          })}
          {/* <TimelineCard expIcon={<FontAwesomeIcon icon={faSchool} className="expIcon" inverse />}rowType="odd" title="Frontend Developer (Intern)" company="DepEd Biñan City Division Information Office"  respons={['Recreated UI of RMS and main site with the use of frontend language', 'Worked with co-intern designer']} date="April 2022 - July 2022" />
          <TimelineCard expIcon={<FontAwesomeIcon icon={faBusinessTime} className="expIcon" inverse />} rowType="even" title="Freelance Web Developer" respons={['']} company="Upwork"  date="September 2020 - Present" />
          <TimelineCard expIcon={<FontAwesomeIcon icon={faBusinessTime} className="expIcon" inverse />} rowType="odd" title="Freelance Virtual Assistant" respons={['Basic Data Entry tasks', 'Loom video recordings','Daily cryptocurrency transaction tracking','Earned Top Rated badge']} company="Upwork"  date="September 2020 - Present" /> */}
            


      </div>
    </div>
  )
}

export default Experience;
