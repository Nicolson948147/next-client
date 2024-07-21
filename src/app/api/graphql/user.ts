import { gql } from "@apollo/client";

export const GET_AUTH_STATUS = gql`
  query GetAuthStatus($input: AuthStatusInput) {
    getAuthStatus(input: $input) {
      success
      token
      user {
        id
        name
        email
      }
    }
  }
`;

export const USER_LOGIN = gql`
  mutation Login($input: SignInInput!) {
    signIn(input: $input) {
      user {
        email
        password
      }
      access_token
      isNotHavePassword
    }
  }
`;

export const USER_REGISTER = gql`
  mutation Register($input: SignUpInput!) {
    signUp(input: $input) {
      success
      message
    }
  }
`;

export const GET_USERS = gql`
  query GetUsers {
    users {
      id
      name
      email
      avatar
      createdAt
      updatedAt
    }
  }
`;
