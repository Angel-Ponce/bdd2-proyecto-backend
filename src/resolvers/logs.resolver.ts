import { GraphQLError } from "graphql";
import { Args, Context } from "@types";
import { exec } from "@helpers";

const logResolver = {
  Query: {
    logs: async (_o: any, args: Args, context: Context) => {
      if (!context.user) throw new GraphQLError("Sin autenticación.");

      const [sessionLogs, e1] = await exec("allSessionLogs");

      if (e1) throw e1;

      return {
        sessionLogs,
      };
    },
  },
};

export { logResolver };
