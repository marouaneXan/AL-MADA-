import { gql } from "@apollo/client";
const GET_PRODUCTS = gql`
  query getProducts {
    products {
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
export { GET_PRODUCTS };
