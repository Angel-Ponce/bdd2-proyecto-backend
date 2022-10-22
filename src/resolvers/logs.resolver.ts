import { GraphQLError } from "graphql";
import { Args, Context, Parent } from "@types";
import { exec } from "@helpers";

const logResolver = {
  Query: {
    logs: async (_o: any, _args: Args, context: Context) => {
      if (!context.user) throw new GraphQLError("Sin autenticación.");

      const [sessionLogs, e1] = await exec("allSessionLogs");

      if (e1) throw e1;

      return {
        sessionLogs,
      };
    },
  },

  SessionLog: {
    user: async (parent: Parent) => {
      if (!parent.userId) return null;

      const [user, e1] = await exec(
        "getUserById @0",
        [parent.userId || 0],
        false
      );

      if (e1) throw e1;

      return user;
    },
  },
};

export { logResolver };
