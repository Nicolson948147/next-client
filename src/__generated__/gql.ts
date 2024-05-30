/* eslint-disable */
import * as types from './graphql';
import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';

/**
 * Map of all GraphQL operations in the project.
 *
 * This map has several performance disadvantages:
 * 1. It is not tree-shakeable, so it will include all operations in the project.
 * 2. It is not minifiable, so the string of a GraphQL query will be multiple times inside the bundle.
 * 3. It does not support dead code elimination, so it will add unused operations.
 *
 * Therefore it is highly recommended to use the babel or swc plugin for production.
 */
const documents = {
    "\n  mutation CreateConfiguration($input: CreateConfigurationInput) {\n    createConfiguration(input: $input) {\n      id\n    }\n  }\n": types.CreateConfigurationDocument,
    "\n  query GetConfiguration($configurationId: ID!) {\n    configuration(id: $configurationId) {\n      id\n      width\n      height\n      croppedImgUrl\n      imgUrl\n      orderStatus\n      phoneModel\n      caseMaterial\n      caseFinish\n      caseColor\n    }\n  }\n": types.GetConfigurationDocument,
    "\n  mutation UpdateConfiguration($input: UpdateConfigurationInput) {\n    updateConfiguration(input: $input) {\n      id\n      croppedImgUrl\n      imgUrl\n      height\n      width\n    }\n  }\n": types.UpdateConfigurationDocument,
    "\n  mutation CreateCheckoutSession($input: CreateOrderInput) {\n    createCheckoutSession(input: $input) {\n      order {\n        id\n        amount\n        orderStatus\n      }\n      url\n    }\n  }\n": types.CreateCheckoutSessionDocument,
    "\n  query GetPaymentStatus($orderId: ID!) {\n    paymentStatus(orderId: $orderId) {\n      order {\n        id\n        isPaid\n        amount\n        orderStatus\n        configuration {\n          croppedImgUrl\n          id\n          caseColor\n        }\n        shippingAddress {\n          id\n          name\n          phoneNumber\n          postalCode\n          state\n          street\n          updatedAt\n          createdAt\n          country\n          city\n        }\n        billingAddress {\n          id\n          name\n          street\n          city\n          postalCode\n          country\n          state\n          phoneNumber\n          createdAt\n          updatedAt\n        }\n      }\n      status\n    }\n  }\n": types.GetPaymentStatusDocument,
    "\n  query GetAuthStatus($input: AuthStatusInput) {\n    getAuthStatus(input: $input) {\n      success\n      user {\n        id\n        name\n        email\n      }\n    }\n  }\n": types.GetAuthStatusDocument,
};

/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 *
 *
 * @example
 * ```ts
 * const query = gql(`query GetUser($id: ID!) { user(id: $id) { name } }`);
 * ```
 *
 * The query argument is unknown!
 * Please regenerate the types.
 */
export function gql(source: string): unknown;

/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  mutation CreateConfiguration($input: CreateConfigurationInput) {\n    createConfiguration(input: $input) {\n      id\n    }\n  }\n"): (typeof documents)["\n  mutation CreateConfiguration($input: CreateConfigurationInput) {\n    createConfiguration(input: $input) {\n      id\n    }\n  }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  query GetConfiguration($configurationId: ID!) {\n    configuration(id: $configurationId) {\n      id\n      width\n      height\n      croppedImgUrl\n      imgUrl\n      orderStatus\n      phoneModel\n      caseMaterial\n      caseFinish\n      caseColor\n    }\n  }\n"): (typeof documents)["\n  query GetConfiguration($configurationId: ID!) {\n    configuration(id: $configurationId) {\n      id\n      width\n      height\n      croppedImgUrl\n      imgUrl\n      orderStatus\n      phoneModel\n      caseMaterial\n      caseFinish\n      caseColor\n    }\n  }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  mutation UpdateConfiguration($input: UpdateConfigurationInput) {\n    updateConfiguration(input: $input) {\n      id\n      croppedImgUrl\n      imgUrl\n      height\n      width\n    }\n  }\n"): (typeof documents)["\n  mutation UpdateConfiguration($input: UpdateConfigurationInput) {\n    updateConfiguration(input: $input) {\n      id\n      croppedImgUrl\n      imgUrl\n      height\n      width\n    }\n  }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  mutation CreateCheckoutSession($input: CreateOrderInput) {\n    createCheckoutSession(input: $input) {\n      order {\n        id\n        amount\n        orderStatus\n      }\n      url\n    }\n  }\n"): (typeof documents)["\n  mutation CreateCheckoutSession($input: CreateOrderInput) {\n    createCheckoutSession(input: $input) {\n      order {\n        id\n        amount\n        orderStatus\n      }\n      url\n    }\n  }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  query GetPaymentStatus($orderId: ID!) {\n    paymentStatus(orderId: $orderId) {\n      order {\n        id\n        isPaid\n        amount\n        orderStatus\n        configuration {\n          croppedImgUrl\n          id\n          caseColor\n        }\n        shippingAddress {\n          id\n          name\n          phoneNumber\n          postalCode\n          state\n          street\n          updatedAt\n          createdAt\n          country\n          city\n        }\n        billingAddress {\n          id\n          name\n          street\n          city\n          postalCode\n          country\n          state\n          phoneNumber\n          createdAt\n          updatedAt\n        }\n      }\n      status\n    }\n  }\n"): (typeof documents)["\n  query GetPaymentStatus($orderId: ID!) {\n    paymentStatus(orderId: $orderId) {\n      order {\n        id\n        isPaid\n        amount\n        orderStatus\n        configuration {\n          croppedImgUrl\n          id\n          caseColor\n        }\n        shippingAddress {\n          id\n          name\n          phoneNumber\n          postalCode\n          state\n          street\n          updatedAt\n          createdAt\n          country\n          city\n        }\n        billingAddress {\n          id\n          name\n          street\n          city\n          postalCode\n          country\n          state\n          phoneNumber\n          createdAt\n          updatedAt\n        }\n      }\n      status\n    }\n  }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  query GetAuthStatus($input: AuthStatusInput) {\n    getAuthStatus(input: $input) {\n      success\n      user {\n        id\n        name\n        email\n      }\n    }\n  }\n"): (typeof documents)["\n  query GetAuthStatus($input: AuthStatusInput) {\n    getAuthStatus(input: $input) {\n      success\n      user {\n        id\n        name\n        email\n      }\n    }\n  }\n"];

export function gql(source: string) {
  return (documents as any)[source] ?? {};
}

export type DocumentType<TDocumentNode extends DocumentNode<any, any>> = TDocumentNode extends DocumentNode<  infer TType,  any>  ? TType  : never;