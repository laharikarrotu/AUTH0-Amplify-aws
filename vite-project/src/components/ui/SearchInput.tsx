import React from 'react';
import { motion, HTMLMotionProps } from 'framer-motion';
import { colorPalette } from '../../config/theme';

interface SearchInputProps extends HTMLMotionProps<'input'> {
  icon?: React.ReactNode;
}

export const SearchInput: React.FC<SearchInputProps> = ({ 
  icon, 
  className = '', 
  ...props 
}) => {
  return (
    <div className="relative w-full">
      {icon && (
        <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
          {icon}
        </div>
      )}
      <motion.input
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3 }}
        className={`
          w-full px-4 py-3 
          border-2 border-[${colorPalette.primary.light}]
          rounded-full 
          focus:outline-none 
          focus:ring-2 focus:ring-[${colorPalette.primary.main}]
          ${icon ? 'pl-10' : ''}
          ${className}
        `}
        {...props}
      />
    </div>
  );
};