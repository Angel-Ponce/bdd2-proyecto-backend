"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.categorySchema = void 0;
const categorySchema = /* GraphQL */ `
  type Category {
    id: Int!
    name: String!
  }

  input CreateCategoryInput {
    name: String!
  }

  input UpdateCategoryInput {
    id: Int!
    name: String!
  }

  extend type Query {
    categories: [Category!]!
    category(input: IdInput!): Category!
  }

  extend type Mutation {
    createCategory(input: CreateCategoryInput!): Category!
    updateCategory(input: UpdateCategoryInput!): Category!
    deleteCategory(input: IdInput!): Message!
  }
`;
exports.categorySchema = categorySchema;
//# sourceMappingURL=categories.schema.js.map