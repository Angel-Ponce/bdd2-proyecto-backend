import * as dotenv from "dotenv";
dotenv.config();
import { ApolloServer } from "@apollo/server";
import { startStandaloneServer } from "@apollo/server/standalone";
import { typeDefs } from "@schemas/index";
import { resolvers } from "@resolvers/index";
import { makeExecutableSchema } from "graphql-tools";

const server = new ApolloServer({
  schema: makeExecutableSchema({
    typeDefs,
    resolvers,
  }),
});

startStandaloneServer(server, {
  listen: {
    port: Number(process.env.APP_PORT || 4010),
    path: "graphql",
  },
}).then(({ url }) => {
  console.log(`🚀 Server ready at: ${url}`);
});
