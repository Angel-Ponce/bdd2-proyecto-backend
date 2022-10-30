const reportSchema = /* GraphQL */ `
  type TicketsByCategoryReport {
    category: String!
    ticketsCount: Int!
  }

  type TicketsBySeverityReport {
    severity: String!
    ticketsCount: Int!
  }

  type TicketsByStatusReport {
    status: String!
    ticketsCount: Int!
  }

  type UsersHistoryReport {
    user: String!
    ticketsResolved: Int!
    ticketsReported: Int!
  }

  type UserWithMoreTicketsResolved {
    user: String!
    ticketsResolved: Int!
  }

  type UserWithMoreTicketsReported {
    user: String!
    ticketsReported: Int!
  }

  type UserWithLessTicketsResolved {
    user: String!
    ticketsResolved: Int!
  }

  type UserWithLessTicketsReported {
    user: String!
    ticketsReported: Int!
  }

  type KPIS {
    userWithMoreTicketsReported: UserWithMoreTicketsReported
    userWithMoreTicketsResolved: UserWithMoreTicketsResolved
    userWithLessTicketsReported: UserWithLessTicketsReported
    userWithLessTicketsResolved: UserWithLessTicketsResolved
  }

  type Reports {
    ticketsByCategory: [TicketsByCategoryReport!]!
    ticketsBySeverity: [TicketsBySeverityReport!]!
    ticketsByStatus: [TicketsByStatusReport!]!
    usersHistory: [UsersHistoryReport!]!
    kpis: KPIS!
  }

  extend type Query {
    reports: Reports!
  }
`;

export { reportSchema };
