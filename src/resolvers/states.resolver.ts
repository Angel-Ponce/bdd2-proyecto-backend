import { GraphQLError } from "graphql";
import { Args, Context } from "@types";
import { exec } from "@helpers";

const stateResolver = {
  Query: {
    states: async (_o: any, _args: Args, context: Context) => {
      if (!context.user) throw new GraphQLError("Sin autenticación.");

      const [data, error] = await exec("allStates");

      if (error) throw error;

      return data;
    },

    state: async (_o: any, args: Args, context: Context) => {
      if (!context.user) throw new GraphQLError("Sin autenticación");

      const [data, error] = await exec(
        "getStateById ?",
        [args.input.id || 0],
        false
      );

      if (error) throw error;

      return data;
    },
  },

  Mutation: {
    createState: async (_o: any, args: Args, context: Context) => {
      if (!context.user) throw new GraphQLError("Sin autenticación");

      const [data, error] = await exec(
        "createState ?",
        [args.input.name || ""],
        false
      );

      if (error) throw error;

      const [state, error2] = await exec(
        "getStateById ?",
        [data.id || 0],
        false
      );

      if (error2) throw error2;

      return state;
    },

    updateState: async (_o: any, args: Args, context: Context) => {
      if (!context.user) throw new GraphQLError("Sin autenticación");

      const [data, error] = await exec(
        "updateState ?, ?",
        [args.input.id || 0, args.input.name || ""],
        false
      );

      if (error) throw error;

      const [state, error2] = await exec(
        "getStateById ?",
        [data.id || 0],
        false
      );

      if (error2) throw error2;

      return state;
    },

    deleteState: async (_o: any, args: Args, context: Context) => {
      if (!context.user) throw new GraphQLError("Sin autenticación");

      const [data, error] = await exec(
        "deleteState ?",
        [args.input.id || 0],
        false
      );

      if (error) throw error;

      if (data.result) return { message: "Estado eliminado correctamente." };

      return { message: "Estado no eliminado" };
    },
  },
};

export { stateResolver };
