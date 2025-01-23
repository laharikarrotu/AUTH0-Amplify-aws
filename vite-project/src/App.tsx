import { Routes, Route } from 'react-router-dom';
import { CartProvider } from './contexts/CartContext';
import { Auth0Provider } from '@auth0/auth0-react';
import { Link } from 'react-router-dom';
import { AuthProvider } from './contexts/AuthContext';
import { ProductsPage } from './pages/Products';
import { LoginButton } from './components/LoginButton';
import { auth0Config } from './config/auth0-config';

import { HomePage } from './pages/Home';
import { CartPage } from './pages/Cart';
import { CategoriesPage } from './pages/Categories';
import { StoresPage } from './pages/Stores';
import { CallbackPage } from './pages/Callback';
import { VoiceAssistant } from './hooks/useVoiceAssistant';
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
  
          <div className="min-h-screen bg-gray-50">
            <nav className="p-4 text-white bg-gray-800">
              <div className="container flex items-center justify-between mx-auto">
              <div className="flex space-x-4">
                <Link to="/" className="hover:text-gray-300">Home</Link>
                <Link to="/products" className="hover:text-gray-300">Products</Link>
                <Link to="/cart" className="hover:text-gray-300">Cart</Link>
                <Link to="/categories" className="hover:text-gray-300">Categories</Link>
                <Link to="/stores" className="hover:text-gray-300">Stores</Link>
              </div>
                <h1 className="text-xl font-bold">Multiverse</h1>
                <VoiceAssistant />
                <LoginButton />
              </div>
            </nav>
            <main className="container px-4 py-8 mx-auto">
              <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/products" element={<ProductsPage />} />
              <Route path="/cart" element={<CartPage />} />
              <Route path="/categories" element={<CategoriesPage />} />
              <Route path="/stores" element={<StoresPage />} />
              <Route path="/callback" element={<CallbackPage />} />
              </Routes>
            </main>
          </div>

          </CartProvider>
        
      </AuthProvider>
    </Auth0Provider>
  );
}

export default App;