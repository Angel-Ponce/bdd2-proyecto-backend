import * as dotenv from "dotenv";
dotenv.config();
import "reflect-metadata";
import { ApolloServer } from "apollo-server-express";
import { typeDefs } from "@schemas/index";
import { resolvers } from "@resolvers/index";
import { makeExecutableSchema } from "graphql-tools";
import { exec } from "@helpers";
import { User } from "@types";
import { ApolloServerPluginDrainHttpServer } from "apollo-server-core";
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
    plugins: [ApolloServerPluginDrainHttpServer({ httpServer })],
    introspection: true,
    context: async ({ req }) => {
      const token = req.headers.authorization || "";
      const [data, error] = await exec("getUserByToken @0", [token], false);
      let user: User | null = null;
      if (error) {
        return { user: null };
      }
      user = data;
      return { user };
    },
  });

  await server.start();

  server.applyMiddleware({ app });

  await new Promise((resolve: any) =>
    httpServer.listen({ port: process.env.PORT || 4010 }, resolve)
  );
};

initServer();
