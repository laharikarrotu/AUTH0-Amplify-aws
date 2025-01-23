import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
// src/components/Layout/Navbar.tsx
import { Link } from 'react-router-dom';
export function Navbar() {
    return (_jsx("nav", { className: "bg-gray-800 text-white p-4", children: _jsxs("div", { className: "container mx-auto flex justify-between items-center", children: [_jsx(Link, { to: "/", className: "text-xl font-bold", children: "Clothing Store" }), _jsxs("div", { className: "space-x-4", children: [_jsx(Link, { to: "/", className: "hover:text-gray-300", children: "Home" }), _jsx(Link, { to: "/stores", className: "hover:text-gray-300", children: "Stores" }), _jsx(Link, { to: "/products", className: "hover:text-gray-300", children: "Products" }), _jsx(Link, { to: "/categories", className: "hover:text-gray-300", children: "Categories" }), _jsx(Link, { to: "/cart", className: "hover:text-gray-300", children: "Cart" })] })] }) }));
}
