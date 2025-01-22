import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Auth0Provider } from '@auth0/auth0-react';
import { AuthProvider } from './contexts/AuthContext';
import { ProductsPage } from './pages/Products';
import { LoginButton } from './components/LoginButton';
import { auth0Config } from './config/auth0-config';

function App() {
  return (
    <Auth0Provider
      domain={auth0Config.domain}
      clientId={auth0Config.clientId}
      authorizationParams={{
        redirect_uri: window.location.origin
      }}
      useRefreshTokens={true}
      cacheLocation="localstorage"
    >
      <AuthProvider>
        <Router>
          <div className="min-h-screen bg-gray-50">
            <nav className="p-4 text-white bg-gray-800">
              <div className="container flex items-center justify-between mx-auto">
                <h1 className="text-xl font-bold">Your Store</h1>
                <LoginButton />
              </div>
            </nav>
            <main className="container px-4 py-8 mx-auto">
              <Routes>
                <Route path="/" element={<ProductsPage />} />
                {/* Add more routes as needed */}
              </Routes>
            </main>
          </div>
        </Router>
      </AuthProvider>
    </Auth0Provider>
  );
}

export default App;