import { gql } from "@apollo/client";
const GET_PRODUCTS = gql`
  query getProducts {
    products {
      id
      Brand_name
      IPR
      Status
      Number
      Office
      Owner
      Designation
      Nice_classification
    }
  }
`;
const GET_PRODUCT = gql`
  query getProduct($id: ID!) {
    product(id: $id) {
      Brand_name
      IPR
      Status
      Number
      Office
      Owner
      Designation
      Nice_classification
    }
  }
`;
export { GET_PRODUCTS, GET_PRODUCT };
