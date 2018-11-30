const {
  GraphQLObjectType,
  GraphQLNonNull,
  GraphQLString,
  GraphQLID
} = require("graphql");
const { globalIdField, connectionDefinitions } = require("graphql-relay");

const { nodeInterface } = require("../interface/Node");

const { User } = require("./User");
const PostModel = require("../models/PostModel");

// TODO: Implement author 113020181757

const Post = new GraphQLObjectType({
  name: "Post",
  description: "Post type definition",
  interfaces: [nodeInterface],
  fields: {
    id: globalIdField(),

    // {
    //   *Removed upon Relay implementation
    //   type: new GraphQLNonNull(GraphQLID),
    //   description: "ID of the post",
    //   resolve: post => post.id
    // },

    title: {
      type: GraphQLString,
      description: "Title of the post",
      resolve: post => post.title
    },
    content: {
      type: GraphQLString,
      description: "Content of the post",
      resolve: post => post.content
    }
  }
});

const { connectionType: PostConnection } = connectionDefinitions({
  nodeType: Post
});

module.exports = { Post, PostConnection };
