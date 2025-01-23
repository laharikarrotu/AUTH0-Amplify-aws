import { useState, useEffect } from 'react';
import { Product } from '../types';
import { useCart } from '../contexts/CartContext';
// Mock data for testing
const mockProducts: Product[] = [
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
  const [products, setProducts] = useState<Product[]>([]);
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
      } catch (error) {
        console.error('Error loading products:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  const filteredProducts = products.filter(product => 
    product.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  console.log('Rendering with:', {
    loading,
    productsCount: products.length,
    filteredCount: filteredProducts.length
  });

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div>Loading products...</div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-100">
      <div className="container px-4 py-8 mx-auto">
        <h1 className="mb-8 text-3xl font-bold">Available Products</h1>
        
        {/* Search Bar */}
        <div className="mb-8">
          <input
            type="text"
            placeholder="Search products..."
            className="w-full p-3 border rounded-lg shadow-sm"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>

        {/* Product Grid */}
        {filteredProducts.length === 0 ? (
          <div className="py-8 text-center">
            No products found
          </div>
        ) : (
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {filteredProducts.map((product) => (
              <div
                key={product.id}
                className="overflow-hidden transition-shadow bg-white rounded-lg shadow-md hover:shadow-lg"
              >
                {product.imageUrl && (
                  <img
                    src={product.imageUrl}
                    alt={product.name}
                    className="object-cover w-full h-48"
                  />
                )}
                <div className="p-4">
                  <h3 className="text-lg font-bold">{product.name}</h3>
                  <p className="text-gray-600">{product.brand}</p>
                  <p className="mt-2 text-lg font-semibold">${product.price.toFixed(2)}</p>
                  <button 
                    className="w-full py-2 mt-4 text-white transition-colors bg-blue-600 rounded hover:bg-blue-700"
                    
                    onClick={() => window.open(product.originalUrl, '_blank')}
                  >
                    View Details
                  </button>
                  <button
      className="w-full py-2 mt-4 text-white transition-colors bg-blue-600 rounded hover:bg-blue-700"
      onClick={() => addToCart(product)}
    >
      Add to Cart
    </button>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}