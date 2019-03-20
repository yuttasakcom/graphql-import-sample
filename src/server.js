import http from "http";
import express from "express";
import { ApolloServer, PubSub } from "apollo-server-express";
import { importSchema } from "graphql-import";

import resolvers from "./resolvers";
import prisma from "./prisma";

const app = express();
const typeDefs = importSchema("src/schema.graphql");

const pubsub = new PubSub();

const server = new ApolloServer({
  typeDefs,
  resolvers,
  context: { prisma, pubsub },
});

server.applyMiddleware({ app });

const httpServer = http.createServer(app);
server.installSubscriptionHandlers(httpServer);

export default httpServer;
