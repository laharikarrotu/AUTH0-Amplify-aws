import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { generateClient } from 'aws-amplify/api';
import { listProducts } from '../graphql/queries';
// Import our custom UI components
import { Button } from '../components/ui/Button';
import { Card } from '../components/ui/Card';
import { SearchInput } from '../components/ui/SearchInput';
// Import theme configurations
import { colorPalette, animationVariants, createTransition } from '../config/theme';
// Icons from lucide-react
import { Search, Sparkles, TrendingUp, ShoppingBag } from 'lucide-react';
export function HomePage() {
    const [featuredProducts, setFeaturedProducts] = useState([]);
    const [loading, setLoading] = useState(true);
    const navigate = useNavigate();
    const client = generateClient();
    // AI and Trending Sections Data
    const aiSections = [
        {
            title: "Personalized Styling",
            icon: _jsx(Sparkles, { className: "w-10 h-10 text-purple-600" }),
            description: "AI-powered outfit recommendations"
        },
        {
            title: "Trend Analysis",
            icon: _jsx(TrendingUp, { className: "w-10 h-10 text-pink-600" }),
            description: "Real-time fashion trend insights"
        },
        {
            title: "Wardrobe Optimization",
            icon: _jsx(ShoppingBag, { className: "w-10 h-10 text-blue-600" }),
            description: "Smart shopping suggestions"
        }
    ];
    useEffect(() => {
        const fetchFeaturedProducts = async () => {
            try {
                setLoading(true);
                const result = await client.graphql({
                    query: listProducts,
                    variables: { limit: 4 }
                });
                if (result.data?.listProducts?.items) {
                    setFeaturedProducts(result.data.listProducts.items);
                }
            }
            catch (error) {
                console.error('Error fetching featured products:', error);
            }
            finally {
                setLoading(false);
            }
        };
        fetchFeaturedProducts();
    }, []);
    return (_jsxs(motion.div, { initial: "initial", animate: "animate", exit: "exit", variants: animationVariants.fade, className: "min-h-screen bg-gradient-to-br from-purple-50 to-pink-50", children: [_jsx("div", { className: "relative px-4 py-20 text-center", style: {
                    background: `linear-gradient(135deg, ${colorPalette.primary.light}, ${colorPalette.secondary.light})`,
                    clipPath: 'polygon(0 0, 100% 0, 100% 85%, 0 100%)'
                }, children: _jsxs(motion.div, { initial: { opacity: 0, y: 50 }, animate: { opacity: 1, y: 0 }, transition: createTransition(0.8), className: "max-w-3xl mx-auto text-white", children: [_jsx("h1", { className: "mb-6 text-5xl font-bold drop-shadow-lg", children: "Discover Your Unique Style" }), _jsx("p", { className: "max-w-2xl mx-auto mb-10 text-xl", children: "Personalized Fashion Recommendations Powered by AI" }), _jsx(Button, { variant: "primary", onClick: () => navigate('/products'), children: "Explore Collection" })] }) }), _jsxs("section", { className: "container px-4 py-16 mx-auto", children: [_jsx(motion.h2, { initial: { opacity: 0 }, animate: { opacity: 1 }, transition: createTransition(0.6), className: "mb-12 text-4xl font-bold text-center text-gray-800", children: "AI-Powered Fashion Insights" }), _jsx("div", { className: "grid gap-8 md:grid-cols-3", children: aiSections.map((section, index) => (_jsx(Card, { className: "p-6 text-center hover:shadow-xl", children: _jsxs(motion.div, { initial: { opacity: 0, y: 50 }, animate: { opacity: 1, y: 0 }, transition: createTransition(0.6, index * 0.2), children: [_jsx("div", { className: "flex justify-center mb-4", children: section.icon }), _jsx("h3", { className: "mb-2 text-xl font-semibold text-gray-800", children: section.title }), _jsx("p", { className: "text-gray-600", children: section.description })] }) }, section.title))) })] }), _jsxs("section", { className: "container px-4 py-16 mx-auto bg-gray-50", children: [_jsx(motion.h2, { className: "mb-12 text-4xl font-bold text-center text-gray-800", initial: { opacity: 0 }, animate: { opacity: 1 }, transition: createTransition(0.6), children: "Featured Products" }), _jsx("div", { className: "max-w-xl mx-auto mb-12", children: _jsx(SearchInput, { placeholder: "Search products...", icon: _jsx(Search, { className: "text-gray-400" }) }) }), loading ? (_jsx("div", { className: "flex justify-center", children: _jsx(motion.div, { animate: { rotate: 360 }, transition: {
                                repeat: Infinity,
                                duration: 1,
                                ease: "linear"
                            }, className: "w-16 h-16 border-4 border-purple-500 rounded-full" }) })) : (_jsx("div", { className: "grid gap-6 md:grid-cols-4", children: featuredProducts.map((product, index) => (_jsx(Card, { className: "overflow-hidden", children: _jsxs(motion.div, { initial: { opacity: 0, scale: 0.9 }, animate: { opacity: 1, scale: 1 }, transition: createTransition(0.5, index * 0.1), children: [product.imageUrl && (_jsx("img", { src: product.imageUrl, alt: product.name, className: "object-cover w-full h-48" })), _jsxs("div", { className: "p-4", children: [_jsx("h3", { className: "mb-2 text-lg font-bold", children: product.name }), _jsx("p", { className: "mb-2 text-gray-600", children: product.description }), _jsxs("div", { className: "flex items-center justify-between", children: [_jsxs("span", { className: "text-xl font-semibold text-purple-600", children: ["$", product.price.toFixed(2)] }), _jsx(Button, { variant: "secondary", onClick: () => navigate(`/products/${product.id}`), children: "View" })] })] })] }) }, product.id))) }))] }), _jsx("section", { className: "py-16 bg-gradient-to-r from-purple-600 to-pink-600", children: _jsxs(motion.div, { className: "container px-4 mx-auto text-center text-white", initial: { opacity: 0, y: 50 }, animate: { opacity: 1, y: 0 }, transition: createTransition(0.6), children: [_jsx("h2", { className: "mb-4 text-3xl font-bold", children: "Stay Ahead of Fashion Trends" }), _jsx("p", { className: "max-w-xl mx-auto mb-8", children: "Subscribe to our newsletter and get personalized style recommendations, exclusive offers, and trend insights." }), _jsxs("div", { className: "flex max-w-md mx-auto space-x-4", children: [_jsx(SearchInput, { placeholder: "Enter your email", className: "flex-grow" }), _jsx(Button, { variant: "primary", children: "Subscribe" })] })] }) })] }));
}
