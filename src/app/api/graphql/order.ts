import { gql } from "@apollo/client";

export const CREATE_CHECKOUT_SESSION = gql`
  mutation CreateCheckoutSession($input: CreateOrderInput) {
    createCheckoutSession(input: $input) {
      order {
        id
        amount
        orderStatus
      }
      url
    }
  }
`;

export const GET_ORDER_PAYMENT_STATUS = gql`
  query GetPaymentStatus($orderId: ID!) {
    paymentStatus(orderId: $orderId) {
      order {
        id
        isPaid
        amount
        orderStatus
        configuration {
          croppedImgUrl
          id
          caseColor
        }
        shippingAddress {
          id
          name
          phoneNumber
          postalCode
          state
          street
          updatedAt
          createdAt
          country
          city
        }
        billingAddress {
          id
          name
          street
          city
          postalCode
          country
          state
          phoneNumber
          createdAt
          updatedAt
        }
      }
      status
    }
  }
`;
