import TimelineCard from "./TimelineCard";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBusinessTime, faSchool } from '@fortawesome/free-solid-svg-icons';
import React from "react";

const Experience = () => {
  return (
    <div className="experience" id="experience">
      <h1>Experience</h1>

      <div className="experience-timeline">
            <div className="timeline-line">
            </div>       
          <TimelineCard expIcon={<FontAwesomeIcon icon={faBusinessTime} className="expIcon" inverse />} rowType="even" title="Software Engineer"  company="Infor PSSC Inc."  st_date="June 2024" ed_date="Present" /> 
          <TimelineCard expIcon={<FontAwesomeIcon icon={faBusinessTime} className="expIcon" inverse />} rowType="odd" title="Associate Software Engineer" company="Infor PSSC Inc."  st_date="February 2023" ed_date="June 2024" /> 
          <TimelineCard expIcon={<FontAwesomeIcon icon={faBusinessTime} className="expIcon" inverse />} rowType="even" title="Freelance Web Developer" company="Upwork"  st_date="September 2020" ed_date="January 2023" />
          <TimelineCard expIcon={<FontAwesomeIcon icon={faBusinessTime} className="expIcon" inverse />} rowType="odd" title="Freelance Virtual Assistant" company="Upwork"  st_date="September 2020" ed_date="January 2023" /> 
          <TimelineCard expIcon={<FontAwesomeIcon icon={faSchool} className="expIcon" inverse />}rowType="even" title="Frontend Developer (Intern)" company="DepEd Biñan City Division Information Office" st_date="April 2022" ed_date="July 2022" />
      </div>
    </div>
  )
}

export default Experience;
