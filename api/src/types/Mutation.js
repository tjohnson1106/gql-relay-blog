const {
  GraphQLObjectType,
  GraphQLNonNull,
  GraphQLString,
  GraphQLID
} = require("graphql");
const { mutationWithClientMutationId } = require("graphql-relay");

const { Post } = require("./Post");
const PostModel = require("../models/PostModel");

const CreatePostMutation = mutationWithClientMutationId({
  name: "CreatePost",
  inputFields: {
    title: { type: new GraphQLNonNull(GraphQLString) },
    content: { type: new GraphQLNonNull(GraphQLString) }
  },
  outputFields: {
    post: {
      type: Post
    }
  },

  mutateAndGetPayload: args => {
    return new Promise((resolve, reject) => {
      PostModel.createPost({
        title: args.title,
        content: args.content
      })
        .then(post => resolve({ post }))
        .catch(reject);
    });
  }
});

const Mutation = new GraphQLObjectType({
  name: "Mutation",
  description: "Mutation interface",
  fields: {
    createPost: CreatePostMutation
  }
});

module.exports = Mutation;
