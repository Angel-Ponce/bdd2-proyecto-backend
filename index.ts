import * as dotenv from "dotenv";
dotenv.config();
import { ApolloServer } from "@apollo/server";
import { startStandaloneServer } from "@apollo/server/standalone";
import { typeDefs } from "@schemas/index";
import { resolvers } from "@resolvers/index";
import { makeExecutableSchema } from "graphql-tools";
import { exec } from "@helpers";
import { User } from "@types";

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
  context: async ({ req }) => {
    const token = req.headers.authorization || "";

    const [data, error] = await exec("getUserByToken ?", [token], false);

    let user: User | null = null;

    if (error) {
      return { user: null };
    }

    user = data;

    return { user };
  },
}).then(({ url }) => {
  console.log(`🚀 Server ready at: ${url}`);
});
