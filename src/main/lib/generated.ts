import {gql} from "@apollo/client";
import * as Apollo from "@apollo/client";
export type Maybe<T> = T | null;
export type Exact<T extends {[key: string]: unknown}> = {[K in keyof T]: T[K]};
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
};

export type Stock = {
  __typename?: "Stock";
  id: Scalars["ID"];
  productId: Scalars["Int"];
  count: Scalars["Int"];
  product: Product;
};

export type Product = {
  __typename?: "Product";
  id: Scalars["ID"];
  name: Scalars["String"];
  description: Scalars["String"];
  price: Scalars["Float"];
  stockCount: Scalars["Int"];
};

export type OrderInventoryItem = {
  __typename?: "OrderInventoryItem";
  productId: Scalars["Int"];
  count: Scalars["Int"];
};

export type Order = {
  __typename?: "Order";
  id: Scalars["ID"];
  inventory: Array<OrderInventoryItem>;
  products: Array<Product>;
};

export type User = {
  __typename?: "User";
  id: Scalars["ID"];
  email: Scalars["String"];
};

export type OrderInventoryInput = {
  productId: Scalars["Int"];
  count: Scalars["Int"];
};

export type OrderInput = {
  inventory: Array<OrderInventoryInput>;
};

export type ProductInput = {
  name: Scalars["String"];
  description: Scalars["String"];
  price: Scalars["Float"];
  stockCount: Scalars["Int"];
};

export type UserCredentials = {
  email: Scalars["String"];
  password: Scalars["String"];
};

export type Query = {
  __typename?: "Query";
  hello: Scalars["String"];
  orders: Array<Order>;
  order?: Maybe<Order>;
  products: Array<Product>;
  product?: Maybe<Product>;
  getUser?: Maybe<User>;
};

export type QueryOrderArgs = {
  id: Scalars["ID"];
};

export type QueryProductsArgs = {
  name?: Maybe<Scalars["String"]>;
  ids?: Maybe<Array<Scalars["Int"]>>;
};

export type QueryProductArgs = {
  id: Scalars["ID"];
};

export type QueryGetUserArgs = {
  id: Scalars["String"];
};

export type Mutation = {
  __typename?: "Mutation";
  createOrder: Order;
  updateOrder?: Maybe<Order>;
  deleteOrder?: Maybe<Scalars["Int"]>;
  createProduct: Product;
  updateProduct?: Maybe<Product>;
  deleteProduct?: Maybe<Scalars["Int"]>;
  register: User;
  login?: Maybe<User>;
};

export type MutationCreateOrderArgs = {
  input: OrderInput;
};

export type MutationUpdateOrderArgs = {
  input: OrderInput;
  id: Scalars["ID"];
};

export type MutationDeleteOrderArgs = {
  id: Scalars["ID"];
};

export type MutationCreateProductArgs = {
  input: ProductInput;
};

export type MutationUpdateProductArgs = {
  input: ProductInput;
  id: Scalars["ID"];
};

export type MutationDeleteProductArgs = {
  id: Scalars["ID"];
};

export type MutationRegisterArgs = {
  input: UserCredentials;
};

export type MutationLoginArgs = {
  input: UserCredentials;
};

export type LoginMutationVariables = Exact<{
  input: UserCredentials;
}>;

export type LoginMutation = {__typename?: "Mutation"} & {
  login?: Maybe<{__typename?: "User"} & Pick<User, "id" | "email">>;
};

export type RegisterMutationVariables = Exact<{
  input: UserCredentials;
}>;

export type RegisterMutation = {__typename?: "Mutation"} & {
  register: {__typename?: "User"} & Pick<User, "id" | "email">;
};

export type CreateOrderMutationVariables = Exact<{
  input: OrderInput;
}>;

export type CreateOrderMutation = {__typename?: "Mutation"} & {
  createOrder: {__typename?: "Order"} & OrderFieldsFragment;
};

export type DeleteOrderMutationVariables = Exact<{
  id: Scalars["ID"];
}>;

export type DeleteOrderMutation = {__typename?: "Mutation"} & Pick<Mutation, "deleteOrder">;

export type OrderFieldsFragment = {__typename?: "Order"} & Pick<Order, "id"> & {
    inventory: Array<
      {__typename?: "OrderInventoryItem"} & Pick<OrderInventoryItem, "productId" | "count">
    >;
    products: Array<{__typename?: "Product"} & ProductFieldsFragment>;
  };

export type OrderQueryVariables = Exact<{
  id: Scalars["ID"];
}>;

export type OrderQuery = {__typename?: "Query"} & {
  order?: Maybe<{__typename?: "Order"} & OrderFieldsFragment>;
};

export type OrdersQueryVariables = Exact<{[key: string]: never}>;

export type OrdersQuery = {__typename?: "Query"} & {
  orders: Array<{__typename?: "Order"} & OrderFieldsFragment>;
};

export type UpdateOrderMutationVariables = Exact<{
  id: Scalars["ID"];
  input: OrderInput;
}>;

export type UpdateOrderMutation = {__typename?: "Mutation"} & {
  updateOrder?: Maybe<{__typename?: "Order"} & OrderFieldsFragment>;
};

export type CreateProductsMutationVariables = Exact<{
  input: ProductInput;
}>;

export type CreateProductsMutation = {__typename?: "Mutation"} & {
  createProduct: {__typename?: "Product"} & ProductFieldsFragment;
};

export type DeleteProductMutationVariables = Exact<{
  id: Scalars["ID"];
}>;

export type DeleteProductMutation = {__typename?: "Mutation"} & Pick<Mutation, "deleteProduct">;

export type ProductFieldsFragment = {__typename?: "Product"} & Pick<
  Product,
  "id" | "name" | "description" | "price" | "stockCount"
>;

export type ProductQueryVariables = Exact<{
  id: Scalars["ID"];
}>;

export type ProductQuery = {__typename?: "Query"} & {
  product?: Maybe<{__typename?: "Product"} & ProductFieldsFragment>;
};

export type ProductsQueryVariables = Exact<{
  name?: Maybe<Scalars["String"]>;
  ids?: Maybe<Array<Scalars["Int"]>>;
}>;

export type ProductsQuery = {__typename?: "Query"} & {
  products: Array<{__typename?: "Product"} & ProductFieldsFragment>;
};

export type UpdateProductsMutationVariables = Exact<{
  id: Scalars["ID"];
  input: ProductInput;
}>;

export type UpdateProductsMutation = {__typename?: "Mutation"} & {
  updateProduct?: Maybe<{__typename?: "Product"} & ProductFieldsFragment>;
};

export const ProductFieldsFragmentDoc = gql`
  fragment ProductFields on Product {
    id
    name
    description
    price
    stockCount
  }
`;
export const OrderFieldsFragmentDoc = gql`
  fragment OrderFields on Order {
    id
    inventory {
      productId
      count
    }
    products {
      ...ProductFields
    }
  }
  ${ProductFieldsFragmentDoc}
`;
export const LoginDocument = gql`
  mutation Login($input: UserCredentials!) {
    login(input: $input) {
      id
      email
    }
  }
`;
export type LoginMutationFn = Apollo.MutationFunction<LoginMutation, LoginMutationVariables>;

/**
 * __useLoginMutation__
 *
 * To run a mutation, you first call `useLoginMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useLoginMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [loginMutation, { data, loading, error }] = useLoginMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useLoginMutation(
  baseOptions?: Apollo.MutationHookOptions<LoginMutation, LoginMutationVariables>,
) {
  return Apollo.useMutation<LoginMutation, LoginMutationVariables>(LoginDocument, baseOptions);
}
export type LoginMutationHookResult = ReturnType<typeof useLoginMutation>;
export type LoginMutationResult = Apollo.MutationResult<LoginMutation>;
export type LoginMutationOptions = Apollo.BaseMutationOptions<
  LoginMutation,
  LoginMutationVariables
>;
export const RegisterDocument = gql`
  mutation Register($input: UserCredentials!) {
    register(input: $input) {
      id
      email
    }
  }
`;
export type RegisterMutationFn = Apollo.MutationFunction<
  RegisterMutation,
  RegisterMutationVariables
>;

/**
 * __useRegisterMutation__
 *
 * To run a mutation, you first call `useRegisterMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useRegisterMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [registerMutation, { data, loading, error }] = useRegisterMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useRegisterMutation(
  baseOptions?: Apollo.MutationHookOptions<RegisterMutation, RegisterMutationVariables>,
) {
  return Apollo.useMutation<RegisterMutation, RegisterMutationVariables>(
    RegisterDocument,
    baseOptions,
  );
}
export type RegisterMutationHookResult = ReturnType<typeof useRegisterMutation>;
export type RegisterMutationResult = Apollo.MutationResult<RegisterMutation>;
export type RegisterMutationOptions = Apollo.BaseMutationOptions<
  RegisterMutation,
  RegisterMutationVariables
>;
export const CreateOrderDocument = gql`
  mutation CreateOrder($input: OrderInput!) {
    createOrder(input: $input) {
      ...OrderFields
    }
  }
  ${OrderFieldsFragmentDoc}
`;
export type CreateOrderMutationFn = Apollo.MutationFunction<
  CreateOrderMutation,
  CreateOrderMutationVariables
>;

/**
 * __useCreateOrderMutation__
 *
 * To run a mutation, you first call `useCreateOrderMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateOrderMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createOrderMutation, { data, loading, error }] = useCreateOrderMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useCreateOrderMutation(
  baseOptions?: Apollo.MutationHookOptions<CreateOrderMutation, CreateOrderMutationVariables>,
) {
  return Apollo.useMutation<CreateOrderMutation, CreateOrderMutationVariables>(
    CreateOrderDocument,
    baseOptions,
  );
}
export type CreateOrderMutationHookResult = ReturnType<typeof useCreateOrderMutation>;
export type CreateOrderMutationResult = Apollo.MutationResult<CreateOrderMutation>;
export type CreateOrderMutationOptions = Apollo.BaseMutationOptions<
  CreateOrderMutation,
  CreateOrderMutationVariables
>;
export const DeleteOrderDocument = gql`
  mutation DeleteOrder($id: ID!) {
    deleteOrder(id: $id)
  }
`;
export type DeleteOrderMutationFn = Apollo.MutationFunction<
  DeleteOrderMutation,
  DeleteOrderMutationVariables
>;

/**
 * __useDeleteOrderMutation__
 *
 * To run a mutation, you first call `useDeleteOrderMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useDeleteOrderMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [deleteOrderMutation, { data, loading, error }] = useDeleteOrderMutation({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useDeleteOrderMutation(
  baseOptions?: Apollo.MutationHookOptions<DeleteOrderMutation, DeleteOrderMutationVariables>,
) {
  return Apollo.useMutation<DeleteOrderMutation, DeleteOrderMutationVariables>(
    DeleteOrderDocument,
    baseOptions,
  );
}
export type DeleteOrderMutationHookResult = ReturnType<typeof useDeleteOrderMutation>;
export type DeleteOrderMutationResult = Apollo.MutationResult<DeleteOrderMutation>;
export type DeleteOrderMutationOptions = Apollo.BaseMutationOptions<
  DeleteOrderMutation,
  DeleteOrderMutationVariables
>;
export const OrderDocument = gql`
  query Order($id: ID!) {
    order(id: $id) {
      ...OrderFields
    }
  }
  ${OrderFieldsFragmentDoc}
`;

/**
 * __useOrderQuery__
 *
 * To run a query within a React component, call `useOrderQuery` and pass it any options that fit your needs.
 * When your component renders, `useOrderQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useOrderQuery({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useOrderQuery(
  baseOptions?: Apollo.QueryHookOptions<OrderQuery, OrderQueryVariables>,
) {
  return Apollo.useQuery<OrderQuery, OrderQueryVariables>(OrderDocument, baseOptions);
}
export function useOrderLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<OrderQuery, OrderQueryVariables>,
) {
  return Apollo.useLazyQuery<OrderQuery, OrderQueryVariables>(OrderDocument, baseOptions);
}
export type OrderQueryHookResult = ReturnType<typeof useOrderQuery>;
export type OrderLazyQueryHookResult = ReturnType<typeof useOrderLazyQuery>;
export type OrderQueryResult = Apollo.QueryResult<OrderQuery, OrderQueryVariables>;
export const OrdersDocument = gql`
  query Orders {
    orders {
      ...OrderFields
    }
  }
  ${OrderFieldsFragmentDoc}
`;

/**
 * __useOrdersQuery__
 *
 * To run a query within a React component, call `useOrdersQuery` and pass it any options that fit your needs.
 * When your component renders, `useOrdersQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useOrdersQuery({
 *   variables: {
 *   },
 * });
 */
export function useOrdersQuery(
  baseOptions?: Apollo.QueryHookOptions<OrdersQuery, OrdersQueryVariables>,
) {
  return Apollo.useQuery<OrdersQuery, OrdersQueryVariables>(OrdersDocument, baseOptions);
}
export function useOrdersLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<OrdersQuery, OrdersQueryVariables>,
) {
  return Apollo.useLazyQuery<OrdersQuery, OrdersQueryVariables>(OrdersDocument, baseOptions);
}
export type OrdersQueryHookResult = ReturnType<typeof useOrdersQuery>;
export type OrdersLazyQueryHookResult = ReturnType<typeof useOrdersLazyQuery>;
export type OrdersQueryResult = Apollo.QueryResult<OrdersQuery, OrdersQueryVariables>;
export const UpdateOrderDocument = gql`
  mutation UpdateOrder($id: ID!, $input: OrderInput!) {
    updateOrder(id: $id, input: $input) {
      ...OrderFields
    }
  }
  ${OrderFieldsFragmentDoc}
`;
export type UpdateOrderMutationFn = Apollo.MutationFunction<
  UpdateOrderMutation,
  UpdateOrderMutationVariables
>;

/**
 * __useUpdateOrderMutation__
 *
 * To run a mutation, you first call `useUpdateOrderMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateOrderMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateOrderMutation, { data, loading, error }] = useUpdateOrderMutation({
 *   variables: {
 *      id: // value for 'id'
 *      input: // value for 'input'
 *   },
 * });
 */
export function useUpdateOrderMutation(
  baseOptions?: Apollo.MutationHookOptions<UpdateOrderMutation, UpdateOrderMutationVariables>,
) {
  return Apollo.useMutation<UpdateOrderMutation, UpdateOrderMutationVariables>(
    UpdateOrderDocument,
    baseOptions,
  );
}
export type UpdateOrderMutationHookResult = ReturnType<typeof useUpdateOrderMutation>;
export type UpdateOrderMutationResult = Apollo.MutationResult<UpdateOrderMutation>;
export type UpdateOrderMutationOptions = Apollo.BaseMutationOptions<
  UpdateOrderMutation,
  UpdateOrderMutationVariables
>;
export const CreateProductsDocument = gql`
  mutation CreateProducts($input: ProductInput!) {
    createProduct(input: $input) {
      ...ProductFields
    }
  }
  ${ProductFieldsFragmentDoc}
`;
export type CreateProductsMutationFn = Apollo.MutationFunction<
  CreateProductsMutation,
  CreateProductsMutationVariables
>;

/**
 * __useCreateProductsMutation__
 *
 * To run a mutation, you first call `useCreateProductsMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateProductsMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createProductsMutation, { data, loading, error }] = useCreateProductsMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useCreateProductsMutation(
  baseOptions?: Apollo.MutationHookOptions<CreateProductsMutation, CreateProductsMutationVariables>,
) {
  return Apollo.useMutation<CreateProductsMutation, CreateProductsMutationVariables>(
    CreateProductsDocument,
    baseOptions,
  );
}
export type CreateProductsMutationHookResult = ReturnType<typeof useCreateProductsMutation>;
export type CreateProductsMutationResult = Apollo.MutationResult<CreateProductsMutation>;
export type CreateProductsMutationOptions = Apollo.BaseMutationOptions<
  CreateProductsMutation,
  CreateProductsMutationVariables
>;
export const DeleteProductDocument = gql`
  mutation DeleteProduct($id: ID!) {
    deleteProduct(id: $id)
  }
`;
export type DeleteProductMutationFn = Apollo.MutationFunction<
  DeleteProductMutation,
  DeleteProductMutationVariables
>;

/**
 * __useDeleteProductMutation__
 *
 * To run a mutation, you first call `useDeleteProductMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useDeleteProductMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [deleteProductMutation, { data, loading, error }] = useDeleteProductMutation({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useDeleteProductMutation(
  baseOptions?: Apollo.MutationHookOptions<DeleteProductMutation, DeleteProductMutationVariables>,
) {
  return Apollo.useMutation<DeleteProductMutation, DeleteProductMutationVariables>(
    DeleteProductDocument,
    baseOptions,
  );
}
export type DeleteProductMutationHookResult = ReturnType<typeof useDeleteProductMutation>;
export type DeleteProductMutationResult = Apollo.MutationResult<DeleteProductMutation>;
export type DeleteProductMutationOptions = Apollo.BaseMutationOptions<
  DeleteProductMutation,
  DeleteProductMutationVariables
>;
export const ProductDocument = gql`
  query Product($id: ID!) {
    product(id: $id) {
      ...ProductFields
    }
  }
  ${ProductFieldsFragmentDoc}
`;

/**
 * __useProductQuery__
 *
 * To run a query within a React component, call `useProductQuery` and pass it any options that fit your needs.
 * When your component renders, `useProductQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useProductQuery({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useProductQuery(
  baseOptions?: Apollo.QueryHookOptions<ProductQuery, ProductQueryVariables>,
) {
  return Apollo.useQuery<ProductQuery, ProductQueryVariables>(ProductDocument, baseOptions);
}
export function useProductLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<ProductQuery, ProductQueryVariables>,
) {
  return Apollo.useLazyQuery<ProductQuery, ProductQueryVariables>(ProductDocument, baseOptions);
}
export type ProductQueryHookResult = ReturnType<typeof useProductQuery>;
export type ProductLazyQueryHookResult = ReturnType<typeof useProductLazyQuery>;
export type ProductQueryResult = Apollo.QueryResult<ProductQuery, ProductQueryVariables>;
export const ProductsDocument = gql`
  query Products($name: String, $ids: [Int!]) {
    products(name: $name, ids: $ids) {
      ...ProductFields
    }
  }
  ${ProductFieldsFragmentDoc}
`;

/**
 * __useProductsQuery__
 *
 * To run a query within a React component, call `useProductsQuery` and pass it any options that fit your needs.
 * When your component renders, `useProductsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useProductsQuery({
 *   variables: {
 *      name: // value for 'name'
 *      ids: // value for 'ids'
 *   },
 * });
 */
export function useProductsQuery(
  baseOptions?: Apollo.QueryHookOptions<ProductsQuery, ProductsQueryVariables>,
) {
  return Apollo.useQuery<ProductsQuery, ProductsQueryVariables>(ProductsDocument, baseOptions);
}
export function useProductsLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<ProductsQuery, ProductsQueryVariables>,
) {
  return Apollo.useLazyQuery<ProductsQuery, ProductsQueryVariables>(ProductsDocument, baseOptions);
}
export type ProductsQueryHookResult = ReturnType<typeof useProductsQuery>;
export type ProductsLazyQueryHookResult = ReturnType<typeof useProductsLazyQuery>;
export type ProductsQueryResult = Apollo.QueryResult<ProductsQuery, ProductsQueryVariables>;
export const UpdateProductsDocument = gql`
  mutation UpdateProducts($id: ID!, $input: ProductInput!) {
    updateProduct(id: $id, input: $input) {
      ...ProductFields
    }
  }
  ${ProductFieldsFragmentDoc}
`;
export type UpdateProductsMutationFn = Apollo.MutationFunction<
  UpdateProductsMutation,
  UpdateProductsMutationVariables
>;

/**
 * __useUpdateProductsMutation__
 *
 * To run a mutation, you first call `useUpdateProductsMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateProductsMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateProductsMutation, { data, loading, error }] = useUpdateProductsMutation({
 *   variables: {
 *      id: // value for 'id'
 *      input: // value for 'input'
 *   },
 * });
 */
export function useUpdateProductsMutation(
  baseOptions?: Apollo.MutationHookOptions<UpdateProductsMutation, UpdateProductsMutationVariables>,
) {
  return Apollo.useMutation<UpdateProductsMutation, UpdateProductsMutationVariables>(
    UpdateProductsDocument,
    baseOptions,
  );
}
export type UpdateProductsMutationHookResult = ReturnType<typeof useUpdateProductsMutation>;
export type UpdateProductsMutationResult = Apollo.MutationResult<UpdateProductsMutation>;
export type UpdateProductsMutationOptions = Apollo.BaseMutationOptions<
  UpdateProductsMutation,
  UpdateProductsMutationVariables
>;
