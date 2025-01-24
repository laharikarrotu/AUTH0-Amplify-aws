// src/components/ui/Button.tsx
import React from 'react';
import { motion, HTMLMotionProps } from 'framer-motion';

interface ButtonProps extends HTMLMotionProps<'button'> {
 variant?: 'primary' | 'secondary' | 'outline';
 fullWidth?: boolean;
}

export const Button: React.FC<ButtonProps> = ({
 children,
 variant = 'primary',
 fullWidth = false,
 className = '',
 ...props
}) => {
 const variantStyles = {
   primary: 'bg-blue-500 text-white hover:bg-blue-600',
   secondary: 'bg-gray-500 text-white hover:bg-gray-600', 
   outline: 'border-2 border-blue-500 text-blue-500 hover:bg-blue-50'
 };

 return (
   <motion.button
     whileHover={{ scale: 1.05 }}
     whileTap={{ scale: 0.95 }}
     className={`
       px-6 py-3 rounded-full transition-all duration-300
       ${variantStyles[variant]}
       ${fullWidth ? 'w-full' : ''}
       ${className}
     `}
     {...props}
   >
     {children}
   </motion.button>
 );
};