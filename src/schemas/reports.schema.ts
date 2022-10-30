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

  type Reports {
    ticketsByCategory: [TicketsByCategoryReport!]!
    ticketsBySeverity: [TicketsBySeverityReport!]!
    ticketsByStatus: [TicketsByStatusReport!]!
    usersHistory: [UsersHistoryReport!]!
  }

  extend type Query {
    reports: Reports!
  }
`;

export { reportSchema };
