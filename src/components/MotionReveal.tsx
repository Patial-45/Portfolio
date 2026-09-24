import React from 'react';
import { motion, Variants } from 'framer-motion';

interface TextRevealProps {
  text: string;
  className?: string;
  style?: React.CSSProperties;
  as?: 'h1' | 'h2' | 'h3' | 'p' | 'span' | 'div';
  delay?: number;
}

export const TextReveal: React.FC<TextRevealProps> = ({
  text,
  className = '',
  style = {},
  as = 'div',
  delay = 0,
}) => {
  const words = text.split(' ');

  const containerVariants: Variants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.04,
        delayChildren: delay,
      },
    },
  };

  const wordVariants: Variants = {
    hidden: {
      opacity: 0.001,
      filter: 'blur(10px)',
      y: 12,
    },
    visible: {
      opacity: 1,
      filter: 'blur(0px)',
      y: 0,
      transition: {
        duration: 0.5,
        ease: [0.16, 1, 0.3, 1] as [number, number, number, number],
      },
    },
  };

  const Tag = motion[as] as any;

  return (
    <Tag
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-40px' }}
      className={className}
      style={{
        display: 'flex',
        flexWrap: 'wrap',
        gap: '0.22em',
        maxWidth: '100%',
        overflowWrap: 'break-word',
        ...style,
      }}
    >
      {words.map((word, i) => (
        <motion.span
          key={i}
          variants={wordVariants}
          style={{
            display: 'inline-block',
            maxWidth: '100%',
            willChange: 'transform, filter, opacity',
          }}
        >
          {word}
        </motion.span>
      ))}
    </Tag>
  );
};

export const FadeInView: React.FC<{
  children: React.ReactNode;
  delay?: number;
  yOffset?: number;
  className?: string;
  style?: React.CSSProperties;
}> = ({ children, delay = 0, yOffset = 20, className = '', style = {} }) => {
  return (
    <motion.div
      initial={{ opacity: 0.001, filter: 'blur(8px)', y: yOffset }}
      whileInView={{ opacity: 1, filter: 'blur(0px)', y: 0 }}
      viewport={{ once: true, margin: '-40px' }}
      transition={{ duration: 0.65, delay, ease: [0.16, 1, 0.3, 1] as [number, number, number, number] }}
      className={className}
      style={{ willChange: 'transform, filter, opacity', ...style }}
    >
      {children}
    </motion.div>
  );
};
