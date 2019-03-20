import express from "express";
import { ApolloServer, gql } from "apollo-server-express";
import { importSchema } from "graphql-import";

import resolvers from "./resolvers";

const app = express();
const typeDefs = gql(importSchema("src/schema.graphql"));
const server = new ApolloServer({ typeDefs, resolvers });

server.applyMiddleware({ app });

export default app;
