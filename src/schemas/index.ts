import { categorySchema } from "@schemas/categories.schema";
import { authenticationSchema } from "@schemas/authentication.schema";
import { severitySchema } from "@schemas/severities.schema";
import { stateSchema } from "@schemas/states.schema";
import { logSchema } from "@schemas/logs.schema";
import { userSchema } from "@schemas/users.schema";
import { ticketSchema } from "@schemas/tickets.schema";
import { ratingSchema } from "@schemas/ratings.schema";
import { messageSchema } from "@schemas/messages.schema";
import { reportSchema } from "@schemas/reports.schema";

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
  ratingSchema,
  messageSchema,
  reportSchema,
];

export { typeDefs };
