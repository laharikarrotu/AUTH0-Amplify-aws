// src/pages/Products.tsx
import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { fetchProducts } from '../services/shopifyClient';

interface Product {
 id: string;
 title: string;
 price: number;
 brand: string;
 category: string;
 image: string;
}

const filterByPrice = (price: number, range: string): boolean => {
 switch(range) {
   case 'under50': return price < 50;
   case '50to100': return price >= 50 && price <= 100;
   case 'over100': return price > 100;
   default: return true;
 }
};

const Products: React.FC = () => {
 const [products, setProducts] = useState<Product[]>([]);
 const [filters, setFilters] = useState({
   brand: '',
   category: '',
   priceRange: ''
 });
 const [loading, setLoading] = useState(true);

 useEffect(() => {
   const loadProducts = async () => {
     const data = await fetchProducts();
     setProducts(data);
     setLoading(false);
   };
   loadProducts();
 }, []);

 const brands = [...new Set(products.map(p => p.brand))];
 const categories = [...new Set(products.map(p => p.category))];

 const filteredProducts = products.filter(p => 
   (!filters.brand || p.brand === filters.brand) &&
   (!filters.category || p.category === filters.category) &&
   (!filters.priceRange || filterByPrice(p.price, filters.priceRange))
 );

 if (loading) {
   return (
     <div className="flex items-center justify-center min-h-screen">
       <motion.div 
         animate={{ rotate: 360 }}
         transition={{ repeat: Infinity, duration: 1, ease: "linear" }}
         className="w-16 h-16 border-4 border-blue-500 rounded-full"
       />
     </div>
   );
 }

 return (
   <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100">
     <motion.div 
       initial={{ opacity: 0, y: -20 }}
       animate={{ opacity: 1, y: 0 }}
       className="sticky top-0 z-10 p-4 bg-white/80 backdrop-blur-sm"
     >
       <div className="flex flex-wrap gap-4 mx-auto max-w-7xl">
         <select 
           value={filters.brand}
           onChange={e => setFilters({...filters, brand: e.target.value})}
           className="px-4 py-2 border rounded-full border-slate-200 focus:ring-2 focus:ring-blue-500"
         >
           <option value="">All Brands</option>
           {brands.map(brand => (
             <option key={brand} value={brand}>{brand}</option>
           ))}
         </select>

         <select 
           value={filters.category}
           onChange={e => setFilters({...filters, category: e.target.value})}
           className="px-4 py-2 border rounded-full border-slate-200 focus:ring-2 focus:ring-blue-500"
         >
           <option value="">All Categories</option>
           {categories.map(cat => (
             <option key={cat} value={cat}>{cat}</option>
           ))}
         </select>

         <select 
           value={filters.priceRange}
           onChange={e => setFilters({...filters, priceRange: e.target.value})}
           className="px-4 py-2 border rounded-full border-slate-200 focus:ring-2 focus:ring-blue-500"
         >
           <option value="">All Prices</option>
           <option value="under50">Under $50</option>
           <option value="50to100">$50 to $100</option>
           <option value="over100">Over $100</option>
         </select>
       </div>
     </motion.div>

     <div className="p-4 mx-auto max-w-7xl">
       <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
         {filteredProducts.map((product, index) => (
           <motion.div
             key={product.id}
             initial={{ opacity: 0, scale: 0.9 }}
             animate={{ opacity: 1, scale: 1 }}
             transition={{ delay: index * 0.1 }}
             className="transition-all duration-300 bg-white shadow-sm group rounded-2xl hover:shadow-xl"
           >
             <div className="overflow-hidden aspect-square rounded-t-2xl">
               <motion.img 
                 src={product.image}
                 alt={product.title}
                 className="object-cover w-full h-full transition-transform duration-500 transform group-hover:scale-110"
                 whileHover={{ scale: 1.1 }}
               />
             </div>
             
             <div className="p-4">
               <h3 className="mb-2 text-lg font-semibold truncate text-slate-800">
                 {product.title}
               </h3>
               <div className="flex items-center justify-between">
                 <span className="font-medium text-blue-600">
                   ${product.price}
                 </span>
                 <motion.button
                   whileHover={{ scale: 1.05 }}
                   whileTap={{ scale: 0.95 }}
                   className="px-4 py-2 text-white bg-blue-500 rounded-full hover:bg-blue-600"
                 >
                   Add to Cart
                 </motion.button>
               </div>
             </div>
           </motion.div>
         ))}
       </div>
     </div>
   </div>
 );
};

export default Products;