import { useCart } from '../contexts/CartContext';
import { motion } from 'framer-motion';
import { Trash2, Plus, Minus } from 'lucide-react';
import { Button } from '../components/ui/Button';

export function CartPage() {
  const { 
    cart, 
    removeFromCart, 
    updateQuantity, 
    getTotalPrice, 
    clearCart 
  } = useCart();

  if (cart.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center min-h-[60vh]">
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          className="text-center"
        >
          <h2 className="mb-4 text-3xl font-bold text-gray-800">
            Your Cart is Empty
          </h2>
          <p className="mb-6 text-gray-600">
            Looks like you haven't added any items to your cart yet.
          </p>
          <Button 
            variant="primary"
            onClick={() => window.location.href = '/products'}
          >
            Continue Shopping
          </Button>
        </motion.div>
      </div>
    );
  }

  return (
    <div className="container px-4 py-8 mx-auto">
      <h1 className="mb-8 text-4xl font-bold text-center">Your Shopping Cart</h1>
      
      <div className="grid gap-8 md:grid-cols-3">
        {/* Cart Items */}
        <div className="space-y-4 md:col-span-2">
          {cart.map((item) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              className="flex items-center p-4 bg-white rounded-lg shadow-md"
            >
              {item.imageUrl && (
                <img 
                  src={item.imageUrl} 
                  alt={item.name} 
                  className="object-cover w-24 h-24 mr-4 rounded-md"
                />
              )}
              <div className="flex-grow">
                <h3 className="text-xl font-semibold">{item.name}</h3>
                <p className="text-gray-600">${item.price.toFixed(2)}</p>
              </div>
              
              {/* Quantity Controls */}
              <div className="flex items-center space-x-2">
                <Button 
                  variant="outline"
                  className="p-2"
                  onClick={() => updateQuantity(item.id, item.quantity - 1)}
                >
                  <Minus size={16} />
                </Button>
                <span className="px-4">{item.quantity}</span>
                <Button 
                  variant="outline"
                  className="p-2"
                  onClick={() => updateQuantity(item.id, item.quantity + 1)}
                >
                  <Plus size={16} />
                </Button>
                
                <Button 
                  variant="secondary"
                  className="p-2 ml-4"
                  onClick={() => removeFromCart(item.id)}
                >
                  <Trash2 size={16} />
                </Button>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Order Summary */}
        <div className="p-6 bg-white rounded-lg shadow-md">
          <h2 className="mb-4 text-2xl font-bold">Order Summary</h2>
          <div className="space-y-2">
            <div className="flex justify-between">
              <span>Total Items</span>
              <span>{cart.reduce((total, item) => total + item.quantity, 0)}</span>
            </div>
            <div className="flex justify-between">
              <span>Subtotal</span>
              <span>${getTotalPrice().toFixed(2)}</span>
            </div>
            <div className="flex justify-between mt-4 text-xl font-bold">
              <span>Total</span>
              <span>${getTotalPrice().toFixed(2)}</span>
            </div>
          </div>
          
          <div className="mt-6 space-y-2">
            <Button 
              variant="primary" 
              fullWidth 
              className="mb-2"
            >
              Proceed to Checkout
            </Button>
            <Button 
              variant="outline" 
              fullWidth
              onClick={clearCart}
            >
              Clear Cart
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}