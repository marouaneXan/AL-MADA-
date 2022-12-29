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
    $Designation: String!
    $Number: String!
    $Office: String!
    $IPR: String!
    $Owner: String!
    $Nice_classification: String!
    $Status: String!
  ) {
    addProduct(
      Brand_name: $Brand_name
      Designation: $Designation
      Number: $Number
      Office: $Office
      IPR: $IPR
      Owner: $Owner
      Nice_classification: $Nice_classification
      Status: $Status
    ) {
      id
    }
  }
`;
export { DELETE_PRODUCT, ADD_PRODUCT };
