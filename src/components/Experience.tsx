import TimelineCard from "./TimelineCard";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBusinessTime } from '@fortawesome/free-solid-svg-icons';
import { useEffect, useState } from "react";

const Experience = () => {

  type ExperiencesObject = {
      rowType : string;
      roleName: string;
      company: string;
      st_date : Date;
      endDate: Date;
      startDate : Date
      st_date_format: string;
      ed_date_format: string;
  };

  let [experiences, setExperiences] = useState<ExperiencesObject[]>([]);

  useEffect(() => {
    const formatDate = (experienceParam : ExperiencesObject[]) : void => {
        experienceParam.forEach(val => {
          let start_date = new Date(val.startDate);
          let smonth = start_date.toLocaleDateString('default', {month : 'long'});
          val.st_date_format = smonth + " " + start_date.getFullYear();

          if(val.endDate != null){
            let end_date = new Date(val.endDate);
            let end_month = end_date.toLocaleDateString('default', {month : 'long'});
          
            val.ed_date_format = end_month + " " + end_date.getFullYear();
          }
          else{
            val.ed_date_format = "Present";
          }
          
        });
    }
    const fetchExperiences = async () => {
        const exp = await fetch("https://localhost:7226/api/vm/experiences");
        if(!exp.ok){
          console.log("Error fetching experiences!");
        }
        let expData : ExperiencesObject[] = await exp.json();
        formatDate(expData);
        setExperiences(expData);
        
    }
    fetchExperiences();
  }, []);

  return (
    <div className="experience" id="experience">
      <h1>Experience</h1>

      <div className="experience-timeline">
            <div className="timeline-line">
            </div>       
            {experiences.map((val, index) => {
            return(<TimelineCard expIcon={<FontAwesomeIcon icon={faBusinessTime} className="expIcon" inverse />} rowType={(index % 2 != 0) ? "even" : "odd"} title={val.roleName} company={val.company} st_date={val.st_date_format} ed_date={val.ed_date_format} />);
          })}
      </div>
    </div>
  )
}

export default Experience;
