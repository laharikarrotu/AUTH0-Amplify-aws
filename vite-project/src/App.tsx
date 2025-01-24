// src/App.tsx
import { Routes, Route } from 'react-router-dom';
import { CartProvider } from './contexts/CartContext';
import { Auth0Provider } from '@auth0/auth0-react';
import { Link } from 'react-router-dom';
import { AuthProvider } from './contexts/AuthContext';
import Products from './pages/Products';
import { LoginButton } from './components/LoginButton';
import { auth0Config } from './config/auth0-config'; 
import { HomePage } from './pages/Home';
import { CartPage } from './pages/Cart';
import { CategoriesPage } from './pages/Categories';
import { StoresPage } from './pages/Stores';
import { CallbackPage } from './pages/Callback';
import { VoiceAssistant } from './components/VoiceAssistant';
import { motion } from 'framer-motion';

function App() {
 return (
   <Auth0Provider
     domain={auth0Config.domain}
     clientId={auth0Config.clientId}
     authorizationParams={{
       redirect_uri: window.location.origin,
       audience: auth0Config.audience
     }}
     useRefreshTokens={true}
     cacheLocation="localstorage"
   >
     <AuthProvider>
       <CartProvider>
         <motion.div 
           initial={{ opacity: 0 }}
           animate={{ opacity: 1 }}
           className="min-h-screen bg-slate-50"
         >
           <nav className="sticky top-0 z-50 p-4 shadow-lg bg-gradient-to-r from-slate-800 to-slate-900">
             <div className="container flex flex-col items-center justify-between mx-auto md:flex-row">
               <motion.h1 
                 whileHover={{ scale: 1.05 }}
                 className="mb-4 text-2xl font-bold text-white md:mb-0"
               >
                 Multiverse
               </motion.h1>

               <div className="flex flex-col items-center space-y-4 md:flex-row md:space-y-0 md:space-x-8">
                 {[
                   ['/', 'Home'],
                   ['/products', 'Products'],
                   ['/cart', 'Cart'],
                   ['/categories', 'Categories'],
                   ['/stores', 'Stores']
                 ].map(([path, label]) => (
                   <motion.div
                     key={path}
                     whileHover={{ scale: 1.1 }}
                     whileTap={{ scale: 0.95 }}
                   >
                     <Link 
                       to={path}
                       className="text-white transition-colors hover:text-blue-300"
                     >
                       {label}
                     </Link>
                   </motion.div>
                 ))}
               </div>

               <div className="flex items-center mt-4 space-x-6 md:mt-0">
                 <VoiceAssistant />
                 <LoginButton />
               </div>
             </div>
           </nav>

           <main className="container px-4 py-8 mx-auto">
             <Routes>
               <Route path="/" element={<HomePage />} />
               <Route path="/products" element={<Products />} />
               <Route path="/cart" element={<CartPage />} />
               <Route path="/categories" element={<CategoriesPage />} />
               <Route path="/stores" element={<StoresPage />} />
               <Route path="/callback" element={<CallbackPage />} />
             </Routes>
           </main>
         </motion.div>
       </CartProvider>
     </AuthProvider>
   </Auth0Provider>
 );
}

export default App;