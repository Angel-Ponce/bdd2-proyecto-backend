const messageSchema = /* GraphQL */ `
  scalar DateTime

  type ChatMessage {
    id: Int!
    message: String!
    user: User!
    ticket: Ticket!
    createdAt: DateTime
  }

  extend type Query {
    messages(input: IdInput!): [ChatMessage!]!
  }
`;

export { messageSchema };
