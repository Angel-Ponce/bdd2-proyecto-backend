const categorySchema = /* GraphQL */ `
  type Category {
    id: Int!
    name: String!
  }

  input CreateCategoryInput {
    name: String!
  }

  extend type Query {
    categories: [Category!]!
    category(input: IdInput!): Category!
  }

  extend type Mutation {
    createCategory(input: CreateCategoryInput!): Category!
  }
`;

export { categorySchema };
