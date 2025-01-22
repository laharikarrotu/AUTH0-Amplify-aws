// src/components/Product/ProductCard.tsx
import { Product } from '../../types';

interface ProductCardProps {
  product: Product;
  onAddToCart: (product: Product) => void;
}

export function ProductCard({ product, onAddToCart }: ProductCardProps) {
  return (
    <div className="border rounded-lg shadow-lg p-4">
      {product.imageUrl && (
        <img 
          src={product.imageUrl} 
          alt={product.name}
          className="w-full h-48 object-cover mb-4 rounded"
        />
      )}
      <h3 className="text-lg font-bold">{product.name}</h3>
      <p className="text-gray-600 mt-2">{product.description}</p>
      <p className="font-semibold mt-2">${product.price}</p>
      <div className="flex justify-between items-center mt-4">
        <span className={`${product.inStock ? 'text-green-600' : 'text-red-600'}`}>
          {product.inStock ? "In Stock" : "Out of Stock"}
        </span>
        <button
          onClick={() => onAddToCart(product)}
          disabled={!product.inStock}
          className={`px-4 py-2 rounded ${
            product.inStock 
              ? 'bg-blue-600 text-white hover:bg-blue-700' 
              : 'bg-gray-400 cursor-not-allowed'
          }`}
        >
          Add to Cart
        </button>
      </div>
    </div>
  );
}