export const listProducts = /* GraphQL */ `
  query ListProducts(
    $filter: ModelProductFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listProducts(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
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
      nextToken
    }
  }
`;
