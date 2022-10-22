"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.logResolver = void 0;
const graphql_1 = require("graphql");
const _helpers_1 = require("../helpers");
const logResolver = {
    Query: {
        logs: async (_o, _args, context) => {
            if (!context.user)
                throw new graphql_1.GraphQLError("Sin autenticación.");
            const [sessionLogs, e1] = await (0, _helpers_1.exec)("allSessionLogs");
            if (e1)
                throw e1;
            return {
                sessionLogs,
            };
        },
    },
    SessionLog: {
        user: async (parent) => {
            if (!parent.userId)
                return null;
            const [user, e1] = await (0, _helpers_1.exec)("getUserById @0", [parent.userId || 0], false);
            if (e1)
                throw e1;
            return user;
        },
    },
};
exports.logResolver = logResolver;
//# sourceMappingURL=logs.resolver.js.map