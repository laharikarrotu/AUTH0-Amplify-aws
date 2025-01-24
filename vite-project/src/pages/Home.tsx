// src/pages/Home.tsx
import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { generateClient, GraphQLResult } from 'aws-amplify/api';
import { Search, Sparkles, TrendingUp, ShoppingBag } from 'lucide-react';
import { Button } from '../components/ui/Button';
import { Card } from '../components/ui/Card';
import { SearchInput } from '../components/ui/SearchInput';
import { listProducts } from '../graphql/queries';

interface Product {
 id: string;
 name: string;
 description: string;
 price: number;
 imageUrl?: string;
}

interface Section {
 title: string;
 icon: JSX.Element;
 description: string;
}

export function HomePage() {
 const [featuredProducts, setFeaturedProducts] = useState<Product[]>([]);
 const [loading, setLoading] = useState(true);
 const navigate = useNavigate();
 const client = generateClient();

 const aiSections: Section[] = [
   {
     title: "Personalized Styling",
     icon: <Sparkles className="w-10 h-10 text-indigo-600" />,
     description: "AI-powered outfit recommendations"
   },
   {
     title: "Trend Analysis",
     icon: <TrendingUp className="w-10 h-10 text-rose-600" />,
     description: "Real-time fashion trend insights"
   },
   {
     title: "Wardrobe Optimization",
     icon: <ShoppingBag className="w-10 h-10 text-emerald-600" />,
     description: "Smart shopping suggestions"
   }
 ];

 // Rest of your component code remains same
 
 useEffect(() => {
   const fetchFeaturedProducts = async () => {
     try {
       const result = await client.graphql({
         query: listProducts,
         variables: { limit: 4 }
       }) as GraphQLResult<{
         listProducts: {
           items: Product[]
         }
       }>;
       
       setFeaturedProducts(result.data?.listProducts?.items || []);
     } catch (error) {
       console.error('Error:', error);
     } finally {
       setLoading(false);
     }
   };
   fetchFeaturedProducts();
 }, []);

 // JSX remains same

 return (
   <motion.div 
     initial={{ opacity: 0 }}
     animate={{ opacity: 1 }}
     exit={{ opacity: 0 }}
     className="min-h-screen bg-gradient-to-br from-slate-50 to-white"
   >
     <div className="relative px-4 py-20 text-center bg-gradient-to-r from-indigo-600 to-purple-600 clip-path-polygon">
       <motion.div
         initial={{ opacity: 0, y: 50 }}
         animate={{ opacity: 1, y: 0 }}
         transition={{ duration: 0.8 }}
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
           className="text-indigo-600 bg-white hover:bg-indigo-50"
         >
           Explore Collection
         </Button>
       </motion.div>
     </div>

     <section className="container px-4 py-16 mx-auto">
       <motion.h2 
         initial={{ opacity: 0 }}
         animate={{ opacity: 1 }}
         className="mb-12 text-4xl font-bold text-center text-slate-800"
       >
         AI-Powered Fashion Insights
       </motion.h2>
       
       <div className="grid gap-8 md:grid-cols-3">
         {aiSections.map((section, index) => (
           <Card
             key={section.title}
             className="p-6 text-center transition-all duration-300 hover:shadow-xl"
           >
             <motion.div
               initial={{ opacity: 0, y: 50 }}
               animate={{ opacity: 1, y: 0 }}
               transition={{ delay: index * 0.2 }}
             >
               <div className="flex justify-center mb-4">
                 {section.icon}
               </div>
               <h3 className="mb-2 text-xl font-semibold text-slate-800">
                 {section.title}
               </h3>
               <p className="text-slate-600">{section.description}</p>
             </motion.div>
           </Card>
         ))}
       </div>
     </section>

     <section className="container px-4 py-16 mx-auto">
       <motion.h2 className="mb-12 text-4xl font-bold text-center text-slate-800">
         Featured Products
       </motion.h2>

       <div className="max-w-xl mx-auto mb-12">
         <SearchInput
           placeholder="Search products..."
           icon={<Search className="text-slate-400" />}
         />
       </div>

       {loading ? (
         <div className="flex justify-center">
           <motion.div
             animate={{ rotate: 360 }}
             transition={{ repeat: Infinity, duration: 1 }}
             className="w-16 h-16 border-4 border-indigo-500 rounded-full"
           />
         </div>
       ) : (
         <div className="grid gap-6 md:grid-cols-4">
           {featuredProducts.map((product, index) => (
             <Card key={product.id} className="overflow-hidden">
               <motion.div
                 initial={{ opacity: 0, scale: 0.9 }}
                 animate={{ opacity: 1, scale: 1 }}
                 transition={{ delay: index * 0.1 }}
               >
                 {product.imageUrl && (
                   <img
                     src={product.imageUrl}
                     alt={product.name}
                     className="object-cover w-full h-48"
                   />
                 )}
                 <div className="p-4">
                   <h3 className="mb-2 text-lg font-bold text-slate-800">
                     {product.name}
                   </h3>
                   <p className="mb-2 text-slate-600">
                     {product.description}
                   </p>
                   <div className="flex items-center justify-between">
                     <span className="text-xl font-semibold text-indigo-600">
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

     <section className="py-16 bg-gradient-to-r from-indigo-600 to-purple-600">
       <motion.div
         className="container px-4 mx-auto text-center text-white"
         initial={{ opacity: 0, y: 50 }}
         animate={{ opacity: 1, y: 0 }}
       >
         <h2 className="mb-4 text-3xl font-bold">
           Stay Ahead of Fashion Trends
         </h2>
         <p className="max-w-xl mx-auto mb-8">
           Subscribe to our newsletter for personalized style recommendations
         </p>
         <div className="flex max-w-md mx-auto space-x-4">
           <SearchInput
             placeholder="Enter your email"
             className="flex-grow bg-white/10"
           />
           <Button variant="primary" className="text-indigo-600 bg-white">
             Subscribe
           </Button>
         </div>
       </motion.div>
     </section>
   </motion.div>
 );
}