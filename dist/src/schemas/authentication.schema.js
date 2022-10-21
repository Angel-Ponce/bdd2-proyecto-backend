"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.authenticationSchema = void 0;
const authenticationSchema = /* GraphQL */ `
  scalar UUID

  input InputLogin {
    email: String!
    password: String!
  }

  input ChangePasswordInput {
    id: UUID!
    oldPassword: String!
    newPassword: String!
  }

  type Token {
    token: UUID!
  }

  extend type Query {
    me: User
  }

  extend type Mutation {
    login(input: InputLogin!): Token!

    changePassword(input: ChangePasswordInput!): Message!
  }
`;
exports.authenticationSchema = authenticationSchema;
//# sourceMappingURL=authentication.schema.js.map