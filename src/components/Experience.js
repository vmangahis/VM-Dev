import TimelineCard from "./TimelineCard";
const Experience = () => {
  return (
    <div className="experience" id="experience">
      <h1>Experience</h1>

      <div className="experience-timeline">
            <div className="timeline-line">
            </div>
            
            <TimelineCard rowType="odd" title="Frontend Developer (Intern)" company="DepEd Biñan City Division Information Office"  date="January 01, 2000" />
            <TimelineCard rowType="even" title="Freelance Web Developer" company="Upwork"  date="January 01, 2000" />
            <TimelineCard rowType="odd" title="Freelance Virtual Assistant" company="Upwork"  date="January 01, 2000" />
            


      </div>
    </div>
  )
}

export default Experience;
