import React from 'react';
import { motion } from 'framer-motion';
import { Store } from 'C:/Users/santh/amplify-new-project/vite-project/src/types/store';

interface CardProps {
  children: React.ReactNode;
  className?: string;
}

interface StoreCardProps {
  store: Store;
  index: number;
}

export const StoreCard = ({ store, index }: StoreCardProps) => (
  <motion.div
    key={store.id}
    initial={{ opacity: 0, scale: 0.9 }}
    animate={{ opacity: 1, scale: 1 }}
    transition={{ delay: index * 0.1, duration: 0.3 }}
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
);
export const Card: React.FC<CardProps> = ({ children, className = '' }) => {
  return (
    <motion.div
      whileHover={{ 
        scale: 1.02,
        boxShadow: '0 10px 20px rgba(0,0,0,0.1)'
      }}
      className={`
        bg-white rounded-xl shadow-md overflow-hidden 
        transition-all duration-300
        ${className}
      `}
    >
      {children}
    </motion.div>
  );
};
