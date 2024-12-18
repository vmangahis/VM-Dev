import {motion, useAnimation} from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import {useEffect, ReactNode} from 'react';


const TimelineCard = ({title, st_date, ed_date, company, rowType, expIcon} : {title: string, st_date: string, ed_date: string, company: string, rowType: string, expIcon: ReactNode}) => {



  const control   = useAnimation();
  const iconControl = useAnimation();
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
        bounce: 0.1
      }
    });

    iconControl.start({
      opacity:1,
      transition:{
        delay: .7,
        type: 'spring',
        duration: 1,
        bounce: 0.3
      }
    });
  }



  else{
    control.start({
      x: rowType === "odd" ? "-20vw": "10vw",
      opacity: 0
    });

    iconControl.start({
      opacity: 0,
    });
  }
}, [inView, control, rowType])


  return (
    <>
      <div className="experience-card-container">
          <motion.div className={rowType === "odd" ? "experience-card odd" : "experience-card even"}    
      animate={control}
      ref={ref}>
          <section>
          <motion.div animate={iconControl} className={rowType === "odd" ? "expIcon icon-odd" : "expIcon icon-even"}>{expIcon}</motion.div>   

          <div className="experience-header">
              <h3 className="experience-title">{title}</h3>
              <span className="date">{st_date} - </span>
              <span className="date">{ed_date}</span>
          </div>
          <em className="company">{company}</em>
          </section>
          </motion.div>
      </div>
      </>
  )
}

export default TimelineCard;