import { jsx as _jsx } from "react/jsx-runtime";
import { motion } from 'framer-motion';
import { colorPalette } from '../../config/theme';
export const Button = ({ children, variant = 'primary', fullWidth = false, className = '', ...props }) => {
    const variantStyles = {
        primary: `bg-[${colorPalette.primary.main}] text-white hover:bg-[${colorPalette.primary.dark}]`,
        secondary: `bg-[${colorPalette.secondary.main}] text-white hover:bg-[${colorPalette.secondary.dark}]`,
        outline: `border-2 border-[${colorPalette.primary.main}] text-[${colorPalette.primary.main}] hover:bg-[${colorPalette.primary.light}] hover:text-white`
    };
    return (_jsx(motion.button, { whileHover: { scale: 1.05 }, whileTap: { scale: 0.95 }, className: `
        px-6 py-3 rounded-full transition-all duration-300 
        ${variantStyles[variant]}
        ${fullWidth ? 'w-full' : ''}
        ${className}
      `, ...props, children: children }));
};
