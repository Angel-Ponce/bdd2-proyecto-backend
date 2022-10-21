const logSchema = /* GraphQL */ `
  scalar DateTime

  type SessionLog {
    id: Int!
    sessionOk: Boolean!
    emailAttemp: String
    userId: Int
    createdAt: DateTime
  }

  type Logs {
    sessionLogs: [SessionLog!]!
  }

  extend type Query {
    logs: Logs!
  }
`;

export { logSchema };
