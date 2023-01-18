import React from 'react'




const TimelineCard = ({title, date, company, respons, rowType, expIcon}) => {
  return (
      
      <section className={rowType === "odd" ? "experience-card odd" : "experience-card even"}>
          {expIcon}
          
          <div className="experience-header">
              <h3 className="experience-title">{title}</h3>
              <span className="date">{date}</span>
          </div>

          <em className="company">{company}</em>
              <ul className="duties">
                {respons.map((el) => {
                  return(<li>{el}</li>);
                })}
              </ul>
          </section>   

    
  
  )
}

export default TimelineCard;