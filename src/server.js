import express from "express";
import { ApolloServer, gql } from "apollo-server-express";
import { importSchema } from "graphql-import";

const app = express();

const typeDefs = gql(importSchema("src/schema/schema.graphql"));

const resolvers = {
  Query: {
    hello: () => "Hello",
    posts: () => [{ id: 1, title: "Title", body: "Body" }],
  },
};

const server = new ApolloServer({ typeDefs, resolvers });

server.applyMiddleware({ app });

export default app;
