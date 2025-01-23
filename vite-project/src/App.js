import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Routes, Route } from 'react-router-dom';
import { CartProvider } from './contexts/CartContext';
import { Auth0Provider } from '@auth0/auth0-react';
import { Link } from 'react-router-dom';
import { AuthProvider } from './contexts/AuthContext';
import { ProductsPage } from './pages/Products';
import { LoginButton } from './components/LoginButton';
import { auth0Config } from './config/auth0-config';
import { HomePage } from './pages/Home';
import { CartPage } from './pages/Cart';
import { CategoriesPage } from './pages/Categories';
import { StoresPage } from './pages/Stores';
import { CallbackPage } from './pages/Callback';
import { VoiceAssistant } from './hooks/useVoiceAssistant';
function App() {
    return (_jsx(Auth0Provider, { domain: auth0Config.domain, clientId: auth0Config.clientId, authorizationParams: {
            redirect_uri: window.location.origin,
            audience: auth0Config.audience
        }, useRefreshTokens: true, cacheLocation: "localstorage", children: _jsx(AuthProvider, { children: _jsx(CartProvider, { children: _jsxs("div", { className: "min-h-screen bg-gray-50", children: [_jsx("nav", { className: "p-4 text-white bg-gray-800", children: _jsxs("div", { className: "container flex items-center justify-between mx-auto", children: [_jsxs("div", { className: "flex space-x-4", children: [_jsx(Link, { to: "/", className: "hover:text-gray-300", children: "Home" }), _jsx(Link, { to: "/products", className: "hover:text-gray-300", children: "Products" }), _jsx(Link, { to: "/cart", className: "hover:text-gray-300", children: "Cart" }), _jsx(Link, { to: "/categories", className: "hover:text-gray-300", children: "Categories" }), _jsx(Link, { to: "/stores", className: "hover:text-gray-300", children: "Stores" })] }), _jsx("h1", { className: "text-xl font-bold", children: "Multiverse" }), _jsx(VoiceAssistant, {}), _jsx(LoginButton, {})] }) }), _jsx("main", { className: "container px-4 py-8 mx-auto", children: _jsxs(Routes, { children: [_jsx(Route, { path: "/", element: _jsx(HomePage, {}) }), _jsx(Route, { path: "/products", element: _jsx(ProductsPage, {}) }), _jsx(Route, { path: "/cart", element: _jsx(CartPage, {}) }), _jsx(Route, { path: "/categories", element: _jsx(CategoriesPage, {}) }), _jsx(Route, { path: "/stores", element: _jsx(StoresPage, {}) }), _jsx(Route, { path: "/callback", element: _jsx(CallbackPage, {}) })] }) })] }) }) }) }));
}
export default App;
