import { GraphQLError } from "graphql";
import { db } from "@db";

type Data = { [key: string]: any };

const exec = (query: string, params: string[]) => {
  return new Promise<[Data | null, GraphQLError | null]>(async (resolve) => {
    const data: any = await db.query(`exec ${query}`, {
      replacements: params,
    });

    if (data?.[0]?.[0]?.error) {
      resolve([null, new GraphQLError(data[0][0].error)]);
      return;
    }

    resolve([data[0][0], null]);
  });
};

export { exec };
