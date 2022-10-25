const ratingSchema = /* GraphQL */ `
  scalar DateTime

  type Rating {
    id: Int!
    rating: Int!
    ticket: Ticket!
    user: User!
    createdAt: DateTime
  }

  input CreateRatingInput {
    rating: Int!
    ticketId: Int!
    userId: Int!
  }

  extend type Query {
    ratings(input: IdInput!): [Rating!]!
  }

  extend type Mutation {
    createRating(input: CreateRatingInput): Rating!
  }
`;

export { ratingSchema };
