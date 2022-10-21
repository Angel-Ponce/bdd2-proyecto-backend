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

  extend type Query {
    users: [User!]!
    user(input: IdInput!): User!
  }
`;

export { userSchema };
