import { GraphQLError } from "graphql";
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

    changePassword: async (_o: any, args: Args, context: Context) => {
      if (!context.user) throw new GraphQLError("Sin autenticación");

      const [data, error] = await exec(
        "changePassword @0, @1, @2",
        [args.input.id, args.input.oldPassword, args.input.newPassword],
        false
      );

      if (error) throw error;

      if (data.result)
        return {
          message: "La contraseña se ha cambiado correctamente.",
        };

      return {
        message: "La contraseña no se ha cambiado.",
      };
    },
  },
};

export { authenticationResolver };
