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
  }
`;

export { categorySchema };
