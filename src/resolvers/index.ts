import { categoryResolver } from "@resolvers/categories.resolver";
import { authenticationResolver } from "@resolvers/authentication.resolver";

const main = {
  Query: {
    _: () => "",
  },
  Mutation: {
    _: () => "",
  },
};

const resolvers = [main, categoryResolver, authenticationResolver];

export { resolvers };
