import { gql } from "@apollo/client";

export const GET_AUTH_STATUS = gql`
  query GetAuthStatus($input: AuthStatusInput) {
    getAuthStatus(input: $input) {
      success
      user {
        id
        name
        email
      }
    }
  }
`;
