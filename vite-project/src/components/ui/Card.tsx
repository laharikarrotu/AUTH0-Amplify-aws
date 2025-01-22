import React from 'react';
import { motion } from 'framer-motion';

interface CardProps {
  children: React.ReactNode;
  className?: string;
}

export const Card: React.FC<CardProps> = ({ children, className = '' }) => {
  return (
    <motion.div
      whileHover={{ 
        scale: 1.02,
        boxShadow: '0 10px 20px rgba(0,0,0,0.1)'
      }}
      className={`
        bg-white rounded-xl shadow-md overflow-hidden 
        transition-all duration-300
        ${className}
      `}
    >
      {children}
    </motion.div>
  );
};