"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.logSchema = void 0;
const logSchema = /* GraphQL */ `
  scalar DateTime

  type SessionLog {
    id: Int!
    sessionOk: Boolean!
    emailAttemp: String
    user: User
    createdAt: DateTime
  }

  type Logs {
    sessionLogs: [SessionLog!]!
  }

  extend type Query {
    logs: Logs!
  }
`;
exports.logSchema = logSchema;
//# sourceMappingURL=logs.schema.js.map