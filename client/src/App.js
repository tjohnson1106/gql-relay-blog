import React, { Component } from "react";
import { QueryRenderer, graphql } from "react-relay";
import { environment } from "./relay/Environment";

import ListPage from "./components/ListPage";

const AppAllPostQuery = graphql`
  query AppAllPostQuery($count: Int!, $after: String) {
    viewer {
      ...ListPage_viewer
    }
  }
`;

class App extends Component {
  render() {
    return (
      <QueryRenderer
        environment={environment}
        query={AppAllPostQuery}
        variables={{ count: 1 }}
        render={({ error, props }) => {
          if (error) {
            return <div>{error.message}</div>;
          } else if (props) {
            return <ListPage viewer={props.viewer} />;
          }
          return <div>Loading</div>;
        }}
      />
    );
  }
}

export default App;

//     const App = () => {
//   return (
//     <QueryRenderer
//     environment={environment}
//     query={AppAllPostQuery}
//     render={({ error, props }) => {
//       if (error) {
//         return <div>{error.message}</div>;
//       } else if (props) {
//         return <ListPage viewer={props.viewer} />;
//       }
//       return <div>Loading</div>;
//     }}
//   />

//   )
// }
