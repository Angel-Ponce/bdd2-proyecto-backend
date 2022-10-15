import { categorySchema } from "@schemas/categories.schema";

const main = /* GraphQL */ `
  type Query {
    _: String
  }

  type Mutation {
    _: String
  }
`;

const typeDefs = [main, categorySchema];

export { typeDefs };
