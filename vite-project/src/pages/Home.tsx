import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';
import { generateClient } from 'aws-amplify/api';
import { listProducts } from '../graphql/queries';
import { Product } from '../types';
import { useNavigate } from 'react-router-dom';

type GraphQLResponse = {
  data?: {
    listProducts: {
      items: Product[];
      nextToken?: string | null;
    };
  };
};

export function HomePage() {
  const [featuredProducts, setFeaturedProducts] = useState<Product[]>([]);
  const [trendingItems, setTrendingItems] = useState<string[]>([]);
  const [loading, setLoading] = useState(true);
  const [aiSuggestions, setAiSuggestions] = useState<string[]>([]);
  const navigate = useNavigate();
  const client = generateClient();

  useEffect(() => {
    fetchFeaturedProducts();
    simulateAIRecommendations();
    setTrendingItems([
      "Summer Collection 2024",
      "Sustainable Fashion",
      "Minimalist Wardrobe",
      "Athletic Wear"
    ]);
  }, []);

  const fetchFeaturedProducts = async () => {
    try {
      setLoading(true);
      const result = (await client.graphql({
        query: listProducts,
        variables: { limit: 4 }
      })) as GraphQLResponse;
      
      if (result.data?.listProducts.items) {
        setFeaturedProducts(result.data.listProducts.items);
      }
    } catch (error) {
      console.error('Error fetching featured products:', error);
    } finally {
      setLoading(false);
    }
  };

  const simulateAIRecommendations = () => {
    setAiSuggestions([
      "Personalized Style Guide",
      "Color Palette Recommendations",
      "Outfit of the Day",
      "Seasonal Trends"
    ]);
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 0.8 } }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <motion.div 
      className="min-h-screen"
      initial="hidden"
      animate="visible"
      variants={containerVariants}
    >
      {/* Hero Section */}
      <motion.div 
        className="relative h-[70vh] bg-gradient-to-r from-purple-700 to-indigo-800 text-white"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <div className="absolute inset-0 bg-black opacity-40"></div>
        <div className="container relative flex items-center h-full px-4 mx-auto">
          <div className="max-w-2xl">
            <motion.h1 
              className="mb-4 text-5xl font-bold"
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.2 }}
            >
              Discover Your Style
            </motion.h1>
            <motion.p 
              className="mb-8 text-xl"
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.4 }}
            >
              Explore our curated collection of trendsetting fashion
            </motion.p>
            <motion.button 
              onClick={() => navigate('/products')}
              className="px-8 py-3 font-semibold text-purple-700 transition-colors bg-white rounded-full hover:bg-purple-100"
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.6 }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Shop Now
            </motion.button>
          </div>
        </div>
      </motion.div>

      {/* AI-Powered Recommendations */}
      <section className="py-16 bg-gray-50">
        <div className="container px-4 mx-auto">
          <motion.h2 
            className="mb-8 text-3xl font-bold text-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
          >
            AI-Powered Fashion Assistant
          </motion.h2>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
            {aiSuggestions.map((suggestion, index) => (
              <motion.div
                key={suggestion}
                className="p-6 transition-shadow bg-white rounded-lg shadow-lg cursor-pointer hover:shadow-xl"
                variants={itemVariants}
                initial="hidden"
                animate="visible"
                transition={{ delay: index * 0.1 }}
                whileHover={{ scale: 1.03 }}
              >
                <h3 className="mb-2 text-lg font-semibold">{suggestion}</h3>
                <p className="text-gray-600">Personalized for you</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Trending Section */}
      <section className="py-16">
        <div className="container px-4 mx-auto">
          <motion.h2 
            className="mb-8 text-3xl font-bold text-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
          >
            Trending Now
          </motion.h2>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
            {trendingItems.map((item, index) => (
              <motion.div
                key={item}
                className="p-6 transition-shadow bg-white rounded-lg shadow-lg hover:shadow-xl"
                variants={itemVariants}
                initial="hidden"
                animate="visible"
                transition={{ delay: index * 0.1 }}
                whileHover={{ scale: 1.05 }}
              >
                <h3 className="mb-2 text-lg font-semibold">{item}</h3>
                <p className="text-gray-600">Trending in fashion</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-16 bg-gray-50">
        <div className="container px-4 mx-auto">
          <motion.h2 
            className="mb-8 text-3xl font-bold text-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
          >
            Featured Products
          </motion.h2>
          {loading ? (
            <div className="flex justify-center">
              <motion.div
                className="w-16 h-16 border-4 border-purple-500 rounded-full"
                animate={{ rotate: 360 }}
                transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
              />
            </div>
          ) : (
            <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
              {featuredProducts.map((product, index) => (
                <motion.div
                  key={product.id}
                  className="overflow-hidden transition-shadow bg-white rounded-lg shadow-lg hover:shadow-xl"
                  variants={itemVariants}
                  initial="hidden"
                  animate="visible"
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ scale: 1.03 }}
                >
                  {product.imageUrl && (
                    <div className="relative overflow-hidden">
                      <img 
                        src={product.imageUrl} 
                        alt={product.name}
                        className="object-cover w-full h-48 transition-transform duration-300 hover:scale-110"
                      />
                      {!product.inStock && (
                        <div className="absolute top-0 right-0 px-3 py-1 m-2 text-sm text-white bg-red-500 rounded">
                          Out of Stock
                        </div>
                      )}
                    </div>
                  )}
                  <div className="p-4">
                    <h3 className="mb-2 text-lg font-bold">{product.name}</h3>
                    <p className="mb-2 text-gray-600 line-clamp-2">{product.description}</p>
                    <div className="flex items-center justify-between">
                      <p className="text-xl font-semibold text-purple-600">${product.price.toFixed(2)}</p>
                      <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="px-4 py-2 text-white bg-purple-600 rounded-lg hover:bg-purple-700"
                        onClick={() => navigate(`/products/${product.id}`)}
                      >
                        View Details
                      </motion.button>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-16">
        <div className="container px-4 mx-auto">
          <motion.div 
            className="p-8 text-center bg-purple-100 rounded-lg"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            <h2 className="mb-4 text-2xl font-bold">Stay Updated</h2>
            <p className="mb-6 text-gray-600">Get personalized style recommendations and exclusive offers</p>
            <div className="flex flex-col items-center justify-center gap-4 md:flex-row">
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full px-4 py-2 border rounded-lg md:w-64"
              />
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-6 py-2 text-white bg-purple-600 rounded-lg hover:bg-purple-700"
              >
                Subscribe
              </motion.button>
            </div>
          </motion.div>
        </div>
      </section>
    </motion.div>
  );
}