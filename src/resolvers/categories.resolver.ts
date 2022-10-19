import { GraphQLError } from "graphql";
import { db } from "@db";
import { Args, Context } from "@types";

const categoryResolver = {
  Query: {
    categories: async (_o: any, args: Args, context: Context) => {
      if (!context.user) throw new GraphQLError("Sin autenticación.");

      const data = await db.query("EXEC dbo.allCategories");

      return data[0];
    },
  },
};

export { categoryResolver };
