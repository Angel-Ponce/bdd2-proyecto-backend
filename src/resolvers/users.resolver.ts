import { GraphQLError } from "graphql";
import { Args, Context, Parent } from "@types";
import { exec } from "@helpers";

const userResolver = {
  Query: {
    users: async (_o: any, _args: Args, context: Context) => {
      if (!context.user) throw new GraphQLError("Sin autenticación");

      const [data, e1] = await exec("allUsers");

      if (e1) throw e1;

      return data;
    },

    user: async (_o: any, args: Args, context: Context) => {
      if (!context.user) throw new GraphQLError("Sin autenticación");

      const [data, e1] = await exec(
        "getUserById ?",
        [args.input.id || 0],
        false
      );

      if (e1) throw e1;

      return data;
    },
  },

  User: {
    ticketsResolvedCount: async (parent: Parent) => {
      const [data, e1] = await exec(
        "ticketsResolvedByUserId ?",
        [parent.id || 0],
        false
      );

      if (e1) throw e1;

      return data.count;
    },

    ticketsReportedCount: async (parent: Parent) => {
      const [data, e1] = await exec(
        "ticketsReportedByUserId ?",
        [parent.id || 0],
        false
      );

      if (e1) throw e1;

      return data.count;
    },
  },
};

export { userResolver };
