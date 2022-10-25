"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ratingSchema = void 0;
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
    deleteRating(input: IdInput!): Message!
  }
`;
exports.ratingSchema = ratingSchema;
//# sourceMappingURL=ratings.schema.js.map