import { jsx as _jsx } from "react/jsx-runtime";
import { motion } from 'framer-motion';
export const Button = ({ children, variant = 'primary', fullWidth = false, className = '', ...props }) => {
    const variantStyles = {
        primary: 'bg-blue-500 text-white hover:bg-blue-600',
        secondary: 'bg-gray-500 text-white hover:bg-gray-600',
        outline: 'border-2 border-blue-500 text-blue-500 hover:bg-blue-50'
    };
    return (_jsx(motion.button, { whileHover: { scale: 1.05 }, whileTap: { scale: 0.95 }, className: `
       px-6 py-3 rounded-full transition-all duration-300
       ${variantStyles[variant]}
       ${fullWidth ? 'w-full' : ''}
       ${className}
     `, ...props, children: children }));
};
