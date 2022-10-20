const severitySchema = /* GraphQL */ `
  type Severity {
    id: Int!
    name: String!
  }

  input CreateSeverityInput {
    name: String!
  }

  input UpdateSeverityInput {
    id: Int!
    name: String!
  }

  extend type Query {
    severities: [Severity!]!
    severity(input: IdInput!): Severity!
  }

  extend type Mutation {
    createSeverity(input: CreateSeverityInput!): Severity!
    updateSeverity(input: UpdateSeverityInput!): Severity!
    deleteSeverity(input: IdInput!): Message!
  }
`;

export { severitySchema };
