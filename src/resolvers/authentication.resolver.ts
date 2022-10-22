import { exec } from "@helpers";
import { Args, Context } from "@types";

const authenticationResolver = {
  Query: {
    me: (_o: any, _args: Args, context: Context) => {
      return context.user;
    },
  },

  Mutation: {
    login: async (_o: any, params: Args, _context: Context) => {
      const [data, error] = await exec(
        "login @0, @1",
        [params.input.email || "", params.input.password || ""],
        false
      );

      if (error) throw error;

      return {
        token: data.sessionToken,
      };
    },

    changePassword: async () => ({ message: "Unavailable" }),
  },
};

export { authenticationResolver };
