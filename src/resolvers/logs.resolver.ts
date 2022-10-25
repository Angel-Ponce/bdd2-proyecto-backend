import { GraphQLError } from "graphql";
import { Args, Context, Parent } from "@types";
import { exec } from "@helpers";

const logResolver = {
  Query: {
    logs: async (_o: any, _args: Args, context: Context) => {
      if (!context.user) throw new GraphQLError("Sin autenticación.");

      const [sessionLogs, e1] = await exec("allSessionLogs");

      if (e1) throw e1;

      const [deletedTicketsLogs, e2] = await exec("allTicketsDeleted");

      if (e2) throw e2;

      const [ticketChangeStatusLogs, e3] = await exec("allTicketChangesStatus");

      if (e3) throw e3;

      return {
        sessionLogs,
        deletedTicketsLogs,
        ticketChangeStatusLogs,
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

  DeletedTicketsLog: {
    ticketUserReporter: async (parent: Parent) => {
      const [data, error] = await exec(
        "getUserById @0",
        [parent.ticketUserReporterId || 0],
        false
      );

      if (error) throw error;

      return data;
    },

    ticketUserResolver: async (parent: Parent) => {
      const [data, error] = await exec(
        "getUserById @0",
        [parent.ticketUserResolverId || 0],
        false
      );

      if (error) throw error;

      return data;
    },

    ticketCategory: async (parent: Parent) => {
      const [data, error] = await exec(
        "getCategoryById @0",
        [parent.ticketCategoryId || 0],
        false
      );

      if (error) throw error;

      return data;
    },

    ticketStatus: async (parent: Parent) => {
      const [data, error] = await exec(
        "getStateById @0",
        [parent.ticketStatusId || 0],
        false
      );

      if (error) throw error;

      return data;
    },

    ticketSeverity: async (parent: Parent) => {
      const [data, error] = await exec(
        "getSeverityById @0",
        [parent.ticketSeverityId || 0],
        false
      );

      if (error) throw error;

      return data;
    },

    user: async (parent: Parent) => {
      const [data, error] = await exec(
        "getUserById @0",
        [parent.userId || 0],
        false
      );

      if (error) throw error;

      return data;
    },
  },

  TicketChangeStatusLog: {
    ticket: async (parent: Parent) => {
      const [ticket, error] = await exec(
        "getTicketById @0",
        [parent.ticketId || 0],
        false
      );

      if (error) throw error;

      return ticket;
    },

    status: async (parent: Parent) => {
      const [status, error] = await exec(
        "getStateById @0",
        [parent.statusId],
        false
      );

      if (error) throw error;

      return status;
    },

    user: async (parent: Parent) => {
      const [user, error] = await exec(
        "getUserById @0",
        [parent.userId],
        false
      );

      if (error) throw error;

      return user;
    },
  },
};

export { logResolver };
