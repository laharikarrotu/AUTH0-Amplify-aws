export type Maybe<T> = T | null;

export type GraphQLQuery = {
  listProducts?: {
    items: Array<{
      id: string;
      name: string;
      description?: string | null;
      price: number;
      inStock: boolean;
      categoryId: string;
      storeId: string;
      imageUrl?: string | null;
      brand: string;
      originalUrl: string;
      createdAt: string;
      updatedAt: string;
    }>;
    nextToken?: string | null;
  };
};

export interface Category {
  id: string;
  name: string;
  description?: string | null;
  products?: {
    items: Product[];
    nextToken?: string | null;
  } | null;
  createdAt?: string;
  updatedAt?: string;
}

export interface Product {
  id: string;
  name: string;
  description?: string | null;
  price: number;
  inStock: boolean;
  categoryId: string;
  storeId: string;
  imageUrl?: string | null;
  brand: string;
  originalUrl: string;
  category?: Category | null;
  store?: Store | null;
  createdAt: string;
  updatedAt: string;
}

export interface Store {
  id: string;
  name: string;
  description?: string | null;
  products?: {
    items: Product[];
    nextToken?: string | null;
  } | null;
  location?: string | null;
  contactNumber?: string | null;
  createdAt?: string;
  updatedAt?: string;
}

export interface User {
  id: string;
  name: string;
  email: string;
  orders?: {
    items: Order[];
    nextToken?: string | null;
  } | null;
  createdAt?: string;
  updatedAt?: string;
}

export interface Order {
  id: string;
  userId: string;
  user?: User | null;
  products?: {
    items: OrderProduct[];
    nextToken?: string | null;
  } | null;
  total: number;
  status: string;
  createdAt?: string;
  updatedAt?: string;
}

export interface OrderProduct {
  id: string;
  orderId: string;
  productId: string;
  order?: Order | null;
  product?: Product | null;
  quantity: number;
  price: number;
  createdAt?: string;
  updatedAt?: string;
}

export interface Review {
  id: string;
  userId: string;
  productId: string;
  user?: User | null;
  product?: Product | null;
  rating: number;
  content?: string | null;
  createdAt?: string;
  updatedAt?: string;
}

export type ModelCategoryConditionInput = {
  name?: ModelStringInput | null;
  description?: ModelStringInput | null;
  and?: Array<ModelCategoryConditionInput | null> | null;
  or?: Array<ModelCategoryConditionInput | null> | null;
  not?: ModelCategoryConditionInput | null;
};

export type ModelStringInput = {
  ne?: string | null;
  eq?: string | null;
  le?: string | null;
  lt?: string | null;
  ge?: string | null;
  gt?: string | null;
  contains?: string | null;
  notContains?: string | null;
  between?: Array<string | null> | null;
  beginsWith?: string | null;
  attributeExists?: boolean | null;
  attributeType?: ModelAttributeTypes | null;
  size?: ModelSizeInput | null;
};

export type ModelAttributeTypes =
  | "binary"
  | "binarySet"
  | "bool"
  | "list"
  | "map"
  | "number"
  | "numberSet"
  | "string"
  | "stringSet"
  | "_null";

export type ModelSizeInput = {
  ne?: number | null;
  eq?: number | null;
  le?: number | null;
  lt?: number | null;
  ge?: number | null;
  gt?: number | null;
  between?: Array<number | null> | null;
};

export type UpdateCategoryInput = {
  id: string;
  name?: string | null;
  description?: string | null;
};

export type CreateCategoryInput = {
  name: string;
  description?: string | null;
};

export type DeleteCategoryInput = {
  id: string;
};

export type ModelCategoryFilterInput = {
  id?: ModelIDInput | null;
  name?: ModelStringInput | null;
  description?: ModelStringInput | null;
  and?: Array<ModelCategoryFilterInput | null> | null;
  or?: Array<ModelCategoryFilterInput | null> | null;
  not?: ModelCategoryFilterInput | null;
};

export type ModelIDInput = {
  ne?: string | null;
  eq?: string | null;
  le?: string | null;
  lt?: string | null;
  ge?: string | null;
  gt?: string | null;
  contains?: string | null;
  notContains?: string | null;
  between?: Array<string | null> | null;
  beginsWith?: string | null;
  attributeExists?: boolean | null;
  attributeType?: ModelAttributeTypes | null;
  size?: ModelSizeInput | null;
};