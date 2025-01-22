import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';
import { generateClient } from 'aws-amplify/api';
import { listProducts } from 'C:/Users/santh/amplify-new-project/vite-project/graphql/queries.ts';
import { Product } from '../types';

export function HomePage() {
  const [featuredProducts, setFeaturedProducts] = useState<Product[]>([]);
  const [trendingItems, setTrendingItems] = useState<string[]>([]);
  const client = generateClient();

  useEffect(() => {
    fetchFeaturedProducts();
    // Simulated AI-generated trending items
    setTrendingItems([
      "Summer Collection 2024",
      "Sustainable Fashion",
      "Minimalist Wardrobe",
      "Athletic Wear"
    ]);
  }, []);

  const fetchFeaturedProducts = async () => {
    try {
      const response = await client.graphql({
        query: listProducts,
        variables: { limit: 4 }
      });
      setFeaturedProducts(response.data.listProducts.items);
    } catch (error) {
      console.error('Error fetching featured products:', error);
    }
  };

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="relative h-[70vh] bg-gradient-to-r from-purple-700 to-indigo-800 text-white"
      >
        <div className="absolute inset-0 bg-black opacity-40"></div>
        <div className="container relative flex items-center h-full px-4 mx-auto">
          <div className="max-w-2xl">
            <motion.h1 
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="mb-4 text-5xl font-bold"
            >
              Discover Your Style
            </motion.h1>
            <motion.p 
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.4 }}
              className="mb-8 text-xl"
            >
              Explore our curated collection of trendsetting fashion
            </motion.p>
            <motion.button 
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.6 }}
              className="px-8 py-3 font-semibold text-purple-700 transition-colors bg-white rounded-full hover:bg-purple-100"
            >
              Shop Now
            </motion.button>
          </div>
        </div>
      </motion.div>

      {/* AI-Powered Trending Section */}
      <section className="py-16 bg-gray-50">
        <div className="container px-4 mx-auto">
          <h2 className="mb-8 text-3xl font-bold text-center">AI-Powered Trending Topics</h2>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
            {trendingItems.map((item, index) => (
              <motion.div
                key={item}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="p-6 transition-shadow bg-white rounded-lg shadow-lg hover:shadow-xl"
              >
                <h3 className="mb-2 text-lg font-semibold">{item}</h3>
                <p className="text-gray-600">Trending in fashion</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-16">
        <div className="container px-4 mx-auto">
          <h2 className="mb-8 text-3xl font-bold text-center">Featured Products</h2>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
            {featuredProducts.map((product, index) => (
              <motion.div
                key={product.id}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.1 }}
                className="overflow-hidden transition-shadow bg-white rounded-lg shadow-lg hover:shadow-xl"
              >
                {product.imageUrl && (
                  <img 
                    src={product.imageUrl} 
                    alt={product.name}
                    className="object-cover w-full h-48"
                  />
                )}
                <div className="p-4">
                  <h3 className="mb-2 text-lg font-bold">{product.name}</h3>
                  <p className="mb-2 text-gray-600">{product.description}</p>
                  <p className="font-semibold text-purple-600">${product.price}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}