/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

import * as APITypes from "../src/API";
type GeneratedQuery<InputType, OutputType> = string & {
  __generatedQueryInput: InputType;
  __generatedQueryOutput: OutputType;
};

export const getUser = /* GraphQL */ `query GetUser($id: ID!) {
  getUser(id: $id) {
    id
    username
    email
    stores {
      nextToken
      __typename
    }
    orders {
      nextToken
      __typename
    }
    reviews {
      nextToken
      __typename
    }
    createdAt
    updatedAt
    owner
    __typename
  }
}
` as GeneratedQuery<APITypes.GetUserQueryVariables, APITypes.GetUserQuery>;
export const listUsers = /* GraphQL */ `query ListUsers(
  $filter: ModelUserFilterInput
  $limit: Int
  $nextToken: String
) {
  listUsers(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      id
      username
      email
      createdAt
      updatedAt
      owner
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<APITypes.ListUsersQueryVariables, APITypes.ListUsersQuery>;
export const getStore = /* GraphQL */ `query GetStore($id: ID!) {
  getStore(id: $id) {
    id
    name
    description
    ownerId
    owner {
      id
      username
      email
      createdAt
      updatedAt
      owner
      __typename
    }
    products {
      nextToken
      __typename
    }
    createdAt
    updatedAt
    userStoresId
    __typename
  }
}
` as GeneratedQuery<APITypes.GetStoreQueryVariables, APITypes.GetStoreQuery>;
export const listStores = /* GraphQL */ `query ListStores(
  $filter: ModelStoreFilterInput
  $limit: Int
  $nextToken: String
) {
  listStores(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      id
      name
      description
      ownerId
      createdAt
      updatedAt
      userStoresId
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.ListStoresQueryVariables,
  APITypes.ListStoresQuery
>;
export const getProduct = /* GraphQL */ `query GetProduct($id: ID!) {
  getProduct(id: $id) {
    id
    name
    description
    price
    inStock
    storeId
    store {
      id
      name
      description
      ownerId
      createdAt
      updatedAt
      userStoresId
      __typename
    }
    categoryId
    category {
      id
      name
      createdAt
      updatedAt
      owner
      __typename
    }
    reviews {
      nextToken
      __typename
    }
    orderProducts {
      nextToken
      __typename
    }
    createdAt
    updatedAt
    storeProductsId
    categoryProductsId
    owner
    __typename
  }
}
` as GeneratedQuery<
  APITypes.GetProductQueryVariables,
  APITypes.GetProductQuery
>;
export const listProducts = /* GraphQL */ `query ListProducts(
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
      storeId
      categoryId
      createdAt
      updatedAt
      storeProductsId
      categoryProductsId
      owner
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.ListProductsQueryVariables,
  APITypes.ListProductsQuery
>;
export const getOrder = /* GraphQL */ `query GetOrder($id: ID!) {
  getOrder(id: $id) {
    id
    userId
    user {
      id
      username
      email
      createdAt
      updatedAt
      owner
      __typename
    }
    products {
      nextToken
      __typename
    }
    totalAmount
    createdAt
    updatedAt
    userOrdersId
    owner
    __typename
  }
}
` as GeneratedQuery<APITypes.GetOrderQueryVariables, APITypes.GetOrderQuery>;
export const listOrders = /* GraphQL */ `query ListOrders(
  $filter: ModelOrderFilterInput
  $limit: Int
  $nextToken: String
) {
  listOrders(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      id
      userId
      totalAmount
      createdAt
      updatedAt
      userOrdersId
      owner
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.ListOrdersQueryVariables,
  APITypes.ListOrdersQuery
>;
export const getOrderProduct = /* GraphQL */ `query GetOrderProduct($id: ID!) {
  getOrderProduct(id: $id) {
    id
    orderId
    productId
    order {
      id
      userId
      totalAmount
      createdAt
      updatedAt
      userOrdersId
      owner
      __typename
    }
    product {
      id
      name
      description
      price
      inStock
      storeId
      categoryId
      createdAt
      updatedAt
      storeProductsId
      categoryProductsId
      owner
      __typename
    }
    quantity
    createdAt
    updatedAt
    productOrderProductsId
    orderProductsId
    owner
    __typename
  }
}
` as GeneratedQuery<
  APITypes.GetOrderProductQueryVariables,
  APITypes.GetOrderProductQuery
>;
export const listOrderProducts = /* GraphQL */ `query ListOrderProducts(
  $filter: ModelOrderProductFilterInput
  $limit: Int
  $nextToken: String
) {
  listOrderProducts(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      id
      orderId
      productId
      quantity
      createdAt
      updatedAt
      productOrderProductsId
      orderProductsId
      owner
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.ListOrderProductsQueryVariables,
  APITypes.ListOrderProductsQuery
>;
export const getCategory = /* GraphQL */ `query GetCategory($id: ID!) {
  getCategory(id: $id) {
    id
    name
    products {
      nextToken
      __typename
    }
    createdAt
    updatedAt
    owner
    __typename
  }
}
` as GeneratedQuery<
  APITypes.GetCategoryQueryVariables,
  APITypes.GetCategoryQuery
>;
export const listCategories = /* GraphQL */ `query ListCategories(
  $filter: ModelCategoryFilterInput
  $limit: Int
  $nextToken: String
) {
  listCategories(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      id
      name
      createdAt
      updatedAt
      owner
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.ListCategoriesQueryVariables,
  APITypes.ListCategoriesQuery
>;
export const getReview = /* GraphQL */ `query GetReview($id: ID!) {
  getReview(id: $id) {
    id
    rating
    comment
    userId
    user {
      id
      username
      email
      createdAt
      updatedAt
      owner
      __typename
    }
    productId
    product {
      id
      name
      description
      price
      inStock
      storeId
      categoryId
      createdAt
      updatedAt
      storeProductsId
      categoryProductsId
      owner
      __typename
    }
    createdAt
    updatedAt
    userReviewsId
    productReviewsId
    owner
    __typename
  }
}
` as GeneratedQuery<APITypes.GetReviewQueryVariables, APITypes.GetReviewQuery>;
export const listReviews = /* GraphQL */ `query ListReviews(
  $filter: ModelReviewFilterInput
  $limit: Int
  $nextToken: String
) {
  listReviews(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      id
      rating
      comment
      userId
      productId
      createdAt
      updatedAt
      userReviewsId
      productReviewsId
      owner
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.ListReviewsQueryVariables,
  APITypes.ListReviewsQuery
>;
