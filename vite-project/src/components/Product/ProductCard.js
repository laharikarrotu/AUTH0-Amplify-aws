import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
export function ProductCard({ product, onAddToCart }) {
    return (_jsxs("div", { className: "border rounded-lg shadow-lg p-4", children: [product.imageUrl && (_jsx("img", { src: product.imageUrl, alt: product.name, className: "w-full h-48 object-cover mb-4 rounded" })), _jsx("h3", { className: "text-lg font-bold", children: product.name }), _jsx("p", { className: "text-gray-600 mt-2", children: product.description }), _jsxs("p", { className: "font-semibold mt-2", children: ["$", product.price] }), _jsxs("div", { className: "flex justify-between items-center mt-4", children: [_jsx("span", { className: `${product.inStock ? 'text-green-600' : 'text-red-600'}`, children: product.inStock ? "In Stock" : "Out of Stock" }), _jsx("button", { onClick: () => onAddToCart(product), disabled: !product.inStock, className: `px-4 py-2 rounded ${product.inStock
                            ? 'bg-blue-600 text-white hover:bg-blue-700'
                            : 'bg-gray-400 cursor-not-allowed'}`, children: "Add to Cart" })] })] }));
}
