/* eslint-disable */
import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string; }
  String: { input: string; output: string; }
  Boolean: { input: boolean; output: boolean; }
  Int: { input: number; output: number; }
  Float: { input: number; output: number; }
  /** A date-time string at UTC, such as 2007-12-03T10:15:30Z, compliant with the `date-time` format outlined in section 5.6 of the RFC 3339 profile of the ISO 8601 standard for representation of dates and times using the Gregorian calendar. */
  DateTime: { input: any; output: any; }
};

export type AdditionalEntityFields = {
  path?: InputMaybe<Scalars['String']['input']>;
  type?: InputMaybe<Scalars['String']['input']>;
};

export type AuthStatus = {
  __typename?: 'AuthStatus';
  success?: Maybe<Scalars['Boolean']['output']>;
  user?: Maybe<User>;
};

export type AuthStatusInput = {
  user?: InputMaybe<KindeUser>;
};

export type AuthUser = {
  __typename?: 'AuthUser';
  access_token: Scalars['String']['output'];
  user: User;
};

export type Author = {
  __typename?: 'Author';
  id: Scalars['ID']['output'];
  name: Scalars['String']['output'];
  verified: Scalars['Boolean']['output'];
};

export type BillingAddress = {
  __typename?: 'BillingAddress';
  city?: Maybe<Scalars['String']['output']>;
  country?: Maybe<Scalars['String']['output']>;
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  id?: Maybe<Scalars['ID']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  order?: Maybe<Order>;
  orderId?: Maybe<Scalars['ID']['output']>;
  orders?: Maybe<Array<Maybe<Order>>>;
  phoneNumber?: Maybe<Scalars['String']['output']>;
  postalCode?: Maybe<Scalars['String']['output']>;
  state?: Maybe<Scalars['String']['output']>;
  street?: Maybe<Scalars['String']['output']>;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
};

export enum CaseColor {
  Black = 'black',
  Blue = 'blue',
  Rose = 'rose'
}

export enum CaseFinish {
  Smooth = 'smooth',
  Textured = 'textured'
}

export enum CaseMaterial {
  Polycarbonate = 'polycarbonate',
  Silicone = 'silicone'
}

export type Configuration = {
  __typename?: 'Configuration';
  caseColor?: Maybe<CaseColor>;
  caseFinish?: Maybe<CaseFinish>;
  caseMaterial?: Maybe<CaseMaterial>;
  croppedImgUrl?: Maybe<Scalars['String']['output']>;
  height?: Maybe<Scalars['Int']['output']>;
  id?: Maybe<Scalars['ID']['output']>;
  imgUrl?: Maybe<Scalars['String']['output']>;
  orderStatus?: Maybe<OrderStatus>;
  phoneModel?: Maybe<PhoneModel>;
  width?: Maybe<Scalars['Int']['output']>;
};

export type CreateCheckoutSessionOutput = {
  __typename?: 'CreateCheckoutSessionOutput';
  order?: Maybe<Order>;
  url?: Maybe<Scalars['String']['output']>;
};

export type CreateConfigurationInput = {
  croppedImgUrl?: InputMaybe<Scalars['String']['input']>;
  height: Scalars['Int']['input'];
  imgUrl: Scalars['String']['input'];
  width: Scalars['Int']['input'];
};

export type CreateConfigurationOutput = {
  __typename?: 'CreateConfigurationOutput';
  croppedImgUrl?: Maybe<Scalars['String']['output']>;
  height?: Maybe<Scalars['Int']['output']>;
  id: Scalars['ID']['output'];
  imgUrl?: Maybe<Scalars['String']['output']>;
  width?: Maybe<Scalars['Int']['output']>;
};

export type CreateOrderInput = {
  amount: Scalars['Float']['input'];
  configurationId: Scalars['ID']['input'];
  kindeUserId?: InputMaybe<Scalars['ID']['input']>;
};

export type Game = {
  __typename?: 'Game';
  id: Scalars['ID']['output'];
  platform: Array<Scalars['String']['output']>;
  title: Scalars['String']['output'];
};

export type KindeUser = {
  email?: InputMaybe<Scalars['String']['input']>;
  family_name?: InputMaybe<Scalars['String']['input']>;
  given_name?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['String']['input']>;
};

export type Mutation = {
  __typename?: 'Mutation';
  _?: Maybe<Scalars['Boolean']['output']>;
  createCheckoutSession?: Maybe<CreateCheckoutSessionOutput>;
  createConfiguration?: Maybe<CreateConfigurationOutput>;
  signIn?: Maybe<AuthUser>;
  signUp?: Maybe<AuthUser>;
  updateConfiguration?: Maybe<CreateConfigurationOutput>;
};


export type MutationCreateCheckoutSessionArgs = {
  input?: InputMaybe<CreateOrderInput>;
};


export type MutationCreateConfigurationArgs = {
  input?: InputMaybe<CreateConfigurationInput>;
};


export type MutationSignInArgs = {
  input?: InputMaybe<SignInInput>;
};


export type MutationSignUpArgs = {
  input?: InputMaybe<SignUpInput>;
};


export type MutationUpdateConfigurationArgs = {
  input?: InputMaybe<UpdateConfigurationInput>;
};

export type Order = {
  __typename?: 'Order';
  amount?: Maybe<Scalars['Float']['output']>;
  billingAddress?: Maybe<BillingAddress>;
  billingAddressId?: Maybe<Scalars['ID']['output']>;
  configuration?: Maybe<Configuration>;
  configurationId?: Maybe<Scalars['ID']['output']>;
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  id?: Maybe<Scalars['ID']['output']>;
  isPaid?: Maybe<Scalars['Boolean']['output']>;
  orderStatus?: Maybe<OrderStatus>;
  shippingAddress?: Maybe<ShippingAddress>;
  shippingAddressId?: Maybe<Scalars['ID']['output']>;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
  user?: Maybe<User>;
  userId?: Maybe<Scalars['ID']['output']>;
};

export enum OrderStatus {
  AwaitingShipment = 'awaiting_shipment',
  Fullfilled = 'fullfilled',
  Shipped = 'shipped'
}

export type PaymentStatusOutput = {
  __typename?: 'PaymentStatusOutput';
  order?: Maybe<Order>;
  status?: Maybe<Scalars['Boolean']['output']>;
};

export enum PhoneModel {
  Iphone11 = 'iphone11',
  Iphone11pro = 'iphone11pro',
  Iphone11proMax = 'iphone11pro_max',
  Iphone12 = 'iphone12',
  Iphone12mini = 'iphone12mini',
  Iphone12pro = 'iphone12pro',
  Iphone12proMax = 'iphone12pro_max',
  Iphone13 = 'iphone13',
  Iphone13mini = 'iphone13mini',
  Iphone13pro = 'iphone13pro',
  Iphone13proMax = 'iphone13pro_max',
  Iphone14 = 'iphone14',
  Iphone14pro = 'iphone14pro',
  Iphone14proMax = 'iphone14pro_max',
  Iphone15 = 'iphone15',
  Iphone15pro = 'iphone15pro',
  Iphone15proMax = 'iphone15pro_max',
  Iphonex = 'iphonex',
  Iphonexr = 'iphonexr',
  Iphonexs = 'iphonexs',
  IphonexsMax = 'iphonexs_max'
}

export type Query = {
  __typename?: 'Query';
  _?: Maybe<Scalars['Boolean']['output']>;
  authors?: Maybe<Array<Maybe<Author>>>;
  configuration?: Maybe<Configuration>;
  configurations?: Maybe<Array<Maybe<Configuration>>>;
  games?: Maybe<Array<Maybe<Game>>>;
  getAuthStatus?: Maybe<AuthStatus>;
  order?: Maybe<Order>;
  orders?: Maybe<Array<Maybe<Order>>>;
  paymentStatus?: Maybe<PaymentStatusOutput>;
  review?: Maybe<Review>;
  reviews?: Maybe<Array<Maybe<Review>>>;
  users?: Maybe<Array<Maybe<User>>>;
};


export type QueryConfigurationArgs = {
  id: Scalars['ID']['input'];
};


export type QueryGetAuthStatusArgs = {
  input?: InputMaybe<AuthStatusInput>;
};


export type QueryOrderArgs = {
  id: Scalars['ID']['input'];
};


export type QueryPaymentStatusArgs = {
  orderId: Scalars['ID']['input'];
};


export type QueryReviewArgs = {
  id: Scalars['ID']['input'];
};

export type Review = {
  __typename?: 'Review';
  comment: Scalars['String']['output'];
  id: Scalars['ID']['output'];
  rating: Scalars['Int']['output'];
};

export type ShippingAddress = {
  __typename?: 'ShippingAddress';
  city?: Maybe<Scalars['String']['output']>;
  country?: Maybe<Scalars['String']['output']>;
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  id?: Maybe<Scalars['ID']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  order?: Maybe<Order>;
  orderId?: Maybe<Scalars['ID']['output']>;
  orders?: Maybe<Array<Maybe<Order>>>;
  phoneNumber?: Maybe<Scalars['String']['output']>;
  postalCode?: Maybe<Scalars['String']['output']>;
  state?: Maybe<Scalars['String']['output']>;
  street?: Maybe<Scalars['String']['output']>;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
};

export type SignInInput = {
  email: Scalars['String']['input'];
  password?: InputMaybe<Scalars['String']['input']>;
};

export type SignUpInput = {
  avatar?: InputMaybe<Scalars['String']['input']>;
  email: Scalars['String']['input'];
  name: Scalars['String']['input'];
  password?: InputMaybe<Scalars['String']['input']>;
};

export type Subscription = {
  __typename?: 'Subscription';
  _?: Maybe<Scalars['Boolean']['output']>;
};

export type UpdateConfigurationInput = {
  caseColor?: InputMaybe<CaseColor>;
  caseFinish?: InputMaybe<CaseFinish>;
  caseMaterial?: InputMaybe<CaseMaterial>;
  croppedImgUrl?: InputMaybe<Scalars['String']['input']>;
  height?: InputMaybe<Scalars['Int']['input']>;
  id: Scalars['ID']['input'];
  imgUrl?: InputMaybe<Scalars['String']['input']>;
  orderStatus?: InputMaybe<OrderStatus>;
  phoneModel?: InputMaybe<PhoneModel>;
  width?: InputMaybe<Scalars['Int']['input']>;
};

export type User = {
  __typename?: 'User';
  avatar?: Maybe<Scalars['String']['output']>;
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  email: Scalars['String']['output'];
  id?: Maybe<Scalars['ID']['output']>;
  kindeUserId?: Maybe<Scalars['String']['output']>;
  name: Scalars['String']['output'];
  orders?: Maybe<Array<Maybe<Order>>>;
  password?: Maybe<Scalars['String']['output']>;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
};

export type CreateConfigurationMutationVariables = Exact<{
  input?: InputMaybe<CreateConfigurationInput>;
}>;


export type CreateConfigurationMutation = { __typename?: 'Mutation', createConfiguration?: { __typename?: 'CreateConfigurationOutput', id: string } | null };

export type GetConfigurationQueryVariables = Exact<{
  configurationId: Scalars['ID']['input'];
}>;


export type GetConfigurationQuery = { __typename?: 'Query', configuration?: { __typename?: 'Configuration', id?: string | null, width?: number | null, height?: number | null, croppedImgUrl?: string | null, imgUrl?: string | null, orderStatus?: OrderStatus | null, phoneModel?: PhoneModel | null, caseMaterial?: CaseMaterial | null, caseFinish?: CaseFinish | null, caseColor?: CaseColor | null } | null };

export type UpdateConfigurationMutationVariables = Exact<{
  input?: InputMaybe<UpdateConfigurationInput>;
}>;


export type UpdateConfigurationMutation = { __typename?: 'Mutation', updateConfiguration?: { __typename?: 'CreateConfigurationOutput', id: string, croppedImgUrl?: string | null, imgUrl?: string | null, height?: number | null, width?: number | null } | null };

export type CreateCheckoutSessionMutationVariables = Exact<{
  input?: InputMaybe<CreateOrderInput>;
}>;


export type CreateCheckoutSessionMutation = { __typename?: 'Mutation', createCheckoutSession?: { __typename?: 'CreateCheckoutSessionOutput', url?: string | null, order?: { __typename?: 'Order', id?: string | null, amount?: number | null, orderStatus?: OrderStatus | null } | null } | null };

export type GetPaymentStatusQueryVariables = Exact<{
  orderId: Scalars['ID']['input'];
}>;


export type GetPaymentStatusQuery = { __typename?: 'Query', paymentStatus?: { __typename?: 'PaymentStatusOutput', status?: boolean | null, order?: { __typename?: 'Order', id?: string | null, isPaid?: boolean | null, amount?: number | null, orderStatus?: OrderStatus | null, configuration?: { __typename?: 'Configuration', croppedImgUrl?: string | null, id?: string | null, caseColor?: CaseColor | null } | null, shippingAddress?: { __typename?: 'ShippingAddress', id?: string | null, name?: string | null, phoneNumber?: string | null, postalCode?: string | null, state?: string | null, street?: string | null, updatedAt?: any | null, createdAt?: any | null, country?: string | null, city?: string | null } | null, billingAddress?: { __typename?: 'BillingAddress', id?: string | null, name?: string | null, street?: string | null, city?: string | null, postalCode?: string | null, country?: string | null, state?: string | null, phoneNumber?: string | null, createdAt?: any | null, updatedAt?: any | null } | null } | null } | null };

export type GetAuthStatusQueryVariables = Exact<{
  input?: InputMaybe<AuthStatusInput>;
}>;


export type GetAuthStatusQuery = { __typename?: 'Query', getAuthStatus?: { __typename?: 'AuthStatus', success?: boolean | null, user?: { __typename?: 'User', id?: string | null, name: string, email: string } | null } | null };


export const CreateConfigurationDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"CreateConfiguration"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"input"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"CreateConfigurationInput"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"createConfiguration"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"input"},"value":{"kind":"Variable","name":{"kind":"Name","value":"input"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}}]}}]}}]} as unknown as DocumentNode<CreateConfigurationMutation, CreateConfigurationMutationVariables>;
export const GetConfigurationDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetConfiguration"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"configurationId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ID"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"configuration"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"configurationId"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"width"}},{"kind":"Field","name":{"kind":"Name","value":"height"}},{"kind":"Field","name":{"kind":"Name","value":"croppedImgUrl"}},{"kind":"Field","name":{"kind":"Name","value":"imgUrl"}},{"kind":"Field","name":{"kind":"Name","value":"orderStatus"}},{"kind":"Field","name":{"kind":"Name","value":"phoneModel"}},{"kind":"Field","name":{"kind":"Name","value":"caseMaterial"}},{"kind":"Field","name":{"kind":"Name","value":"caseFinish"}},{"kind":"Field","name":{"kind":"Name","value":"caseColor"}}]}}]}}]} as unknown as DocumentNode<GetConfigurationQuery, GetConfigurationQueryVariables>;
export const UpdateConfigurationDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"UpdateConfiguration"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"input"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"UpdateConfigurationInput"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"updateConfiguration"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"input"},"value":{"kind":"Variable","name":{"kind":"Name","value":"input"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"croppedImgUrl"}},{"kind":"Field","name":{"kind":"Name","value":"imgUrl"}},{"kind":"Field","name":{"kind":"Name","value":"height"}},{"kind":"Field","name":{"kind":"Name","value":"width"}}]}}]}}]} as unknown as DocumentNode<UpdateConfigurationMutation, UpdateConfigurationMutationVariables>;
export const CreateCheckoutSessionDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"CreateCheckoutSession"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"input"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"CreateOrderInput"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"createCheckoutSession"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"input"},"value":{"kind":"Variable","name":{"kind":"Name","value":"input"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"order"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"amount"}},{"kind":"Field","name":{"kind":"Name","value":"orderStatus"}}]}},{"kind":"Field","name":{"kind":"Name","value":"url"}}]}}]}}]} as unknown as DocumentNode<CreateCheckoutSessionMutation, CreateCheckoutSessionMutationVariables>;
export const GetPaymentStatusDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetPaymentStatus"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"orderId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ID"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"paymentStatus"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"orderId"},"value":{"kind":"Variable","name":{"kind":"Name","value":"orderId"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"order"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"isPaid"}},{"kind":"Field","name":{"kind":"Name","value":"amount"}},{"kind":"Field","name":{"kind":"Name","value":"orderStatus"}},{"kind":"Field","name":{"kind":"Name","value":"configuration"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"croppedImgUrl"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"caseColor"}}]}},{"kind":"Field","name":{"kind":"Name","value":"shippingAddress"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"phoneNumber"}},{"kind":"Field","name":{"kind":"Name","value":"postalCode"}},{"kind":"Field","name":{"kind":"Name","value":"state"}},{"kind":"Field","name":{"kind":"Name","value":"street"}},{"kind":"Field","name":{"kind":"Name","value":"updatedAt"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"country"}},{"kind":"Field","name":{"kind":"Name","value":"city"}}]}},{"kind":"Field","name":{"kind":"Name","value":"billingAddress"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"street"}},{"kind":"Field","name":{"kind":"Name","value":"city"}},{"kind":"Field","name":{"kind":"Name","value":"postalCode"}},{"kind":"Field","name":{"kind":"Name","value":"country"}},{"kind":"Field","name":{"kind":"Name","value":"state"}},{"kind":"Field","name":{"kind":"Name","value":"phoneNumber"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"updatedAt"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"status"}}]}}]}}]} as unknown as DocumentNode<GetPaymentStatusQuery, GetPaymentStatusQueryVariables>;
export const GetAuthStatusDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetAuthStatus"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"input"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"AuthStatusInput"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"getAuthStatus"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"input"},"value":{"kind":"Variable","name":{"kind":"Name","value":"input"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"success"}},{"kind":"Field","name":{"kind":"Name","value":"user"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"email"}}]}}]}}]}}]} as unknown as DocumentNode<GetAuthStatusQuery, GetAuthStatusQueryVariables>;