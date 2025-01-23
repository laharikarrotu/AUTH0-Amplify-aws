import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useState, useEffect } from 'react';
import { useCart } from '../contexts/CartContext';
// Mock data for testing
const mockProducts = [
    {
        id: '1',
        name: 'Nike Air Max',
        description: 'Classic athletic shoes',
        price: 129.99,
        inStock: true,
        storeId: 'nike',
        brand: 'Nike',
        originalUrl: '#',
        imageUrl: 'https://via.placeholder.com/400x400'
    },
    {
        id: '2',
        name: 'Adidas Ultraboost',
        description: 'Running shoes',
        price: 179.99,
        inStock: true,
        storeId: 'adidas',
        brand: 'Adidas',
        originalUrl: '#',
        imageUrl: 'https://via.placeholder.com/400x400'
    },
];
export function ProductsPage() {
    const { addToCart } = useCart();
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [searchTerm, setSearchTerm] = useState('');
    useEffect(() => {
        // Simulate API call with mock data
        const fetchProducts = async () => {
            try {
                setLoading(true);
                // Simulate network delay
                await new Promise(resolve => setTimeout(resolve, 1000));
                setProducts(mockProducts);
                console.log('Products loaded:', mockProducts);
            }
            catch (error) {
                console.error('Error loading products:', error);
            }
            finally {
                setLoading(false);
            }
        };
        fetchProducts();
    }, []);
    const filteredProducts = products.filter(product => product.name.toLowerCase().includes(searchTerm.toLowerCase()));
    console.log('Rendering with:', {
        loading,
        productsCount: products.length,
        filteredCount: filteredProducts.length
    });
    if (loading) {
        return (_jsx("div", { className: "flex items-center justify-center min-h-screen", children: _jsx("div", { children: "Loading products..." }) }));
    }
    return (_jsx("div", { className: "min-h-screen bg-gray-100", children: _jsxs("div", { className: "container px-4 py-8 mx-auto", children: [_jsx("h1", { className: "mb-8 text-3xl font-bold", children: "Available Products" }), _jsx("div", { className: "mb-8", children: _jsx("input", { type: "text", placeholder: "Search products...", className: "w-full p-3 border rounded-lg shadow-sm", value: searchTerm, onChange: (e) => setSearchTerm(e.target.value) }) }), filteredProducts.length === 0 ? (_jsx("div", { className: "py-8 text-center", children: "No products found" })) : (_jsx("div", { className: "grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4", children: filteredProducts.map((product) => (_jsxs("div", { className: "overflow-hidden transition-shadow bg-white rounded-lg shadow-md hover:shadow-lg", children: [product.imageUrl && (_jsx("img", { src: product.imageUrl, alt: product.name, className: "object-cover w-full h-48" })), _jsxs("div", { className: "p-4", children: [_jsx("h3", { className: "text-lg font-bold", children: product.name }), _jsx("p", { className: "text-gray-600", children: product.brand }), _jsxs("p", { className: "mt-2 text-lg font-semibold", children: ["$", product.price.toFixed(2)] }), _jsx("button", { className: "w-full py-2 mt-4 text-white transition-colors bg-blue-600 rounded hover:bg-blue-700", onClick: () => window.open(product.originalUrl, '_blank'), children: "View Details" }), _jsx("button", { className: "w-full py-2 mt-4 text-white transition-colors bg-blue-600 rounded hover:bg-blue-700", onClick: () => addToCart(product), children: "Add to Cart" })] })] }, product.id))) }))] }) }));
}
