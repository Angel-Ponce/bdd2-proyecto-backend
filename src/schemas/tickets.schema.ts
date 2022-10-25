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

  extend type Query {
    tickets: [Ticket!]!
    ticket(input: IdInput!): Ticket!
  }
`;

export { ticketSchema };
