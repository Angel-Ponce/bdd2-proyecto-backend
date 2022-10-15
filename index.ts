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
    port: 4000,
  },
}).then(({ url }) => {
  console.log(`🚀 Server ready at: ${url}`);
});
