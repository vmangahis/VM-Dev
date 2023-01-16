import React from 'react'

const TimelineCard = ({title, date, company, respons, rowType}) => {
  return (
     
    <aside className={rowType == "odd" ? "experience-card odd" : "experience-card even"}>
          <div className="experience-header">
              <h3 className="experience-title">{title}</h3>
              <span className="date">{date}</span>
          </div>

          <em className="company">{company}</em>

          
    </aside>
  
  )
}

export default TimelineCard;