import * as dotenv from "dotenv";
dotenv.config();
import { ApolloServer } from "@apollo/server";
import { startStandaloneServer } from "@apollo/server/standalone";
import { typeDefs } from "@schemas/index";
import { resolvers } from "@resolvers/index";
import { makeExecutableSchema } from "graphql-tools";
import { exec } from "@helpers";
import { User } from "@types";
import cors from "cors";
import express from "express";
import http from "http";
import { ApolloServerPluginDrainHttpServer } from "@apollo/server/plugin/drainHttpServer";
import bodyParser from "body-parser";
import { expressMiddleware } from "@apollo/server/express4";

const app = express();
const httpServer = http.createServer(app);

const server = new ApolloServer({
  schema: makeExecutableSchema({ typeDefs, resolvers }),
  plugins: [ApolloServerPluginDrainHttpServer({ httpServer })],
});

server.start().then(async () => {
  app.use(cors(), bodyParser.json(), expressMiddleware(server));
  await new Promise((resolve: any) =>
    httpServer.listen({ port: process.env.PORT || 4010 }, resolve)
  );
});

// startStandaloneServer(server, {
//   listen: {
//     port: Number(process.env.PORT || 4010),
//     // host: process.env.APP_HOST || "localhost",
//   },
//   context: async ({ req }) => {
//     const token = req.headers.authorization || "";

//     const [data, error] = await exec("getUserByToken ?", [token], false);

//     let user: User | null = null;

//     if (error) {
//       return { user: null };
//     }

//     user = data;

//     return { user };
//   },
// }).then(({ url }) => {
//   console.log(`🚀 Server ready at: ${url}`);
// });
