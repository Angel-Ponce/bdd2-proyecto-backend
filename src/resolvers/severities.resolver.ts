import { GraphQLError } from "graphql";
import { Args, Context } from "@types";
import { exec } from "@helpers";

const severityResolver = {
  Query: {
    severities: async (_o: any, _args: Args, context: Context) => {
      if (!context.user) throw new GraphQLError("Sin autenticación.");

      const [data, error] = await exec("allSeverities");

      if (error) throw error;

      return data;
    },

    severity: async (_o: any, args: Args, context: Context) => {
      if (!context.user) throw new GraphQLError("Sin autenticación");

      const [data, error] = await exec(
        "getSeverityById ?",
        [args.input.id || 0],
        false
      );

      if (error) throw error;

      return data;
    },
  },

  Mutation: {
    createSeverity: async (_o: any, args: Args, context: Context) => {
      if (!context.user) throw new GraphQLError("Sin autenticación");

      const [data, error] = await exec(
        "createSeverity ?",
        [args.input.name || ""],
        false
      );

      if (error) throw error;

      const [severity, error2] = await exec(
        "getSeverityById ?",
        [data.id || 0],
        false
      );

      if (error2) throw error2;

      return severity;
    },

    updateSeverity: async (_o: any, args: Args, context: Context) => {
      if (!context.user) throw new GraphQLError("Sin autenticación");

      const [data, error] = await exec(
        "updateSeverity ?, ?",
        [args.input.id || 0, args.input.name || ""],
        false
      );

      if (error) throw error;

      const [severity, error2] = await exec(
        "getSeverityById ?",
        [data.id || 0],
        false
      );

      if (error2) throw error2;

      return severity;
    },

    deleteSeverity: async (_o: any, args: Args, context: Context) => {
      if (!context.user) throw new GraphQLError("Sin autenticación");

      const [data, error] = await exec(
        "deleteSeverity ?",
        [args.input.id || 0],
        false
      );

      if (error) throw error;

      if (data.result) return { message: "Severidad eliminada correctamente." };

      return { message: "Severidad no eliminada" };
    },
  },
};

export { severityResolver };
