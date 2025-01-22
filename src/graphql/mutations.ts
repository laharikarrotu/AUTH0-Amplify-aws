/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

import * as APITypes from "../../vite-project/src/API";
type GeneratedMutation<InputType, OutputType> = string & {
  __generatedMutationInput: InputType;
  __generatedMutationOutput: OutputType;
};

export const createUser = /* GraphQL */ `mutation CreateUser(
  $input: CreateUserInput!
  $condition: ModelUserConditionInput
) {
  createUser(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.CreateUserMutationVariables,
  APITypes.CreateUserMutation
>;
export const updateUser = /* GraphQL */ `mutation UpdateUser(
  $input: UpdateUserInput!
  $condition: ModelUserConditionInput
) {
  updateUser(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.UpdateUserMutationVariables,
  APITypes.UpdateUserMutation
>;
export const deleteUser = /* GraphQL */ `mutation DeleteUser(
  $input: DeleteUserInput!
  $condition: ModelUserConditionInput
) {
  deleteUser(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.DeleteUserMutationVariables,
  APITypes.DeleteUserMutation
>;
export const createStore = /* GraphQL */ `mutation CreateStore(
  $input: CreateStoreInput!
  $condition: ModelStoreConditionInput
) {
  createStore(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.CreateStoreMutationVariables,
  APITypes.CreateStoreMutation
>;
export const updateStore = /* GraphQL */ `mutation UpdateStore(
  $input: UpdateStoreInput!
  $condition: ModelStoreConditionInput
) {
  updateStore(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.UpdateStoreMutationVariables,
  APITypes.UpdateStoreMutation
>;
export const deleteStore = /* GraphQL */ `mutation DeleteStore(
  $input: DeleteStoreInput!
  $condition: ModelStoreConditionInput
) {
  deleteStore(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.DeleteStoreMutationVariables,
  APITypes.DeleteStoreMutation
>;
export const createProduct = /* GraphQL */ `mutation CreateProduct(
  $input: CreateProductInput!
  $condition: ModelProductConditionInput
) {
  createProduct(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.CreateProductMutationVariables,
  APITypes.CreateProductMutation
>;
export const updateProduct = /* GraphQL */ `mutation UpdateProduct(
  $input: UpdateProductInput!
  $condition: ModelProductConditionInput
) {
  updateProduct(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.UpdateProductMutationVariables,
  APITypes.UpdateProductMutation
>;
export const deleteProduct = /* GraphQL */ `mutation DeleteProduct(
  $input: DeleteProductInput!
  $condition: ModelProductConditionInput
) {
  deleteProduct(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.DeleteProductMutationVariables,
  APITypes.DeleteProductMutation
>;
export const createOrder = /* GraphQL */ `mutation CreateOrder(
  $input: CreateOrderInput!
  $condition: ModelOrderConditionInput
) {
  createOrder(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.CreateOrderMutationVariables,
  APITypes.CreateOrderMutation
>;
export const updateOrder = /* GraphQL */ `mutation UpdateOrder(
  $input: UpdateOrderInput!
  $condition: ModelOrderConditionInput
) {
  updateOrder(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.UpdateOrderMutationVariables,
  APITypes.UpdateOrderMutation
>;
export const deleteOrder = /* GraphQL */ `mutation DeleteOrder(
  $input: DeleteOrderInput!
  $condition: ModelOrderConditionInput
) {
  deleteOrder(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.DeleteOrderMutationVariables,
  APITypes.DeleteOrderMutation
>;
export const createOrderProduct = /* GraphQL */ `mutation CreateOrderProduct(
  $input: CreateOrderProductInput!
  $condition: ModelOrderProductConditionInput
) {
  createOrderProduct(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.CreateOrderProductMutationVariables,
  APITypes.CreateOrderProductMutation
>;
export const updateOrderProduct = /* GraphQL */ `mutation UpdateOrderProduct(
  $input: UpdateOrderProductInput!
  $condition: ModelOrderProductConditionInput
) {
  updateOrderProduct(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.UpdateOrderProductMutationVariables,
  APITypes.UpdateOrderProductMutation
>;
export const deleteOrderProduct = /* GraphQL */ `mutation DeleteOrderProduct(
  $input: DeleteOrderProductInput!
  $condition: ModelOrderProductConditionInput
) {
  deleteOrderProduct(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.DeleteOrderProductMutationVariables,
  APITypes.DeleteOrderProductMutation
>;
export const createCategory = /* GraphQL */ `mutation CreateCategory(
  $input: CreateCategoryInput!
  $condition: ModelCategoryConditionInput
) {
  createCategory(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.CreateCategoryMutationVariables,
  APITypes.CreateCategoryMutation
>;
export const updateCategory = /* GraphQL */ `mutation UpdateCategory(
  $input: UpdateCategoryInput!
  $condition: ModelCategoryConditionInput
) {
  updateCategory(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.UpdateCategoryMutationVariables,
  APITypes.UpdateCategoryMutation
>;
export const deleteCategory = /* GraphQL */ `mutation DeleteCategory(
  $input: DeleteCategoryInput!
  $condition: ModelCategoryConditionInput
) {
  deleteCategory(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.DeleteCategoryMutationVariables,
  APITypes.DeleteCategoryMutation
>;
export const createReview = /* GraphQL */ `mutation CreateReview(
  $input: CreateReviewInput!
  $condition: ModelReviewConditionInput
) {
  createReview(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.CreateReviewMutationVariables,
  APITypes.CreateReviewMutation
>;
export const updateReview = /* GraphQL */ `mutation UpdateReview(
  $input: UpdateReviewInput!
  $condition: ModelReviewConditionInput
) {
  updateReview(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.UpdateReviewMutationVariables,
  APITypes.UpdateReviewMutation
>;
export const deleteReview = /* GraphQL */ `mutation DeleteReview(
  $input: DeleteReviewInput!
  $condition: ModelReviewConditionInput
) {
  deleteReview(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.DeleteReviewMutationVariables,
  APITypes.DeleteReviewMutation
>;
