import {motion, useAnimation} from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { useEffect } from 'react';
const TimelineCard = ({title, date, company, respons, rowType, expIcon}) => {



  const control = useAnimation();
  const {ref, inView} = useInView({
    threshold: 0.4
  });

useEffect(() =>{
  if(inView){
    
    control.start({
      x: 0,
      opacity:1,
      transition: {
        type: 'spring',
        duration: 1,
        bounce: 0.3
      }
    });
  }

  else{
   
    control.start({
      x: "-50vw",
      opacity: 0
    });
  }

  
  
}, [inView, control])


  return (
      <motion.div
      className={rowType === "odd" ? "experience-card odd" : "experience-card even"}    
      animate={control}
      ref={ref}>
      <section>
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

      </motion.div>
  
  )
}

export default TimelineCard;