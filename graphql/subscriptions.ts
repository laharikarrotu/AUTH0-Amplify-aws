import { GraphQLQuery } from '../src/API';

export const onCreateProduct = /* GraphQL */ `
  subscription OnCreateProduct {
    onCreateProduct {
      id
      name
      description
      price
      inStock
      categoryId
      storeId
      imageUrl
      brand
      originalUrl
      createdAt
      updatedAt
    }
  }
`;