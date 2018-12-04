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

export default (username, password, fullname, callback) => {
  const variables = {
    createUserInput: {
      username,
      password,
      fullname,
      clientMutationId: ""
    }
  };

  commitMutation(environment, {
    mutation,
    variables,
    onCompleted: response => {
      callback(response.createUser.user);
    },
    onError: err => console.log("Error!: ", err, "Error!")
  });
};
