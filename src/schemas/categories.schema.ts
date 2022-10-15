const categorySchema = /* GraphQL */ `
  type Category {
    id: Int!
    name: String!
  }

  extend type Query {
    categories: [Category!]!
  }
`;

export { categorySchema };
