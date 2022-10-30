import { GraphQLError } from "graphql";
import { Args, Context, Parent } from "@types";
import { exec, select } from "@helpers";

const userResolver = {
  Query: {
    users: async (_o: any, _args: Args, context: Context) => {
      if (!context.user) throw new GraphQLError("Sin autenticación");

      const [data, e1] = await exec("allUsers");

      if (e1) throw e1;

      return data;
    },

    user: async (_o: any, args: Args, context: Context) => {
      if (!context.user) throw new GraphQLError("Sin autenticación");

      const [data, e1] = await exec(
        "getUserById @0",
        [args.input.id || 0],
        false
      );

      if (e1) throw e1;

      return data;
    },
  },

  Mutation: {
    createUser: async (_o: any, args: Args, context: Context) => {
      if (!context.user) throw new GraphQLError("Sin autenticación");

      const [data, e1] = await exec(
        "createUser @0, @1, @2, @3, @4",
        [
          args.input.name || "",
          args.input.lastname || "",
          args.input.email || "",
          args.input.password || "",
          args.input.photoURL || null,
        ],
        false
      );

      if (e1) throw e1;

      const [user, e2] = await exec("getUserById @0", [data.id || 0], false);

      if (e2) throw e2;

      return user;
    },

    updateUser: async (_o: any, args: Args, context: Context) => {
      if (!context.user) throw new GraphQLError("Sin autenticación");

      const [data, e1] = await exec(
        "updateUser @0, @1, @2, @3, @4",
        [
          args.input.id || 0,
          args.input.name || null,
          args.input.lastname || null,
          args.input.email || null,
          args.input.photoURL || null,
        ],
        false
      );

      if (e1) throw e1;

      const [user, e2] = await exec("getUserById @0", [data.id || 0], false);

      if (e2) throw e2;

      return user;
    },

    deleteUser: async (_o: any, args: Args, context: Context) => {
      if (!context.user) throw new GraphQLError("Sin autenticación");

      const [data, e1] = await exec(
        "deleteUser @0",
        [args.input.id || 0],
        false
      );

      if (e1) throw e1;

      if (data.result) return { message: "Usuario eliminado correctamente." };

      return { message: "Ususario no eliminado" };
    },

    restoreUser: async (_o: any, args: Args, context: Context) => {
      if (!context.user) throw new GraphQLError("Sin autenticación");

      const [data, e1] = await exec(
        "restoreUser @0",
        [args.input.id || 0],
        false
      );

      if (e1) throw e1;

      if (data.result)
        return { message: "Usuario restablecido correctamente." };

      return { message: "Ususario no restablecido" };
    },
  },

  User: {
    ticketsResolvedCount: async (parent: Parent) => {
      const [data, e1] = await select(
        "dbo.ticketsResolvedByUserId (@0) AS count",
        [parent.id || 0],
        false
      );

      if (e1) throw e1;

      return data.count;
    },

    ticketsReportedCount: async (parent: Parent) => {
      const [data, e1] = await select(
        "dbo.ticketsReportedByUserId (@0) AS count",
        [parent.id || 0],
        false
      );

      if (e1) throw e1;

      return data.count;
    },
  },
};

export { userResolver };
