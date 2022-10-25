"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.typeDefs = void 0;
const categories_schema_1 = require("./categories.schema");
const authentication_schema_1 = require("./authentication.schema");
const severities_schema_1 = require("./severities.schema");
const states_schema_1 = require("./states.schema");
const logs_schema_1 = require("./logs.schema");
const users_schema_1 = require("./users.schema");
const tickets_schema_1 = require("./tickets.schema");
const ratings_schema_1 = require("./ratings.schema");
const messages_schema_1 = require("./messages.schema");
const main = /* GraphQL */ `
  type Message {
    message: String!
  }

  input IdInput {
    id: Int!
  }

  type Query {
    _: String
  }

  type Mutation {
    _: String
  }
`;
const typeDefs = [
    main,
    categories_schema_1.categorySchema,
    authentication_schema_1.authenticationSchema,
    severities_schema_1.severitySchema,
    states_schema_1.stateSchema,
    logs_schema_1.logSchema,
    users_schema_1.userSchema,
    tickets_schema_1.ticketSchema,
    ratings_schema_1.ratingSchema,
    messages_schema_1.messageSchema,
];
exports.typeDefs = typeDefs;
//# sourceMappingURL=index.js.map