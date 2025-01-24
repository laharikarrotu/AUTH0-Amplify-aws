import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
// src/pages/Products.tsx
import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { fetchProducts } from '../services/shopifyClient';
const filterByPrice = (price, range) => {
    switch (range) {
        case 'under50': return price < 50;
        case '50to100': return price >= 50 && price <= 100;
        case 'over100': return price > 100;
        default: return true;
    }
};
const Products = () => {
    const [products, setProducts] = useState([]);
    const [filters, setFilters] = useState({
        brand: '',
        category: '',
        priceRange: ''
    });
    const [loading, setLoading] = useState(true);
    useEffect(() => {
        const loadProducts = async () => {
            const data = await fetchProducts();
            setProducts(data);
            setLoading(false);
        };
        loadProducts();
    }, []);
    const brands = [...new Set(products.map(p => p.brand))];
    const categories = [...new Set(products.map(p => p.category))];
    const filteredProducts = products.filter(p => (!filters.brand || p.brand === filters.brand) &&
        (!filters.category || p.category === filters.category) &&
        (!filters.priceRange || filterByPrice(p.price, filters.priceRange)));
    if (loading) {
        return (_jsx("div", { className: "flex items-center justify-center min-h-screen", children: _jsx(motion.div, { animate: { rotate: 360 }, transition: { repeat: Infinity, duration: 1, ease: "linear" }, className: "w-16 h-16 border-4 border-blue-500 rounded-full" }) }));
    }
    return (_jsxs("div", { className: "min-h-screen bg-gradient-to-br from-slate-50 to-slate-100", children: [_jsx(motion.div, { initial: { opacity: 0, y: -20 }, animate: { opacity: 1, y: 0 }, className: "sticky top-0 z-10 p-4 bg-white/80 backdrop-blur-sm", children: _jsxs("div", { className: "flex flex-wrap gap-4 mx-auto max-w-7xl", children: [_jsxs("select", { value: filters.brand, onChange: e => setFilters({ ...filters, brand: e.target.value }), className: "px-4 py-2 border rounded-full border-slate-200 focus:ring-2 focus:ring-blue-500", children: [_jsx("option", { value: "", children: "All Brands" }), brands.map(brand => (_jsx("option", { value: brand, children: brand }, brand)))] }), _jsxs("select", { value: filters.category, onChange: e => setFilters({ ...filters, category: e.target.value }), className: "px-4 py-2 border rounded-full border-slate-200 focus:ring-2 focus:ring-blue-500", children: [_jsx("option", { value: "", children: "All Categories" }), categories.map(cat => (_jsx("option", { value: cat, children: cat }, cat)))] }), _jsxs("select", { value: filters.priceRange, onChange: e => setFilters({ ...filters, priceRange: e.target.value }), className: "px-4 py-2 border rounded-full border-slate-200 focus:ring-2 focus:ring-blue-500", children: [_jsx("option", { value: "", children: "All Prices" }), _jsx("option", { value: "under50", children: "Under $50" }), _jsx("option", { value: "50to100", children: "$50 to $100" }), _jsx("option", { value: "over100", children: "Over $100" })] })] }) }), _jsx("div", { className: "p-4 mx-auto max-w-7xl", children: _jsx("div", { className: "grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4", children: filteredProducts.map((product, index) => (_jsxs(motion.div, { initial: { opacity: 0, scale: 0.9 }, animate: { opacity: 1, scale: 1 }, transition: { delay: index * 0.1 }, className: "transition-all duration-300 bg-white shadow-sm group rounded-2xl hover:shadow-xl", children: [_jsx("div", { className: "overflow-hidden aspect-square rounded-t-2xl", children: _jsx(motion.img, { src: product.image, alt: product.title, className: "object-cover w-full h-full transition-transform duration-500 transform group-hover:scale-110", whileHover: { scale: 1.1 } }) }), _jsxs("div", { className: "p-4", children: [_jsx("h3", { className: "mb-2 text-lg font-semibold truncate text-slate-800", children: product.title }), _jsxs("div", { className: "flex items-center justify-between", children: [_jsxs("span", { className: "font-medium text-blue-600", children: ["$", product.price] }), _jsx(motion.button, { whileHover: { scale: 1.05 }, whileTap: { scale: 0.95 }, className: "px-4 py-2 text-white bg-blue-500 rounded-full hover:bg-blue-600", children: "Add to Cart" })] })] })] }, product.id))) }) })] }));
};
export default Products;
