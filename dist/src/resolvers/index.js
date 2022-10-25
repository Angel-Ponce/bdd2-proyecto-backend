"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.resolvers = void 0;
const categories_resolver_1 = require("./categories.resolver");
const authentication_resolver_1 = require("./authentication.resolver");
const severities_resolver_1 = require("./severities.resolver");
const states_resolver_1 = require("./states.resolver");
const logs_resolver_1 = require("./logs.resolver");
const users_resolver_1 = require("./users.resolver");
const tickets_resolver_1 = require("./tickets.resolver");
const main = {
    Query: {
        _: () => "",
    },
    Mutation: {
        _: () => "",
    },
};
const resolvers = [
    main,
    categories_resolver_1.categoryResolver,
    authentication_resolver_1.authenticationResolver,
    severities_resolver_1.severityResolver,
    states_resolver_1.stateResolver,
    logs_resolver_1.logResolver,
    users_resolver_1.userResolver,
    tickets_resolver_1.ticketResolver,
];
exports.resolvers = resolvers;
//# sourceMappingURL=index.js.map