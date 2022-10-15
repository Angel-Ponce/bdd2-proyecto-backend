"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.main = exports.gql = void 0;
const gql = String.raw;
exports.gql = gql;
const main = gql `
  #graphql
  type Query {
    _: String
  }

  type Mutation {
    _: String
  }
`;
exports.main = main;
//# sourceMappingURL=index.js.map