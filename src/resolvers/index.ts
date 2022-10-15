import { categoryResolver } from "@resolvers/categories.resolver";

const main = {
  Query: {
    _: () => "",
  },
  Mutation: {
    _: () => "",
  },
};

const resolvers = [main, categoryResolver];

export { resolvers };
