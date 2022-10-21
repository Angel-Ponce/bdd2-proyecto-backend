"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.stateSchema = void 0;
const stateSchema = /* GraphQL */ `
  type State {
    id: Int!
    name: String!
  }

  input CreateStateInput {
    name: String!
  }

  input UpdateStateInput {
    id: Int!
    name: String!
  }

  extend type Query {
    states: [State!]!
    state(input: IdInput!): State!
  }

  extend type Mutation {
    createState(input: CreateStateInput!): State!
    updateState(input: UpdateStateInput!): State!
    deleteState(input: IdInput!): Message!
  }
`;
exports.stateSchema = stateSchema;
//# sourceMappingURL=states.schema.js.map