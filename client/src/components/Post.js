import React, { Component } from "react";
import Modal from "react-modal";
import { createFragmentContainer, graphql } from "react-relay";

class Post extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isOpen: false
    };
  }
  render() {
    return (
      <div
        style={styles.postWrapper}
        onClick={() =>
          this.setState({
            isOpen: !this.state.isOpen
          })
        }
      >
        <h3>{this.props.post.title}</h3>
        <Modal isOpen={this.state.isOpen}>
          {/* unreachable code error: TypeError: this.props.post.author is null; 
      can't access its "fullname" property
      temporarily removing fullname  */}
          By: <div>{this.props.post.author}</div>
          <h3>{this.props.post.title}</h3>
          <div>{this.props.post.content}</div>
          <button
            style={styles.closeButton}
            onClick={() =>
              this.setState({
                isOpen: false
              })
            }
          >
            x
          </button>
        </Modal>
      </div>
    );
  }
}

const styles = {
  postWrapper: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    border: "1px solid #ccc",
    margin: 10,
    cursor: "pointer"
  },
  closeButton: {
    position: "absolute",
    right: 12,
    top: 10,
    border: 0,
    background: "white",
    fontSize: 25,
    color: "gray"
  }
};

// Post_post Post is filename post is prop

export default createFragmentContainer(
  Post,
  graphql`
    fragment Post_post on Post {
      id
      title
      content
      author {
        fullname
      }
    }
  `
);
