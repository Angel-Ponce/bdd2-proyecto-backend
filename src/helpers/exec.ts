import { db } from "@db";

type Data = { [key: string]: any };

const exec = (query: string, params: string[]) => {
  return new Promise<[Data | null, Error | null]>(async (resolve) => {
    const data: any = await db.query(query, {
      replacements: params,
    });

    if (data?.[0]?.[0]?.error) {
      resolve([null, new Error(data[0][0].error)]);
      return;
    }

    resolve([data[0][0], null]);
  });
};

export { exec };
