import { db } from "@db";

const authenticationResolver = {
  Mutation: {
    login: async (_o: any, params: any, context: any) => {
      const data = (await db.query(`exec login ?, ?`, {
        replacements: [params.input.email || "", params.input.password || ""],
      })) as any;

      if (data[0]?.[0]?.error) {
        throw new Error(data[0][0].error);
      }

      return {
        token: data[0]?.[0].sessionToken,
      };
    },
    changePassword: async () => {},
  },
};

export { authenticationResolver };
