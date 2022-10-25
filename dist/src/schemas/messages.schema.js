"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.messageSchema = void 0;
const messageSchema = /* GraphQL */ `
  scalar DateTime

  type ChatMessage {
    id: Int!
    message: String!
    user: User!
    ticket: Ticket!
    createdAt: DateTime
  }

  input CreateChatMessageInput {
    message: String!
    userId: Int!
    ticketId: Int!
  }

  extend type Query {
    messages(input: IdInput!): [ChatMessage!]!
  }

  extend type Mutation {
    createMessage(input: CreateChatMessageInput!): ChatMessage!
  }
`;
exports.messageSchema = messageSchema;
//# sourceMappingURL=messages.schema.js.map