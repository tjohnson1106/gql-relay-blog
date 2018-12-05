import { commitMutation, graphql } from "react-relay";
import { environment } from "../relay/Environment";

const mutation = graphql`
  mutation CreateUserMutation($createUserInput: CreateUserInput!) {
    createUser(input: $createUserInput) {
      user {
        id
      }
    }
  }
`;
