import { GraphQLError } from "graphql";
import { Args, Context, Parent } from "@types";
import { exec } from "@helpers";

const ticketResolver = {
  Query: {
    tickets: async (_o: any, _args: Args, context: Context) => {
      if (!context.user) throw new GraphQLError("Sin autenticación");

      const [data, error] = await exec("allTickets");

      if (error) throw error;

      return data;
    },

    ticket: async (_o: any, args: Args, context: Context) => {
      if (!context.user) throw new GraphQLError("Sin autenticación");

      const [data, error] = await exec(
        "getTicketById @0",
        [args.input.id],
        false
      );

      if (error) throw error;

      return data;
    },
  },
  Ticket: {
    userReporter: async (parent: Parent) => {
      const [data, error] = await exec(
        "getUserById @0",
        [parent.userReporterId || 0],
        false
      );

      if (error) throw error;

      return data;
    },

    userResolver: async (parent: Parent) => {
      const [data, error] = await exec(
        "getUserById @0",
        [parent.userResolverId || 0],
        false
      );

      if (error) throw error;

      return data;
    },

    category: async (parent: Parent) => {
      const [data, error] = await exec(
        "getCategoryById @0",
        [parent.categoryId || 0],
        false
      );

      if (error) throw error;

      return data;
    },

    status: async (parent: Parent) => {
      const [data, error] = await exec(
        "getStateById @0",
        [parent.statusId || 0],
        false
      );

      if (error) throw error;

      return data;
    },

    severity: async (parent: Parent) => {
      const [data, error] = await exec(
        "getSeverityById @0",
        [parent.severityId || 0],
        false
      );

      if (error) throw error;

      return data;
    },
  },
  Mutation: {},
};

export { ticketResolver };
