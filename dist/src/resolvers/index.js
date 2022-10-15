"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.resolvers = void 0;
const categories_resolver_1 = require("@resolvers/categories.resolver");
const main = {
    Query: {
        _: () => "",
    },
    Mutation: {
        _: () => "",
    },
};
const resolvers = [main, categories_resolver_1.categoryResolver];
exports.resolvers = resolvers;
//# sourceMappingURL=index.js.map