const gql = String.raw;

const main = gql`
  #graphql
  type Query {
    _: String
  }

  type Mutation {
    _: String
  }
`;

export { gql, main };
