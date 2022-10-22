import * as dotenv from "dotenv";
dotenv.config();
import "reflect-metadata";
import { ApolloServer } from "@apollo/server";
import { typeDefs } from "@schemas/index";
import { resolvers } from "@resolvers/index";
import { makeExecutableSchema } from "graphql-tools";
import { exec } from "@helpers";
import { User } from "@types";
import { ApolloServerPluginLandingPageProductionDefault } from "@apollo/server/plugin/landingPage/default";
import { ApolloServerPluginDrainHttpServer } from "@apollo/server/plugin/drainHttpServer";
import { expressMiddleware } from "@apollo/server/express4";
import express from "express";
import http from "http";
import cors from "cors";
import bodyParser from "body-parser";
import { db } from "@db";

const initServer = async () => {
  await db.initialize();
  const app = express();
  app.use(cors());
  app.use(bodyParser.json());

  const httpServer = http.createServer(app);

  const server = new ApolloServer({
    schema: makeExecutableSchema({
      typeDefs,
      resolvers,
    }),
    plugins: [
      // ApolloServerPluginLandingPageProductionDefault(),
      ApolloServerPluginDrainHttpServer({ httpServer }),
    ],
    introspection: true,
  });

  await server.start();

  app.use("/graphql", expressMiddleware(server));

  await new Promise((resolve: any) =>
    httpServer.listen({ port: process.env.PORT || 4010 }, resolve)
  );
};

initServer();
