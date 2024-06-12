import {motion, useAnimation} from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { useEffect} from 'react';
const TimelineCard = ({title, st_date, ed_date, company, rowType, expIcon}) => {



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
      x: rowType === "odd" ? "-50vw": "10vw",
      opacity: 0
    });
  }

  
  
}, [inView, control, rowType])


  return (
      <motion.div
      className={rowType === "odd" ? "experience-card odd" : "experience-card even"}    
      animate={control}
      ref={ref}>
      <section>
          {expIcon}
          
          <div className="experience-header">
              <h3 className="experience-title">{title}</h3>
              <span className="date">{st_date} - </span>
              <span className="date">{ed_date}</span>
          </div>

          <em className="company">{company}</em>
          </section>   

      </motion.div>
  
  )
}

export default TimelineCard;