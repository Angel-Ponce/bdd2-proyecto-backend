import * as dotenv from "dotenv";
dotenv.config();
import { ApolloServer } from "@apollo/server";
import { typeDefs } from "@schemas/index";
import { resolvers } from "@resolvers/index";
import { makeExecutableSchema } from "graphql-tools";
import { exec } from "@helpers";
import { User } from "@types";
import { ApolloServerPluginLandingPageLocalDefault } from "@apollo/server/plugin/landingPage/default";
import { ApolloServerPluginDrainHttpServer } from "@apollo/server/plugin/drainHttpServer";
import { expressMiddleware } from "@apollo/server/express4";
import express from "express";
import http from "http";
import cors from "cors";
import bodyParser from "body-parser";

const initServer = async () => {
  const app = express();
  const httpServer = http.createServer(app);

  const server = new ApolloServer({
    schema: makeExecutableSchema({
      typeDefs,
      resolvers,
    }),
    plugins: [
      ApolloServerPluginLandingPageLocalDefault(),
      ApolloServerPluginDrainHttpServer({ httpServer }),
    ],
    introspection: process.env.NODE_ENV == "production",
  });

  await server.start();

  app.use(cors(), express.json(), expressMiddleware(server));

  await new Promise((resolve: any) =>
    httpServer.listen({ port: process.env.PORT || 4010 }, resolve)
  );
};

initServer();
