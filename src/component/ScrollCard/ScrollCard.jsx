import { useRef } from 'react';
import { motion as Motion, useScroll, useTransform } from 'framer-motion';

const ScrollCard = ({ children, direction, className }) => {
  const ref = useRef(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end center"]
  });

  const x = useTransform(
    scrollYProgress,
    [0, 0.25],
    [direction === 'left' ? -200 : direction === 'right' ? 200 : 0, 0]
  );

  const y = useTransform(
    scrollYProgress,
    [0, 0.25],
    [direction === 'bottom' ? 100 : 0, 0]
  );

  const opacity = useTransform(scrollYProgress, [0, 0.25], [0, 1]);

  return (
    <Motion.li
      ref={ref}
      style={{ x, y, opacity }}
      whileHover={{ scale: 1.02 }}
      className={className}
    >
      {children}
    </Motion.li>
  );
};

export default ScrollCard;