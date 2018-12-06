import React, { Component } from "react";
import { Link } from "react-router-dom";
import { createFragmentContainer, graphql } from "react-relay";

import Post from "./Post";
// import { mockPostData } from "../data/mockPostData";

// Remember to make sure that state is holding the user object

class ListPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user: null
    };
  }

  componentDidMount() {
    const user = localStorage.getItem("User");
    if (user) {
      this.setState({
        user: JSON.parse(user)
      });
    }
  }

  render() {
    return (
      <div style={styles.listPageWrapper}>
        <Link style={styles.postButtonWrapper} to="/create-post">
          + New Post
        </Link>
        {!this.state.user && (
          <Link style={styles.buttonWrapper} to="/login">
            Login
          </Link>
        )}
        {this.state.user && (
          <a
            onClick={() => {
              localStorage.removeItem("User");
              window.location.reload();
            }}
            style={styles.buttonWrapper}
          >
            Logout
          </a>
        )}

        <div style={styles.mockPost}>
          {this.props.viewer.allPosts.edges.map(({ node }) => (
            <Post key={node._id} post={node} />
          ))}
        </div>
      </div>
    );
  }
}

const styles = {
  listPageWrapper: {
    marginTop: 20,
    textAlign: "center"
  },
  postButtonWrapper: {
    padding: 10,
    background: "white",
    border: "2px solid indianred",
    color: "indianred",
    borderRadius: 6,
    marginTop: 10,
    marginBottom: 10,
    marginLeft: 10,
    textDecoration: "underline",
    cursor: "pointer"
  },
  mockPost: {
    marginTop: 20
  }
};

export default createFragmentContainer(
  ListPage,
  graphql`
    fragment ListPage_viewer on Viewer {
      allPosts(last: 100, order: "DESC")
        @connection(key: "ListPage_allPosts", filters: []) {
        edges {
          node {
            ...Post_post
          }
        }
      }
    }
  `
);
