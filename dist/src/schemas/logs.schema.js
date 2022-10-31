"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.logSchema = void 0;
const logSchema = /* GraphQL */ `
  scalar DateTime

  type Log {
    title: String!
    description: String!
    date: DateTime
  }

  extend type Query {
    logs: [Log!]!
  }
`;
exports.logSchema = logSchema;
//# sourceMappingURL=logs.schema.js.map