import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { motion } from 'framer-motion';
export const Card = ({ children, className = '', store, index }) => {
    if (store && typeof index === 'number') {
        return (_jsx(motion.div, { initial: { opacity: 0, scale: 0.9 }, animate: { opacity: 1, scale: 1 }, transition: { delay: index * 0.1, duration: 0.3 }, className: "overflow-hidden transition-transform transform bg-white shadow-lg rounded-2xl hover:scale-105", children: _jsxs("div", { className: "p-6", children: [_jsxs("div", { className: "flex items-center mb-4", children: [_jsx("img", { src: store.logo, alt: `${store.name} logo`, className: "object-contain w-16 h-16 mr-4 rounded-lg" }), _jsx("h2", { className: "text-2xl font-bold text-gray-800", children: store.name })] }), _jsx("p", { className: "mb-4 text-gray-600", children: store.description }), _jsxs("div", { className: "space-y-2 text-gray-700", children: [_jsxs("div", { children: ["\uD83D\uDCCD Categories: ", store.categories?.join(', ')] }), _jsxs("div", { children: ["\uD83C\uDF10 Website:", _jsx("a", { href: store.website, target: "_blank", rel: "noopener noreferrer", className: "ml-2 text-blue-600 hover:underline", children: "Visit Store" })] })] })] }) }, store.id));
    }
    return (_jsx(motion.div, { whileHover: {
            scale: 1.02,
            boxShadow: '0 10px 20px rgba(0,0,0,0.1)'
        }, className: `bg-white rounded-xl shadow-md overflow-hidden transition-all duration-300 ${className}`, children: children }));
};
