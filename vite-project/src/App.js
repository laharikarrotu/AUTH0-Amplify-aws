import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
// src/App.tsx
import { Routes, Route } from 'react-router-dom';
import { CartProvider } from './contexts/CartContext';
import { Auth0Provider } from '@auth0/auth0-react';
import { Link } from 'react-router-dom';
import { AuthProvider } from './contexts/AuthContext';
import Products from './pages/Products';
import { LoginButton } from './components/LoginButton';
import { auth0Config } from './config/auth0-config';
import { HomePage } from './pages/Home';
import { CartPage } from './pages/Cart';
import { CategoriesPage } from './pages/Categories';
import { StoresPage } from './pages/Stores';
import { CallbackPage } from './pages/Callback';
import { VoiceAssistant } from './components/VoiceAssistant';
import { motion } from 'framer-motion';
function App() {
    return (_jsx(Auth0Provider, { domain: auth0Config.domain, clientId: auth0Config.clientId, authorizationParams: {
            redirect_uri: window.location.origin,
            audience: auth0Config.audience
        }, useRefreshTokens: true, cacheLocation: "localstorage", children: _jsx(AuthProvider, { children: _jsx(CartProvider, { children: _jsxs(motion.div, { initial: { opacity: 0 }, animate: { opacity: 1 }, className: "min-h-screen bg-slate-50", children: [_jsx("nav", { className: "sticky top-0 z-50 p-4 shadow-lg bg-gradient-to-r from-slate-800 to-slate-900", children: _jsxs("div", { className: "container flex flex-col items-center justify-between mx-auto md:flex-row", children: [_jsx(motion.h1, { whileHover: { scale: 1.05 }, className: "mb-4 text-2xl font-bold text-white md:mb-0", children: "Multiverse" }), _jsx("div", { className: "flex flex-col items-center space-y-4 md:flex-row md:space-y-0 md:space-x-8", children: [
                                            ['/', 'Home'],
                                            ['/products', 'Products'],
                                            ['/cart', 'Cart'],
                                            ['/categories', 'Categories'],
                                            ['/stores', 'Stores']
                                        ].map(([path, label]) => (_jsx(motion.div, { whileHover: { scale: 1.1 }, whileTap: { scale: 0.95 }, children: _jsx(Link, { to: path, className: "text-white transition-colors hover:text-blue-300", children: label }) }, path))) }), _jsxs("div", { className: "flex items-center mt-4 space-x-6 md:mt-0", children: [_jsx(VoiceAssistant, {}), _jsx(LoginButton, {})] })] }) }), _jsx("main", { className: "container px-4 py-8 mx-auto", children: _jsxs(Routes, { children: [_jsx(Route, { path: "/", element: _jsx(HomePage, {}) }), _jsx(Route, { path: "/products", element: _jsx(Products, {}) }), _jsx(Route, { path: "/cart", element: _jsx(CartPage, {}) }), _jsx(Route, { path: "/categories", element: _jsx(CategoriesPage, {}) }), _jsx(Route, { path: "/stores", element: _jsx(StoresPage, {}) }), _jsx(Route, { path: "/callback", element: _jsx(CallbackPage, {}) })] }) })] }) }) }) }));
}
export default App;
