const {
  GraphQLObjectType,
  GraphQLNonNull,
  GraphQLString,
  GraphQLID
} = require("graphql");

const Post = require("./Post");
const PostModel = require("..models/Post");

const Mutation = new GraphQLObjectType({
  name: "Mutation",
  description: "Mutation interface",
  fields: {
    createPost: {
      type: Post,
      args: {
        title: {
          type: GraphQLString,
          description: "Title of post"
        },
        content: {
          typeGraphQLString,
          description: "Content of post"
        }
      },
      resolve: (_, args) => {
        return PostModel.createPost({
          title: args.title,
          content: args.content
        });
      }
    }
  }
});

module.exports = Query;
