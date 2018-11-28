const {
  GraphQLObjectType
  // GraphQLNonNull,
  // GraphQLList,
  // GraphQLID
} = require("graphql");
const {
  connectionArgs,
  connectionFromPromisedArray
} = require("graphql-relay");

const { nodeField } = require("../interface/Node");
const { Post, PostConnection } = require("./Post");
const PostModel = require("../models/PostModel");

const Query = new GraphQLObjectType({
  name: "Query",
  description: "Query interface",
  fields: {
    node: nodeField,
    posts: {
      type: PostConnection,
      args: connectionArgs,
      resolve: (_, args) =>
        connectionFromPromisedArray(PostModel.getPosts(), args)
    }
  }
});

module.exports = Query;

///////////////////////////////////////////////////////////////
// 112820181347: Change export to object do to Query.node/////
// ^ must be  an object warning /////////////////////////////
////////////////////////////////////////////////////////////
