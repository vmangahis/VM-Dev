import { useAnimation } from 'framer-motion';
import { useEffect } from 'react';
import { useInView } from 'react-intersection-observer';
import useWindowDimension from './useWindowDimension';

export default function useTimelinecardAnimation(rowType: string) {
  const control = useAnimation();
  const iconControl = useAnimation();
  const { ref, inView } = useInView({
    threshold: 0.4,
  });
  const { width } = useWindowDimension();

  useEffect(() => {
    if (inView) {
      control.start({
        x: 0,
        opacity: 1,
        transition: {
          type: 'spring',
          duration: 1,
          bounce: 0.1,
        },
      });

      iconControl.start({
        opacity: 1,
        transition: {
          delay: 0.7,
          type: 'spring',
          duration: 1,
          bounce: 0.3,
        },
      });
    } else {
      if (width >= 900) {
        control.start({
          x: rowType === 'odd' ? '-20vw' : '10vw',
          opacity: 0,
        });
      } else {
        control.start({
          x: '10vw',
          opacity: 0,
        });
      }
      iconControl.start({
        opacity: 0,
      });
    }
  }, [inView, control, rowType]);

  return { control, ref, iconControl };
}
