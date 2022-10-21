"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.userSchema = void 0;
const userSchema = /* GraphQL */ `
  type User {
    id: Int!
    name: String!
    lastname: String!
    email: String!
    photoURL: String
    createdAt: DateTime
    ticketsResolvedCount: Int!
    ticketsReportedCount: Int!
  }

  input CreateUserInput {
    name: String!
    lastname: String!
    email: String!
    password: String!
    photoURL: String
  }

  input UpdateUserInput {
    id: Int!
    name: String
    lastname: String
    email: String
    photoURL: String
  }

  extend type Query {
    users: [User!]!
    user(input: IdInput!): User!
  }

  extend type Mutation {
    createUser(input: CreateUserInput!): User!
    updateUser(input: UpdateUserInput!): User!
    deleteUser(input: IdInput!): Message!
  }
`;
exports.userSchema = userSchema;
//# sourceMappingURL=users.schema.js.map