const express = require("express");
const graphQLHTTP = require("express-graphql");
const { GraphQLSchema } = require("graphql");

const Post = require("./src/types/Post");
const Query = require("./src/types/Query");
const Mutation = require("./src/types/Mutation");

const schema = new GraphQLSchema({
  query: Query,
  mutation: Mutation
});

let app = express();

app.use(
  "/api",
  graphQLHTTP({
    schema,
    graphiql: true
  })
);
