"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.typeDefs = void 0;
const categories_schema_1 = require("@schemas/categories.schema");
const main = /* GraphQL */ `
  type Query {
    _: String
  }

  type Mutation {
    _: String
  }
`;
const typeDefs = [main, categories_schema_1.categorySchema];
exports.typeDefs = typeDefs;
//# sourceMappingURL=index.js.map