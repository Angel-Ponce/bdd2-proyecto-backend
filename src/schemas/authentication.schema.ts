const authenticationSchema = /* GraphQL */ `
  scalar UUID

  input InputLogin {
    email: String!
    password: String!
  }

  input ChangePasswordInput {
    id: UUID!
    oldPassword: String!
    newPassword: String!
  }

  type Token {
    token: UUID!
  }

  extend type Mutation {
    login(input: InputLogin!): Token!

    changePassword(input: ChangePasswordInput!): Message!
  }
`;

export { authenticationSchema };
