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

export { logSchema };
