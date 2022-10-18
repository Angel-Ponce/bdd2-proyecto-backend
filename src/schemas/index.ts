import { categorySchema } from "@schemas/categories.schema";
import { authenticationSchema } from "@schemas/authentication.schema";

const main = /* GraphQL */ `
  type Query {
    _: String
  }

  type Mutation {
    _: String
  }
`;

const typeDefs = [main, categorySchema, authenticationSchema];

export { typeDefs };
