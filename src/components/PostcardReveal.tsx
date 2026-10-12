import React from 'react';
import { motion, useReducedMotion } from 'motion/react';

interface PostcardRevealProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  tilt?: 'left' | 'right' | 'subtle' | 'none';
  id?: string;
}

export const PostcardReveal: React.FC<PostcardRevealProps> = ({
  children,
  className = '',
  delay = 0,
  tilt = 'none',
  id,
}) => {
  const shouldReduceMotion = useReducedMotion();

  // Initial tilt before landing
  const initialRotate =
    tilt === 'left' ? -2.2 : tilt === 'right' ? 2.2 : tilt === 'subtle' ? -1 : 0;

  if (shouldReduceMotion) {
    return (
      <motion.div
        id={id}
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, amount: 0.15 }}
        transition={{ duration: 0.3, delay }}
        className={className}
      >
        {children}
      </motion.div>
    );
  }

  return (
    <motion.div
      id={id}
      initial={{
        opacity: 0,
        y: 36,
        scale: 1.02,
        rotate: initialRotate,
      }}
      whileInView={{
        opacity: 1,
        y: 0,
        scale: 1,
        rotate: 0,
      }}
      viewport={{ once: true, amount: 0.15, margin: '-40px' }}
      transition={{
        duration: 0.65,
        delay,
        ease: [0.16, 1, 0.3, 1], // Physical smooth settling curve
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
};
