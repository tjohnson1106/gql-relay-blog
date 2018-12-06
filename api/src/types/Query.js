const {
  GraphQLObjectType,
  GraphQLNonNull,
  GraphQLID,
  GraphQLString
} = require("graphql");
const {
  connectionArgs,
  connectionFromPromisedArray,
  fromGlobalId
} = require("graphql-relay");

const { User } = require("./User");
const UserModel = require("../models/UserModel");

const { nodeField } = require("../interface/Node");

const { Post, PostConnection } = require("./Post");
const PostModel = require("../models/PostModel");

const Viewer = new GraphQLObjectType({
  name: "Viewer",
  fields: {
    allPosts: {
      type: new GraphQLNonNull(PostConnection),
      args: {
        ...connectionArgs,
        order: {
          type: GraphQLString
        }
      },
      resolve: (_, args) =>
        connectionFromPromisedArray(PostModel.getPosts(args.order), args)
    },
    User: {
      type: User,
      args: {
        id: {
          type: GraphQLID
        },
        username: {
          type: GraphQLString
        }
      },

      // resolve: use this to get the GQL
      // ^Global ID to get the username and id

      resolve: (_, args) => {
        const { type, id } = fromGlobalId(args.id);
        if (type === "User") {
          return UserModel.getUser(id, args.username);
        } else {
          return null;
        }
      }
    },
    id: {
      type: new GraphQLNonNull(GraphQLID),
      args: {},
      resolve: (_, args) => "viewer-fixed"
    }
  }
});

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
