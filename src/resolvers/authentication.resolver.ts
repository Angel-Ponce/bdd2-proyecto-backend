import { db } from "@db";

const authenticationResolver = {
  Mutation: {
    login: async (_o: any, b: any) => {
      const data = (await db.query(`exec login ?, ?`, {
        replacements: [b.input.email || "", b.input.password || ""],
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
