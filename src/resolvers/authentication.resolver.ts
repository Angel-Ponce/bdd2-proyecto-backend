import { exec } from "@helpers";
import { Args, Context } from "@types";

const authenticationResolver = {
  Mutation: {
    login: async (_o: any, params: Args, _context: Context) => {
      const [data, error] = await exec(
        "login ?, ?",
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
