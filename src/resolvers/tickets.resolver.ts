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
  Mutation: {
    createTicket: async (_o: any, args: Args, context: Context) => {
      if (!context.user) throw new GraphQLError("Sin autenticación");

      const [data, e1] = await exec(
        "createTicket @0, @1, @2, @3, @4, @5",
        [
          args.input.name || "",
          args.input.userReporterId || 0,
          args.input.userResolverId || 0,
          args.input.categoryId || 0,
          args.input.statusId || 0,
          args.input.severityId || 0,
        ],
        false
      );

      if (e1) throw e1;

      const [ticket, e2] = await exec(
        "getTicketById @0",
        [data.id || 0],
        false
      );

      if (e2) throw e2;

      return ticket;
    },

    updateTicket: async (_o: any, args: Args, context: Context) => {
      if (!context.user) throw new GraphQLError("Sin autenticación");

      const [data, e1] = await exec(
        "updateTicket @0, @1, @2, @3, @4, @5, @6, @7",
        [
          args.input.id || 0,
          args.input.name || null,
          args.input.userReporterId || null,
          args.input.userResolverId || null,
          args.input.categoryId || null,
          args.input.statusId || null,
          args.input.severityId || null,
          context.user.id || 0,
        ],
        false
      );

      if (e1) throw e1;

      const [ticket, e2] = await exec(
        "getTicketById @0",
        [data.id || 0],
        false
      );

      if (e2) throw e2;

      return ticket;
    },

    deleteTicket: async (_o: any, args: Args, context: Context) => {
      if (!context.user) throw new GraphQLError("Sin autenticación");

      const [data, error] = await exec(
        "deleteTicket @0, @1",
        [args.input.id || 0, context.user.id || 0],
        false
      );

      if (error) throw error;

      if (data.result) return { message: "Ticket eliminado correctamente." };

      return { message: "Ticket no eliminado." };
    },
  },
};

export { ticketResolver };
