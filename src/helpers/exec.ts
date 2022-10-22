import { GraphQLError } from "graphql";
import { db } from "@db";

const exec = (query: string, params: string[] = [], multiple = true) => {
  return new Promise<[any | null, GraphQLError | null]>(async (resolve) => {
    const data = await db.query(`exec ${query}`, params);

    if (data?.[0]?.error) {
      resolve([null, new GraphQLError(data[0].error)]);
      return;
    }

    if (multiple) {
      resolve([data, null]);
      return;
    }

    resolve([data[0], null]);
  });
};

export { exec };
