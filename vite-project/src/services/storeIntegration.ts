import axios from 'axios';
import { Product } from '../types';

// Interface for supported stores
interface StoreConfig {
  name: string;
  type: 'api' | 'scrape';
  baseUrl: string;
  apiKey?: string;
}

// Store configurations
const stores: StoreConfig[] = [
  {
    name: 'Zara',
    type: 'api',
    baseUrl: 'https://api.zara.com/products',
    apiKey: process.env.ZARA_API_KEY
  },
  {
    name: 'HM',
    type: 'api',
    baseUrl: 'https://api2.hm.com',
    apiKey: process.env.HM_API_KEY
  }
  // Add more stores as needed
];

// API Integration Example
async function fetchProductsFromAPI(store: StoreConfig): Promise<Product[]> {
  try {
    const response = await axios.get(`${store.baseUrl}/products`, {
      headers: {
        'Authorization': `Bearer ${store.apiKey}`,
        'Content-Type': 'application/json'
      }
    });
    
    // Transform the response to match our Product interface
    return response.data.map((item: any) => ({
      id: item.id,
      name: item.name,
      description: item.description,
      price: item.price,
      storeId: store.name,
      imageUrl: item.imageUrl,
      inStock: item.inStock,
      brand: store.name,
      originalUrl: item.url
    }));
  } catch (error) {
    console.error(`Error fetching products from ${store.name}:`, error);
    return [];
  }
}

// Cache mechanism to store results
const cache = new Map<string, { data: Product[], timestamp: number }>();
const CACHE_DURATION = 1000 * 60 * 60; // 1 hour

export async function getAllProducts(): Promise<Product[]> {
  let allProducts: Product[] = [];
  
  for (const store of stores) {
    // Check cache first
    const cacheKey = `products_${store.name}`;
    const cachedData = cache.get(cacheKey);
    
    if (cachedData && (Date.now() - cachedData.timestamp) < CACHE_DURATION) {
      allProducts = [...allProducts, ...cachedData.data];
      continue;
    }
    
    // Fetch new data
    const products = await fetchProductsFromAPI(store);
    
    // Update cache
    cache.set(cacheKey, {
      data: products,
      timestamp: Date.now()
    });
    
    allProducts = [...allProducts, ...products];
  }
  
  return allProducts;
}

// Price comparison function
export function findBestPrice(productName: string): Promise<Product[]> {
  return getAllProducts().then(products => 
    products
      .filter(p => p.name.toLowerCase().includes(productName.toLowerCase()))
      .sort((a, b) => a.price - b.price)
  );
}

// Stock checking function
export function checkAvailability(productId: string): Promise<boolean> {
  return getAllProducts().then(products => {
    const product = products.find(p => p.id === productId);
    return product ? product.inStock : false;
  });
}