export interface Product {
  id: string;
  name: string;
  description?: string;
  price: number;
  inStock: boolean;
  categoryId?: string;
  storeId: string;
  imageUrl?: string;
  brand: string;              // Added brand
  originalUrl: string;        // Added originalUrl
}

export interface Store {
  id: string;
  name: string;
  description?: string;
  location?: string;
  contactNumber?: string;
}

export interface Category {
  id: string;
  name: string;
  description?: string;
  products?: {
    items: Product[];
  };
}