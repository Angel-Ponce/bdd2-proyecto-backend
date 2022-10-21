const userSchema = /* GraphQL */ `
  type User {
    id: Int!
    name: String!
    lastname: String!
    email: String!
    photoURL: String
    sessionToken: String!
    createdAt: DateTime
  }

  extend type Query {
    users: [User!]!
  }
`;

export { userSchema };
