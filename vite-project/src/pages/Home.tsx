import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { generateClient } from 'aws-amplify/api';
import { listProducts } from '../graphql/queries';
import { Product } from '../types';

// Import our custom UI components
import { Button } from '../components/ui/Button';
import { Card } from '../components/ui/Card';
import { SearchInput } from '../components/ui/SearchInput';

// Import theme configurations
import { colorPalette, animationVariants, createTransition } from '../config/theme';

// Icons from lucide-react
import { Search, Sparkles, TrendingUp, ShoppingBag } from 'lucide-react';

// Type for GraphQL response
type GraphQLResponse = {
  data?: {
    listProducts?: {
      items: Product[];
      nextToken?: string | null;
    };
  };
};

export function HomePage() {
  const [featuredProducts, setFeaturedProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();
  const client = generateClient();

  // AI and Trending Sections Data
  const aiSections = [
    { 
      title: "Personalized Styling", 
      icon: <Sparkles className="w-10 h-10 text-purple-600" />,
      description: "AI-powered outfit recommendations"
    },
    { 
      title: "Trend Analysis", 
      icon: <TrendingUp className="w-10 h-10 text-pink-600" />,
      description: "Real-time fashion trend insights"
    },
    { 
      title: "Wardrobe Optimization", 
      icon: <ShoppingBag className="w-10 h-10 text-blue-600" />,
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
        }) as GraphQLResponse;
        
        if (result.data?.listProducts?.items) {
          setFeaturedProducts(result.data.listProducts.items);
        }
      } catch (error) {
        console.error('Error fetching featured products:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchFeaturedProducts();
  }, []);


  return (
    <motion.div 
      initial="initial"
      animate="animate"
      exit="exit"
      variants={animationVariants.fade}
      className="min-h-screen bg-gradient-to-br from-purple-50 to-pink-50"
    >
      {/* Hero Section */}
      <div 
        className="relative px-4 py-20 text-center"
        style={{
          background: `linear-gradient(135deg, ${colorPalette.primary.light}, ${colorPalette.secondary.light})`,
          clipPath: 'polygon(0 0, 100% 0, 100% 85%, 0 100%)'
        }}
      >
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={createTransition(0.8)}
          className="max-w-3xl mx-auto text-white"
        >
          <h1 className="mb-6 text-5xl font-bold drop-shadow-lg">
            Discover Your Unique Style
          </h1>
          <p className="max-w-2xl mx-auto mb-10 text-xl">
            Personalized Fashion Recommendations Powered by AI
          </p>
          <Button 
            variant="primary"
            onClick={() => navigate('/products')}
          >
            Explore Collection
          </Button>
        </motion.div>
      </div>

      {/* AI Services Section */}
      <section className="container px-4 py-16 mx-auto">
        <motion.h2 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={createTransition(0.6)}
          className="mb-12 text-4xl font-bold text-center text-gray-800"
        >
          AI-Powered Fashion Insights
        </motion.h2>
        <div className="grid gap-8 md:grid-cols-3">
          {aiSections.map((section, index) => (
            <Card 
              key={section.title}
              className="p-6 text-center hover:shadow-xl"
            >
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={createTransition(0.6, index * 0.2)}
              >
                <div className="flex justify-center mb-4">
                  {section.icon}
                </div>
                <h3 className="mb-2 text-xl font-semibold text-gray-800">
                  {section.title}
                </h3>
                <p className="text-gray-600">
                  {section.description}
                </p>
              </motion.div>
            </Card>
          ))}
        </div>
      </section>

      {/* Featured Products */}
      <section className="container px-4 py-16 mx-auto bg-gray-50">
        <motion.h2 
          className="mb-12 text-4xl font-bold text-center text-gray-800"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={createTransition(0.6)}
        >
          Featured Products
        </motion.h2>
        
        {/* Search Input */}
        <div className="max-w-xl mx-auto mb-12">
          <SearchInput 
            placeholder="Search products..."
            icon={<Search className="text-gray-400" />}
          />
        </div>

        {loading ? (
          <div className="flex justify-center">
            <motion.div 
              animate={{ rotate: 360 }}
              transition={{ 
                repeat: Infinity, 
                duration: 1, 
                ease: "linear" 
              }}
              className="w-16 h-16 border-4 border-purple-500 rounded-full"
            />
          </div>
        ) : (
          <div className="grid gap-6 md:grid-cols-4">
            {featuredProducts.map((product, index) => (
              <Card 
                key={product.id}
                className="overflow-hidden"
              >
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={createTransition(0.5, index * 0.1)}
                >
                  {product.imageUrl && (
                    <img 
                      src={product.imageUrl} 
                      alt={product.name} 
                      className="object-cover w-full h-48"
                    />
                  )}
                  <div className="p-4">
                    <h3 className="mb-2 text-lg font-bold">
                      {product.name}
                    </h3>
                    <p className="mb-2 text-gray-600">
                      {product.description}
                    </p>
                    <div className="flex items-center justify-between">
                      <span className="text-xl font-semibold text-purple-600">
                        ${product.price.toFixed(2)}
                      </span>
                      <Button 
                        variant="secondary" 
                        onClick={() => navigate(`/products/${product.id}`)}
                      >
                        View
                      </Button>
                    </div>
                  </div>
                </motion.div>
              </Card>
            ))}
          </div>
        )}
      </section>

      {/* Newsletter Section */}
      <section className="py-16 bg-gradient-to-r from-purple-600 to-pink-600">
        <motion.div 
          className="container px-4 mx-auto text-center text-white"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={createTransition(0.6)}
        >
          <h2 className="mb-4 text-3xl font-bold">
            Stay Ahead of Fashion Trends
          </h2>
          <p className="max-w-xl mx-auto mb-8">
            Subscribe to our newsletter and get personalized style recommendations, exclusive offers, and trend insights.
          </p>
          <div className="flex max-w-md mx-auto space-x-4">
            <SearchInput 
              placeholder="Enter your email"
              className="flex-grow"
            />
            <Button variant="primary">
              Subscribe
            </Button>
          </div>
        </motion.div>
      </section>
    </motion.div>
  );
}