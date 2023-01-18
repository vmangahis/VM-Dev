import TimelineCard from "./TimelineCard";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSchool } from '@fortawesome/free-solid-svg-icons';


const Experience = () => {
  return (
    <div className="experience" id="experience">
      <h1>Experience</h1>

      <div className="experience-timeline">
            <div className="timeline-line">
            </div>
            
            <TimelineCard expIcon={<FontAwesomeIcon icon={faSchool} className="expIcon" inverse />}rowType="odd" title="Frontend Developer (Intern)" company="DepEd Biñan City Division Information Office"  respons={['Recreated UI of RMS and main site with the use of frontend language', 'Worked with co-intern designer']} date="April 2022 - July 2022" />
            <TimelineCard rowType="even" title="Freelance Web Developer" respons={['']} company="Upwork"  date="September 2020 - Present" />
            <TimelineCard rowType="odd" title="Freelance Virtual Assistant" respons={['Basic Data Entry tasks', 'Loom video recordings','Daily cryptocurrency transaction tracking','Earned Top Rated badge']} company="Upwork"  date="September 2020 - Present" />
            


      </div>
    </div>
  )
}

export default Experience;
