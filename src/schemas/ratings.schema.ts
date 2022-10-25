const ratingSchema = /* GraphQL */ `
  scalar DateTime

  type Rating {
    id: Int!
    rating: Int!
    ticket: Ticket!
    user: User!
    createdAt: DateTime
  }

  extend type Query {
    ratings(input: IdInput!): [Rating!]!
  }
`;

export { ratingSchema };
