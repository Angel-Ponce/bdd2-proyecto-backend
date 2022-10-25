const logSchema = /* GraphQL */ `
  scalar DateTime

  type SessionLog {
    id: Int!
    sessionOk: Boolean!
    emailAttemp: String
    user: User
    createdAt: DateTime
  }

  type DeletedTicketsLog {
    id: Int!
    ticketId: Int!
    ticketName: String!
    ticketUserReporter: User!
    ticketUserResolver: User!
    ticketCategory: Category!
    ticketStatus: State!
    ticketSeverity: Severity!
    ticketCreatedAt: DateTime
    user: User!
    deletedAt: DateTime
  }

  type Logs {
    sessionLogs: [SessionLog!]!
    deletedTicketsLogs: [DeletedTicketsLog!]!
  }

  extend type Query {
    logs: Logs!
  }
`;

export { logSchema };
