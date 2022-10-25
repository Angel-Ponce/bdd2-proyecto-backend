import { categorySchema } from "@schemas/categories.schema";
import { authenticationSchema } from "@schemas/authentication.schema";
import { severitySchema } from "@schemas/severities.schema";
import { stateSchema } from "@schemas/states.schema";
import { logSchema } from "@schemas/logs.schema";
import { userSchema } from "@schemas/users.schema";
import { ticketSchema } from "@schemas/tickets.schema";

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

const typeDefs = [
  main,
  categorySchema,
  authenticationSchema,
  severitySchema,
  stateSchema,
  logSchema,
  userSchema,
  ticketSchema,
];

export { typeDefs };
