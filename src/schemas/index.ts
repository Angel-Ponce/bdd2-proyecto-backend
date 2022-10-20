import { categorySchema } from "@schemas/categories.schema";
import { authenticationSchema } from "@schemas/authentication.schema";
import { severitySchema } from "@schemas/severities.schema";

const main = /* GraphQL */ `
  type Message {
    message: String!
  }

  input IdInput {
    id: Int!
  }

  type Query {
    _: String
  }

  type Mutation {
    _: String
  }
`;

const typeDefs = [main, categorySchema, authenticationSchema, severitySchema];

export { typeDefs };
