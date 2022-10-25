import { GraphQLError } from "graphql";
import { Args, Context, Parent } from "@types";
import { exec } from "@helpers";

const ratingResolver = {
  Query: {
    ratings: async (_o: any, args: Args, context: Context) => {
      if (!context.user) throw new GraphQLError("Sin autenticación");

      const [data, error] = await exec("allTicketRatings @0", [
        args.input.id || 0,
      ]);

      if (error) throw error;

      return data;
    },
  },

  Rating: {
    ticket: async (parent: Parent) => {
      const [ticket, error] = await exec(
        "getTicketById @0",
        [parent.ticketId || 0],
        false
      );

      if (error) throw error;

      return ticket;
    },

    user: async (parent: Parent) => {
      const [user, error] = await exec(
        "getUserById @0",
        [parent.userId || 0],
        false
      );

      if (error) throw error;

      return user;
    },
  },

  Mutation: {
    createRating: async (_o: any, args: Args, context: Context) => {
      if (!context.user) throw new GraphQLError("Sin autenticación");

      const [data, e1] = await exec(
        "createTicketRating @0, @1, @2",
        [args.input.rating, args.input.ticketId, args.input.userId],
        false
      );

      if (e1) throw e1;

      const [rating, e2] = await exec(
        "getTicketRatingById @0",
        [data.id || 0],
        false
      );

      if (e2) throw e2;

      return rating;
    },
  },
};

export { ratingResolver };
