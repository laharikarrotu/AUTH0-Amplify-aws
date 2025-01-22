
export const createProduct = /* GraphQL */ `
  mutation CreateProduct(
    $input: CreateProductInput!
    $condition: ModelProductConditionInput
  ) {
    createProduct(input: $input, condition: $condition) {
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