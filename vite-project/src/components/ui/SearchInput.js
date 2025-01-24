import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { motion } from 'framer-motion';
export const SearchInput = ({ icon, className = '', ...props }) => {
    return (_jsxs("div", { className: "relative w-full", children: [icon && (_jsx("div", { className: "absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none", children: icon })), _jsx(motion.input, { initial: { opacity: 0, y: 20 }, animate: { opacity: 1, y: 0 }, transition: { duration: 0.3 }, className: `
          w-full px-4 py-3 
          border-2 border-blue-300
          rounded-full 
          focus:outline-none 
          focus:ring-2 focus:ring-blue-500
          ${icon ? 'pl-10' : ''}
          ${className}
        `, ...props })] }));
};
