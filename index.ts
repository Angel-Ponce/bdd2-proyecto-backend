import * as dotenv from "dotenv";
dotenv.config();
import { ApolloServer } from "@apollo/server";
import { startStandaloneServer } from "@apollo/server/standalone";
import { typeDefs } from "@schemas/index";
import { resolvers } from "@resolvers/index";
import { makeExecutableSchema } from "graphql-tools";
import { db } from "@db";

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

    const data: any = await db.query("exec getUserByToken ?", {
      replacements: [token],
    });

    const user = {
      id: data?.[0]?.[0]?.id || null,
      name: data?.[0]?.[0]?.name || null,
      lastname: data?.[0]?.[0]?.lastname || null,
      email: data?.[0]?.[0]?.email || null,
      photoURL: data?.[0]?.[0]?.photoURL || null,
      sessionToken: data?.[0]?.[0]?.sessionToken || null,
      createdAt: data?.[0]?.[0]?.createdAt || null,
    };

    return { user };
  },
}).then(({ url }) => {
  console.log(`🚀 Server ready at: ${url}`);
});
