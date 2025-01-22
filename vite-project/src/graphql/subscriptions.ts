/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

import * as APITypes from "../src/API";
type GeneratedSubscription<InputType, OutputType> = string & {
  __generatedSubscriptionInput: InputType;
  __generatedSubscriptionOutput: OutputType;
};

export const onCreateUser = /* GraphQL */ `subscription OnCreateUser(
  $filter: ModelSubscriptionUserFilterInput
  $owner: String
) {
  onCreateUser(filter: $filter, owner: $owner) {
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
` as GeneratedSubscription<
  APITypes.OnCreateUserSubscriptionVariables,
  APITypes.OnCreateUserSubscription
>;
export const onUpdateUser = /* GraphQL */ `subscription OnUpdateUser(
  $filter: ModelSubscriptionUserFilterInput
  $owner: String
) {
  onUpdateUser(filter: $filter, owner: $owner) {
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
` as GeneratedSubscription<
  APITypes.OnUpdateUserSubscriptionVariables,
  APITypes.OnUpdateUserSubscription
>;
export const onDeleteUser = /* GraphQL */ `subscription OnDeleteUser(
  $filter: ModelSubscriptionUserFilterInput
  $owner: String
) {
  onDeleteUser(filter: $filter, owner: $owner) {
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
` as GeneratedSubscription<
  APITypes.OnDeleteUserSubscriptionVariables,
  APITypes.OnDeleteUserSubscription
>;
export const onCreateStore = /* GraphQL */ `subscription OnCreateStore(
  $filter: ModelSubscriptionStoreFilterInput
  $owner: String
) {
  onCreateStore(filter: $filter, owner: $owner) {
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
` as GeneratedSubscription<
  APITypes.OnCreateStoreSubscriptionVariables,
  APITypes.OnCreateStoreSubscription
>;
export const onUpdateStore = /* GraphQL */ `subscription OnUpdateStore(
  $filter: ModelSubscriptionStoreFilterInput
  $owner: String
) {
  onUpdateStore(filter: $filter, owner: $owner) {
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
` as GeneratedSubscription<
  APITypes.OnUpdateStoreSubscriptionVariables,
  APITypes.OnUpdateStoreSubscription
>;
export const onDeleteStore = /* GraphQL */ `subscription OnDeleteStore(
  $filter: ModelSubscriptionStoreFilterInput
  $owner: String
) {
  onDeleteStore(filter: $filter, owner: $owner) {
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
` as GeneratedSubscription<
  APITypes.OnDeleteStoreSubscriptionVariables,
  APITypes.OnDeleteStoreSubscription
>;
export const onCreateProduct = /* GraphQL */ `subscription OnCreateProduct(
  $filter: ModelSubscriptionProductFilterInput
  $owner: String
) {
  onCreateProduct(filter: $filter, owner: $owner) {
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
` as GeneratedSubscription<
  APITypes.OnCreateProductSubscriptionVariables,
  APITypes.OnCreateProductSubscription
>;
export const onUpdateProduct = /* GraphQL */ `subscription OnUpdateProduct(
  $filter: ModelSubscriptionProductFilterInput
  $owner: String
) {
  onUpdateProduct(filter: $filter, owner: $owner) {
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
` as GeneratedSubscription<
  APITypes.OnUpdateProductSubscriptionVariables,
  APITypes.OnUpdateProductSubscription
>;
export const onDeleteProduct = /* GraphQL */ `subscription OnDeleteProduct(
  $filter: ModelSubscriptionProductFilterInput
  $owner: String
) {
  onDeleteProduct(filter: $filter, owner: $owner) {
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
` as GeneratedSubscription<
  APITypes.OnDeleteProductSubscriptionVariables,
  APITypes.OnDeleteProductSubscription
>;
export const onCreateOrder = /* GraphQL */ `subscription OnCreateOrder(
  $filter: ModelSubscriptionOrderFilterInput
  $owner: String
) {
  onCreateOrder(filter: $filter, owner: $owner) {
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
` as GeneratedSubscription<
  APITypes.OnCreateOrderSubscriptionVariables,
  APITypes.OnCreateOrderSubscription
>;
export const onUpdateOrder = /* GraphQL */ `subscription OnUpdateOrder(
  $filter: ModelSubscriptionOrderFilterInput
  $owner: String
) {
  onUpdateOrder(filter: $filter, owner: $owner) {
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
` as GeneratedSubscription<
  APITypes.OnUpdateOrderSubscriptionVariables,
  APITypes.OnUpdateOrderSubscription
>;
export const onDeleteOrder = /* GraphQL */ `subscription OnDeleteOrder(
  $filter: ModelSubscriptionOrderFilterInput
  $owner: String
) {
  onDeleteOrder(filter: $filter, owner: $owner) {
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
` as GeneratedSubscription<
  APITypes.OnDeleteOrderSubscriptionVariables,
  APITypes.OnDeleteOrderSubscription
>;
export const onCreateOrderProduct = /* GraphQL */ `subscription OnCreateOrderProduct(
  $filter: ModelSubscriptionOrderProductFilterInput
  $owner: String
) {
  onCreateOrderProduct(filter: $filter, owner: $owner) {
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
` as GeneratedSubscription<
  APITypes.OnCreateOrderProductSubscriptionVariables,
  APITypes.OnCreateOrderProductSubscription
>;
export const onUpdateOrderProduct = /* GraphQL */ `subscription OnUpdateOrderProduct(
  $filter: ModelSubscriptionOrderProductFilterInput
  $owner: String
) {
  onUpdateOrderProduct(filter: $filter, owner: $owner) {
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
` as GeneratedSubscription<
  APITypes.OnUpdateOrderProductSubscriptionVariables,
  APITypes.OnUpdateOrderProductSubscription
>;
export const onDeleteOrderProduct = /* GraphQL */ `subscription OnDeleteOrderProduct(
  $filter: ModelSubscriptionOrderProductFilterInput
  $owner: String
) {
  onDeleteOrderProduct(filter: $filter, owner: $owner) {
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
` as GeneratedSubscription<
  APITypes.OnDeleteOrderProductSubscriptionVariables,
  APITypes.OnDeleteOrderProductSubscription
>;
export const onCreateCategory = /* GraphQL */ `subscription OnCreateCategory(
  $filter: ModelSubscriptionCategoryFilterInput
  $owner: String
) {
  onCreateCategory(filter: $filter, owner: $owner) {
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
` as GeneratedSubscription<
  APITypes.OnCreateCategorySubscriptionVariables,
  APITypes.OnCreateCategorySubscription
>;
export const onUpdateCategory = /* GraphQL */ `subscription OnUpdateCategory(
  $filter: ModelSubscriptionCategoryFilterInput
  $owner: String
) {
  onUpdateCategory(filter: $filter, owner: $owner) {
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
` as GeneratedSubscription<
  APITypes.OnUpdateCategorySubscriptionVariables,
  APITypes.OnUpdateCategorySubscription
>;
export const onDeleteCategory = /* GraphQL */ `subscription OnDeleteCategory(
  $filter: ModelSubscriptionCategoryFilterInput
  $owner: String
) {
  onDeleteCategory(filter: $filter, owner: $owner) {
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
` as GeneratedSubscription<
  APITypes.OnDeleteCategorySubscriptionVariables,
  APITypes.OnDeleteCategorySubscription
>;
export const onCreateReview = /* GraphQL */ `subscription OnCreateReview(
  $filter: ModelSubscriptionReviewFilterInput
  $owner: String
) {
  onCreateReview(filter: $filter, owner: $owner) {
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
` as GeneratedSubscription<
  APITypes.OnCreateReviewSubscriptionVariables,
  APITypes.OnCreateReviewSubscription
>;
export const onUpdateReview = /* GraphQL */ `subscription OnUpdateReview(
  $filter: ModelSubscriptionReviewFilterInput
  $owner: String
) {
  onUpdateReview(filter: $filter, owner: $owner) {
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
` as GeneratedSubscription<
  APITypes.OnUpdateReviewSubscriptionVariables,
  APITypes.OnUpdateReviewSubscription
>;
export const onDeleteReview = /* GraphQL */ `subscription OnDeleteReview(
  $filter: ModelSubscriptionReviewFilterInput
  $owner: String
) {
  onDeleteReview(filter: $filter, owner: $owner) {
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
` as GeneratedSubscription<
  APITypes.OnDeleteReviewSubscriptionVariables,
  APITypes.OnDeleteReviewSubscription
>;
