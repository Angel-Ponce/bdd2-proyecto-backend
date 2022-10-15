import { db } from "@db";

const categoryResolver = {
  Query: {
    categories: async () => {
      const data = await db.query("EXEC dbo.allCategories");

      return data[0];
    },
  },
};

export { categoryResolver };
