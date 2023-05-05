import React, { useState } from 'react';
import { useInView } from 'react-intersection-observer';
import './Animated.scss';
function Animated ({ children, ...props }) {

  const [isAnimated, setIsAnimated] = useState(false);
  const { ref, inView } = useInView({ threshold: 0.2 });

  if (inView && !isAnimated) {
    setIsAnimated(true);
  }

  return (
    <div
      className={`animated-element ${isAnimated ? 'animate fade-in' : ''}`}
      ref={ref}
      {...props}
    >
      {children}
    </div>
  );
};

export default Animated;
