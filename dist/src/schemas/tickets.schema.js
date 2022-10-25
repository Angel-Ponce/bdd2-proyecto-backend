"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ticketSchema = void 0;
const ticketSchema = /* GraphQL */ `
  scalar DateTime

  type Ticket {
    id: Int!
    name: String!
    userReporter: User!
    userResolver: User!
    category: Category!
    status: State!
    severity: Severity!
    createdAt: DateTime
  }

  input CreateTicketInput {
    name: String!
    userReporterId: Int!
    userResolverId: Int!
    categoryId: Int!
    statusId: Int!
    severityId: Int!
  }

  input UpdateTicketInput {
    id: Int!
    name: String
    userReporterId: Int
    userResolverId: Int
    categoryId: Int
    statusId: Int
    severityId: Int
  }

  extend type Query {
    tickets: [Ticket!]!
    ticket(input: IdInput!): Ticket!
  }

  extend type Mutation {
    createTicket(input: CreateTicketInput!): Ticket!
    updateTicket(input: UpdateTicketInput!): Ticket!
  }
`;
exports.ticketSchema = ticketSchema;
//# sourceMappingURL=tickets.schema.js.map