import { GraphQLError } from "graphql";
import { Args, Context } from "@types";
import { exec } from "@helpers";

const reportResolver = {
  Query: {
    reports: async (_o: any, _args: Args, context: Context) => {
      if (!context.user) throw new GraphQLError("Sin autenticación.");

      const [ticketsByCategory, e1] = await exec("ticketsByCategory", []);

      if (e1) throw e1;

      const [ticketsBySeverity, e2] = await exec("ticketsBySeverity", []);

      if (e2) throw e2;

      const [ticketsByStatus, e3] = await exec("ticketsByStatus", []);

      if (e3) throw e3;

      const [usersHistory, e4] = await exec("usersHistory", []);

      if (e4) throw e4;

      const [userWithMoreTicketsResolved, e5] = await exec(
        "userWithMoreTicketsResolved",
        [],
        false
      );

      if (e5) throw e5;

      const [userWithMoreTicketsReported, e6] = await exec(
        "userWithMoreTicketsReported",
        [],
        false
      );

      if (e6) throw e6;

      const [userWithLessTicketsResolved, e7] = await exec(
        "userWithLessTicketsResolved",
        [],
        false
      );

      if (e7) throw e7;

      const [userWithLessTicketsReported, e8] = await exec(
        "userWithLessTicketsReported",
        [],
        false
      );

      if (e8) throw e8;

      return {
        ticketsByCategory,
        ticketsBySeverity,
        ticketsByStatus,
        usersHistory,
        kpis: {
          userWithMoreTicketsReported,
          userWithMoreTicketsResolved,
          userWithLessTicketsReported,
          userWithLessTicketsResolved,
        },
      };
    },
  },
};

export { reportResolver };
