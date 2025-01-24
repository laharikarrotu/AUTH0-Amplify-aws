import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
// src/pages/Home.tsx
import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { generateClient } from 'aws-amplify/api';
import { Search, Sparkles, TrendingUp, ShoppingBag } from 'lucide-react';
import { Button } from '../components/ui/Button';
import { Card } from '../components/ui/Card';
import { SearchInput } from '../components/ui/SearchInput';
import { listProducts } from '../graphql/queries';
export function HomePage() {
    const [featuredProducts, setFeaturedProducts] = useState([]);
    const [loading, setLoading] = useState(true);
    const navigate = useNavigate();
    const client = generateClient();
    const aiSections = [
        {
            title: "Personalized Styling",
            icon: _jsx(Sparkles, { className: "w-10 h-10 text-indigo-600" }),
            description: "AI-powered outfit recommendations"
        },
        {
            title: "Trend Analysis",
            icon: _jsx(TrendingUp, { className: "w-10 h-10 text-rose-600" }),
            description: "Real-time fashion trend insights"
        },
        {
            title: "Wardrobe Optimization",
            icon: _jsx(ShoppingBag, { className: "w-10 h-10 text-emerald-600" }),
            description: "Smart shopping suggestions"
        }
    ];
    // Rest of your component code remains same
    useEffect(() => {
        const fetchFeaturedProducts = async () => {
            try {
                const result = await client.graphql({
                    query: listProducts,
                    variables: { limit: 4 }
                });
                setFeaturedProducts(result.data?.listProducts?.items || []);
            }
            catch (error) {
                console.error('Error:', error);
            }
            finally {
                setLoading(false);
            }
        };
        fetchFeaturedProducts();
    }, []);
    // JSX remains same
    return (_jsxs(motion.div, { initial: { opacity: 0 }, animate: { opacity: 1 }, exit: { opacity: 0 }, className: "min-h-screen bg-gradient-to-br from-slate-50 to-white", children: [_jsx("div", { className: "relative px-4 py-20 text-center bg-gradient-to-r from-indigo-600 to-purple-600 clip-path-polygon", children: _jsxs(motion.div, { initial: { opacity: 0, y: 50 }, animate: { opacity: 1, y: 0 }, transition: { duration: 0.8 }, className: "max-w-3xl mx-auto text-white", children: [_jsx("h1", { className: "mb-6 text-5xl font-bold drop-shadow-lg", children: "Discover Your Unique Style" }), _jsx("p", { className: "max-w-2xl mx-auto mb-10 text-xl", children: "Personalized Fashion Recommendations Powered by AI" }), _jsx(Button, { variant: "primary", onClick: () => navigate('/products'), className: "text-indigo-600 bg-white hover:bg-indigo-50", children: "Explore Collection" })] }) }), _jsxs("section", { className: "container px-4 py-16 mx-auto", children: [_jsx(motion.h2, { initial: { opacity: 0 }, animate: { opacity: 1 }, className: "mb-12 text-4xl font-bold text-center text-slate-800", children: "AI-Powered Fashion Insights" }), _jsx("div", { className: "grid gap-8 md:grid-cols-3", children: aiSections.map((section, index) => (_jsx(Card, { className: "p-6 text-center transition-all duration-300 hover:shadow-xl", children: _jsxs(motion.div, { initial: { opacity: 0, y: 50 }, animate: { opacity: 1, y: 0 }, transition: { delay: index * 0.2 }, children: [_jsx("div", { className: "flex justify-center mb-4", children: section.icon }), _jsx("h3", { className: "mb-2 text-xl font-semibold text-slate-800", children: section.title }), _jsx("p", { className: "text-slate-600", children: section.description })] }) }, section.title))) })] }), _jsxs("section", { className: "container px-4 py-16 mx-auto", children: [_jsx(motion.h2, { className: "mb-12 text-4xl font-bold text-center text-slate-800", children: "Featured Products" }), _jsx("div", { className: "max-w-xl mx-auto mb-12", children: _jsx(SearchInput, { placeholder: "Search products...", icon: _jsx(Search, { className: "text-slate-400" }) }) }), loading ? (_jsx("div", { className: "flex justify-center", children: _jsx(motion.div, { animate: { rotate: 360 }, transition: { repeat: Infinity, duration: 1 }, className: "w-16 h-16 border-4 border-indigo-500 rounded-full" }) })) : (_jsx("div", { className: "grid gap-6 md:grid-cols-4", children: featuredProducts.map((product, index) => (_jsx(Card, { className: "overflow-hidden", children: _jsxs(motion.div, { initial: { opacity: 0, scale: 0.9 }, animate: { opacity: 1, scale: 1 }, transition: { delay: index * 0.1 }, children: [product.imageUrl && (_jsx("img", { src: product.imageUrl, alt: product.name, className: "object-cover w-full h-48" })), _jsxs("div", { className: "p-4", children: [_jsx("h3", { className: "mb-2 text-lg font-bold text-slate-800", children: product.name }), _jsx("p", { className: "mb-2 text-slate-600", children: product.description }), _jsxs("div", { className: "flex items-center justify-between", children: [_jsxs("span", { className: "text-xl font-semibold text-indigo-600", children: ["$", product.price.toFixed(2)] }), _jsx(Button, { variant: "secondary", onClick: () => navigate(`/products/${product.id}`), children: "View" })] })] })] }) }, product.id))) }))] }), _jsx("section", { className: "py-16 bg-gradient-to-r from-indigo-600 to-purple-600", children: _jsxs(motion.div, { className: "container px-4 mx-auto text-center text-white", initial: { opacity: 0, y: 50 }, animate: { opacity: 1, y: 0 }, children: [_jsx("h2", { className: "mb-4 text-3xl font-bold", children: "Stay Ahead of Fashion Trends" }), _jsx("p", { className: "max-w-xl mx-auto mb-8", children: "Subscribe to our newsletter for personalized style recommendations" }), _jsxs("div", { className: "flex max-w-md mx-auto space-x-4", children: [_jsx(SearchInput, { placeholder: "Enter your email", className: "flex-grow bg-white/10" }), _jsx(Button, { variant: "primary", className: "text-indigo-600 bg-white", children: "Subscribe" })] })] }) })] }));
}
