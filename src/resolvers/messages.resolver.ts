import { GraphQLError } from "graphql";
import { Args, Context, Parent } from "@types";
import { exec } from "@helpers";

const messageResolver = {
  Query: {
    messages: async (_o: any, args: Args, context: Context) => {
      if (!context.user) throw new GraphQLError("Sin autenticación");

      const [data, error] = await exec("allTicketMessages @0", [
        args.input.id || 0,
      ]);

      if (error) throw error;

      return data;
    },
  },

  ChatMessage: {
    user: async (parent: Parent) => {
      const [user, error] = await exec(
        "getUserById @0",
        [parent.userId || 0],
        false
      );

      if (error) throw error;

      return user;
    },

    ticket: async (parent: Parent) => {
      const [ticket, error] = await exec(
        "getTicketById @0",
        [parent.ticketId || 0],
        false
      );

      if (error) throw error;

      return ticket;
    },
  },
  Mutation: {},
};

export { messageResolver };
