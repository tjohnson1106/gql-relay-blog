const {
  GraphQLObjectType,
  GraphQLNonNull
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
    // replacing 'posts with viewer object'
    viewer: {
      name: "Viewer",
      description: "Viewer pattern implementation",
      type: new GraphQLNonNull(Viewer),
      resolve: (_, args) => {
        return {};
      }
    }
  }
});

module.exports = Query;

///////////////////////////////////////////////////////////////
// 112820181347: Change export to object do to Query.node/////
// ^ must be  an object warning /////////////////////////////
////////////////////////////////////////////////////////////
