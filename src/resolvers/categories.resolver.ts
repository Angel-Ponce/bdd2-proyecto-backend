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

  Mutation: {
    createCategory: async (_o: any, args: Args, context: Context) => {
      if (!context.user) throw new GraphQLError("Sin autenticación");

      const [data, error] = await exec(
        "createCategory ?",
        [args.input.name || ""],
        false
      );

      if (error) throw error;

      const [category, error2] = await exec(
        "getCategoryById ?",
        [data.id || 0],
        false
      );

      if (error2) throw error2;

      return category;
    },

    updateCategory: async (_o: any, args: Args, context: Context) => {
      if (!context.user) throw new GraphQLError("Sin autenticación");

      const [data, error] = await exec(
        "updateCategory ?, ?",
        [args.input.id || 0, args.input.name || ""],
        false
      );

      if (error) throw error;

      const [category, error2] = await exec(
        "getCategoryById ?",
        [data.id || 0],
        false
      );

      if (error2) throw error2;

      return category;
    },

    deleteCategory: async (_o: any, args: Args, context: Context) => {
      if (!context.user) throw new GraphQLError("Sin autenticación");

      const [data, error] = await exec(
        "deleteCategory ?",
        [args.input.id || 0],
        false
      );

      if (error) throw error;

      if (data.result) return { message: "Categoria eliminada correctamente." };

      return { message: "Categoria no eliminada" };
    },
  },
};

export { categoryResolver };
