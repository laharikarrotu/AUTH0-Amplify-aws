// src/components/Layout/Navbar.tsx
import { Link } from 'react-router-dom';

export function Navbar() {
  return (
    <nav className="bg-gray-800 text-white p-4">
      <div className="container mx-auto flex justify-between items-center">
        <Link to="/" className="text-xl font-bold">Clothing Store</Link>
        <div className="space-x-4">
          <Link to="/" className="hover:text-gray-300">Home</Link>
          <Link to="/stores" className="hover:text-gray-300">Stores</Link>
          <Link to="/products" className="hover:text-gray-300">Products</Link>
          <Link to="/categories" className="hover:text-gray-300">Categories</Link>
          <Link to="/cart" className="hover:text-gray-300">Cart</Link>
        </div>
      </div>
    </nav>
  );
}