import * as dotenv from "dotenv";
dotenv.config();
import { ApolloServer } from "@apollo/server";
import { startStandaloneServer } from "@apollo/server/standalone";
import { main } from "@schemas/index";
import { resolvers } from "@resolvers/index";

const server = new ApolloServer({
  typeDefs: [main],
  resolvers,
});

startStandaloneServer(server, {
  listen: {
    port: Number(process.env.APP_PORT || 4010),
  },
}).then(({ url }) => {
  console.log(`🚀 Server ready at: ${url}`);
});
