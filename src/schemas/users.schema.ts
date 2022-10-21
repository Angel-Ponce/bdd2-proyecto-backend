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

  extend type Query {
    users: [User!]!
    user(input: IdInput!): User!
  }

  extend type Mutation {
    createUser(input: CreateUserInput!): User!
  }
`;

export { userSchema };
