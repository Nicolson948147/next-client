import { gql } from "@apollo/client";

export const CREATE_CONFIGURATION = gql`
  mutation CreateConfiguration($input: CreateConfigurationInput) {
    createConfiguration(input: $input) {
      id
    }
  }
`;

export const GET_CONFIGURATION = gql`
  query GetConfiguration($configurationId: ID!) {
    configuration(id: $configurationId) {
      id
      width
      height
      croppedImgUrl
      imgUrl
      orderStatus
      phoneModel
      caseMaterial
      caseFinish
      caseColor
    }
  }
`;

export const UPDATE_CONFIGURATION = gql`
  mutation UpdateConfiguration($input: UpdateConfigurationInput) {
    updateConfiguration(input: $input) {
      id
      croppedImgUrl
      imgUrl
      height
      width
    }
  }
`;
