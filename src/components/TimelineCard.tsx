import { motion } from 'framer-motion';
import useTimelinecardAnimation from '../hooks/useTimelineCardAnimation';
import { TimelineCardProps } from '../types/portfoliotypes';

const TimelineCard = ({
  title,
  st_date,
  ed_date,
  company,
  rowType,
  expIcon,
}: TimelineCardProps) => {
  const { control, ref, iconControl } = useTimelinecardAnimation(rowType);

  return (
    <>
      <div className="experience-card-container">
        <motion.div
          className={
            rowType === 'odd' ? 'experience-card odd' : 'experience-card even'
          }
          animate={control}
          ref={ref}
        >
          <section className="experience-card-section">
            <motion.div
              animate={iconControl}
              className={
                rowType === 'odd' ? 'expIcon icon-odd' : 'expIcon icon-even'
              }
            >
              {expIcon}
            </motion.div>

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
  );
};

export default TimelineCard;
