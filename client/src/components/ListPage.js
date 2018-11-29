import React, { Component } from "react";
import { Link } from "react-router-dom";

import Post from "./Post";
import { mockPostData } from "../data/mockPostData";

class ListPage extends Component {
  state = {};
  render() {
    return (
      <div style={styles.listPageWrapper}>
        <Link style={styles.postButtonWrapper} to="/create-post">
          + New Post
        </Link>
        <div style={styles.mockPost}>
          {mockPostData.map(({ node }) => (
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
    marginBottom: 10
  },
  mockPost: {
    marginTop: 20
  }
};

export default ListPage;
