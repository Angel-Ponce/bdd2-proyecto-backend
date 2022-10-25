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

  input UpdateRatingInput {
    id: Int!
    rating: Int
  }

  extend type Query {
    ratings(input: IdInput!): [Rating!]!
  }

  extend type Mutation {
    createRating(input: CreateRatingInput): Rating!
    updateRating(input: UpdateRatingInput): Rating!
  }
`;

export { ratingSchema };
