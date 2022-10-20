import { GraphQLError } from "graphql";
import { Args, Context } from "@types";
import { exec } from "@helpers";

const categoryResolver = {
  Query: {
    categories: async (_o: any, _args: Args, context: Context) => {
      if (!context.user) throw new GraphQLError("Sin autenticación.");

      const [data, error] = await exec("allCategories");

      if (error) throw error;

      return data;
    },

    category: async (_o: any, args: Args, context: Context) => {
      if (!context.user) throw new GraphQLError("Sin autenticación");

      const [data, error] = await exec(
        "getCategoryById ?",
        [args.input.id || 0],
        false
      );

      if (error) throw error;

      return data;
    },
  },
};

export { categoryResolver };
