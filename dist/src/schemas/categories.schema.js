"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.categorySchema = void 0;
const categorySchema = /* GraphQL */ `
  type Category {
    id: Int!
    name: String!
  }

  extend type Query {
    categories: [Category!]!
  }
`;
exports.categorySchema = categorySchema;
//# sourceMappingURL=categories.schema.js.map