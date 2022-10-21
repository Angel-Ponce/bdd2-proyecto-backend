const logSchema = /* GraphQL */ `
  scalar DateTime

  type User {
    id: Int!
    name: String!
    lastname: String!
    email: String!
    photoURL: String
    sessionToken: String!
    createdAt: DateTime
  }

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

export { logSchema };
