import { useRef } from 'react';
import { motion as Motion, useScroll, useTransform } from 'framer-motion';

const ScrollCard = ({ children, direction, className, scroll = 0.27, hoverScale = 1.02 }) => {
  const ref = useRef(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end center"]
  });

  const x = useTransform(
    scrollYProgress,
    [0, scroll],
    [direction === 'left' ? -200 : direction === 'right' ? 200 : 0, 0]
  );

  const y = useTransform(
    scrollYProgress,
    [0, scroll],
    [direction === 'bottom' ? 100 : 0, 0]
  );

  const opacity = useTransform(scrollYProgress, [0, 0.25], [0, 1]);

  return (
    <Motion.li
      ref={ref}
      style={{ x, y, opacity }}
      whileHover={{ scale: hoverScale }}
      className={className}
    >
      {children}
    </Motion.li>
  );
};

export default ScrollCard;