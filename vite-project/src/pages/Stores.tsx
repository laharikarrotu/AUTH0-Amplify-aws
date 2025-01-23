// src/pages/Stores.tsx
import { fetchProducts } from '../services/shopifyClient';  // Change from fetchStores
import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Store } from '../types/store';
import { fetchStores } from '../services/storeIntegration';

export function StoresPage() {
  const [stores, setStores] = useState<Store[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategories, setSelectedCategories] = useState<string[]>([]);

  useEffect(() => {
    const loadStores = async () => {
      try {
        const fetchedProducts = await fetchProducts();
        setStores(fetchedProducts);
        setLoading(false);
      } catch (err) {
        setError('Failed to fetch stores');
        setLoading(false);
      }
    };
    loadStores();
  }, []);

  const allCategories = React.useMemo(() => {
    return Array.from(
      new Set(stores.flatMap(store => store.categories || []))
    );
  }, [stores]);

  const filteredStores = stores.filter(store => 
    store.name.toLowerCase().includes(searchTerm.toLowerCase()) &&
    (selectedCategories.length === 0 || 
     selectedCategories.some(cat => 
       store.categories?.includes(cat)
     ))
  );

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <motion.div 
          animate={{ rotate: 360 }}
          transition={{ 
            repeat: Infinity, 
            duration: 1, 
            ease: "linear" 
          }}
          className="w-16 h-16 border-4 border-blue-500 rounded-full"
        />
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex items-center justify-center min-h-screen text-center text-red-500">
        {error}
      </div>
    );
  }

  return (
    <div className="min-h-screen px-4 py-12 bg-gradient-to-br from-gray-50 to-gray-100">
      <div className="container mx-auto">
        <motion.h1 
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-8 text-4xl font-bold text-center text-gray-800"
        >
          Our Partnered Stores
        </motion.h1>

        {/* Search and Filter Section */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          className="max-w-2xl mx-auto mb-12"
        >
          <input 
            type="text"
            placeholder="Search stores..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full p-3 transition-all duration-300 border-2 border-blue-200 rounded-full focus:outline-none focus:ring-2 focus:ring-blue-400"
          />

          {/* Category Filters */}
          <div className="flex flex-wrap justify-center gap-2 mt-4">
            {allCategories.map(category => (
              <motion.button
                key={category}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => 
                  setSelectedCategories(prev => 
                    prev.includes(category)
                      ? prev.filter(c => c !== category)
                      : [...prev, category]
                  )
                }
                className={`
                  px-4 py-2 rounded-full text-sm transition-colors duration-300
                  ${selectedCategories.includes(category) 
                    ? 'bg-blue-500 text-white' 
                    : 'bg-gray-200 text-gray-700 hover:bg-gray-300'}
                `}
              >
                {category}
              </motion.button>
            ))}
          </div>
        </motion.div>

        {/* Stores Grid */}
        {filteredStores.length > 0 ? (
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            {filteredStores.map((store, index) => (
              <motion.div
                key={store.id}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ 
                  delay: index * 0.1,
                  duration: 0.3 
                }}
                className="overflow-hidden transition-transform transform bg-white shadow-lg rounded-2xl hover:scale-105"
              >
                <div className="p-6">
                  <div className="flex items-center mb-4">
                    <img 
                      src={store.logo} 
                      alt={`${store.name} logo`} 
                      className="object-contain w-16 h-16 mr-4 rounded-lg"
                    />
                    <h2 className="text-2xl font-bold text-gray-800">
                      {store.name}
                    </h2>
                  </div>
                  <p className="mb-4 text-gray-600">
                    {store.description}
                  </p>
                  <div className="space-y-2 text-gray-700">
                    <div>
                      📍 Categories: {store.categories?.join(', ')}
                    </div>
                    <div>
                      🌐 Website: 
                      <a 
                        href={store.website} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="ml-2 text-blue-600 hover:underline"
                      >
                        Visit Store
                      </a>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        ) : (
          <div className="text-xl text-center text-gray-500">
            No stores found matching your search.
          </div>
        )}
      </div>
    </div>
  );
}