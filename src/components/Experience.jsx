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
      .then(data => {
        setExperiences(data)})
  },[])


  return (
    <div className="experience" id="experience">
      <h1>Experience</h1>

      <div className="experience-timeline">
            <div className="timeline-line">
            </div>
          
          {experiences.map((el, ind) => {
            return(<TimelineCard key={el.id} expIcon={<FontAwesomeIcon icon={faBusinessTime} className="expIcon" inverse />} rowType={(ind+1) % 2 == 0 ? "even" : "odd"} title={el.role_Name} company={el.comp}  st_date={el.stDate} ed_date={el.edDate} />);
          })}
                
      </div>
    </div>
  )
}

export default Experience;
