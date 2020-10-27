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

export type User = {
  __typename?: "User";
  id: Scalars["ID"];
  email: Scalars["String"];
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
  products: Array<Product>;
  product?: Maybe<Product>;
  getUser?: Maybe<User>;
};

export type QueryProductArgs = {
  id: Scalars["ID"];
};

export type QueryGetUserArgs = {
  id: Scalars["String"];
};

export type Mutation = {
  __typename?: "Mutation";
  createProduct: Product;
  updateProduct?: Maybe<Product>;
  deleteProduct?: Maybe<Scalars["Int"]>;
  register: User;
  login?: Maybe<User>;
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

export type ProductsQueryVariables = Exact<{[key: string]: never}>;

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
  query Products {
    products {
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
