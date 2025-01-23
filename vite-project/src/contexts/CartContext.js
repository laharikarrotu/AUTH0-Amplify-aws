import { jsx as _jsx } from "react/jsx-runtime";
import React, { createContext, useState, useContext } from 'react';
const CartContext = createContext(undefined);
export const CartProvider = ({ children }) => {
    const [cart, setCart] = useState(() => {
        // Initialize cart from localStorage
        const savedCart = localStorage.getItem('cart');
        return savedCart ? JSON.parse(savedCart) : [];
    });
    // Update localStorage when cart changes
    React.useEffect(() => {
        localStorage.setItem('cart', JSON.stringify(cart));
    }, [cart]);
    const addToCart = (product) => {
        setCart(currentCart => {
            const existingItem = currentCart.find(item => item.id === product.id);
            if (existingItem) {
                return currentCart.map(item => item.id === product.id
                    ? { ...item, quantity: item.quantity + 1 }
                    : item);
            }
            return [...currentCart, { ...product, quantity: 1 }];
        });
    };
    const removeFromCart = (productId) => {
        setCart(currentCart => currentCart.filter(item => item.id !== productId));
    };
    const updateQuantity = (productId, quantity) => {
        setCart(currentCart => quantity > 0
            ? currentCart.map(item => item.id === productId
                ? { ...item, quantity }
                : item)
            : currentCart.filter(item => item.id !== productId));
    };
    const clearCart = () => {
        setCart([]);
    };
    const getTotalItems = () => {
        return cart.reduce((total, item) => total + item.quantity, 0);
    };
    const getTotalPrice = () => {
        return cart.reduce((total, item) => total + (item.price * item.quantity), 0);
    };
    return (_jsx(CartContext.Provider, { value: {
            cart,
            addToCart,
            removeFromCart,
            updateQuantity,
            clearCart,
            getTotalItems,
            getTotalPrice
        }, children: children }));
};
export const useCart = () => {
    const context = useContext(CartContext);
    if (context === undefined) {
        throw new Error('useCart must be used within a CartProvider');
    }
    return context;
};
