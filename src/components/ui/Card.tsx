'use client';

import { motion } from 'framer-motion';
import { ReactNode } from 'react';

interface CardProps {
  children: ReactNode;
  className?: string;
  hover?: boolean;
  glass?: boolean;
  gradient?: boolean;
}

export function Card({ 
  children, 
  className = '', 
  hover = false, 
  glass = false, 
  gradient = false 
}: CardProps) {
  const baseClasses = 'rounded-xl border p-6 transition-all duration-300';
  
  let variantClasses = '';
  
  if (glass) {
    variantClasses = 'bg-white/10 backdrop-blur-md border-white/20 shadow-glass';
  } else if (gradient) {
    variantClasses = 'bg-gradient-primary text-white border-transparent shadow-lg';
  } else {
    variantClasses = 'bg-white dark:bg-gray-800 border-gray-200 dark:border-gray-700 shadow-sm';
  }
  
  const hoverClasses = hover ? 'hover:shadow-lg hover:scale-105 cursor-pointer' : '';
  
  const classes = `${baseClasses} ${variantClasses} ${hoverClasses} ${className}`;

  if (hover) {
    return (
      <motion.div
        whileHover={{ y: -4, scale: 1.02 }}
        transition={{ duration: 0.2 }}
        className={classes}
      >
        {children}
      </motion.div>
    );
  }

  return (
    <div className={classes}>
      {children}
    </div>
  );
}