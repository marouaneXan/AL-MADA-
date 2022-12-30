import { gql } from "@apollo/client";
const DELETE_PRODUCT = gql`
  mutation deleteProduct($id: ID!) {
    deleteProduct(id: $id) {
      id
    }
  }
`;
const ADD_PRODUCT = gql`
  mutation addProduct(
    $Brand_name: String!
    $Status: String!
    $Number: String!
    $Office: String!
    $Owner: String!
    $Designation: String!
    $Nice_classification: String!
    $IPR: String!
  ) {
    addProduct(
      Brand_name: $Brand_name
      Status: $Status
      Number: $Number
      Office: $Office
      Owner: $Owner
      Designation: $Designation
      Nice_classification: $Nice_classification
      IPR: $IPR
    ) {
      id
    }
  }
`;
export { DELETE_PRODUCT, ADD_PRODUCT };
