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
            const [deletedTicketsLogs, e2] = await (0, _helpers_1.exec)("allTicketsDeleted");
            if (e2)
                throw e2;
            return {
                sessionLogs,
                deletedTicketsLogs,
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
    DeletedTicketsLog: {
        ticketUserReporter: async (parent) => {
            const [data, error] = await (0, _helpers_1.exec)("getUserById @0", [parent.ticketUserReporterId || 0], false);
            if (error)
                throw error;
            return data;
        },
        ticketUserResolver: async (parent) => {
            const [data, error] = await (0, _helpers_1.exec)("getUserById @0", [parent.ticketUserResolverId || 0], false);
            if (error)
                throw error;
            return data;
        },
        ticketCategory: async (parent) => {
            const [data, error] = await (0, _helpers_1.exec)("getCategoryById @0", [parent.ticketCategoryId || 0], false);
            if (error)
                throw error;
            return data;
        },
        ticketStatus: async (parent) => {
            const [data, error] = await (0, _helpers_1.exec)("getStateById @0", [parent.ticketStatusId || 0], false);
            if (error)
                throw error;
            return data;
        },
        ticketSeverity: async (parent) => {
            const [data, error] = await (0, _helpers_1.exec)("getSeverityById @0", [parent.ticketSeverityId || 0], false);
            if (error)
                throw error;
            return data;
        },
        user: async (parent) => {
            const [data, error] = await (0, _helpers_1.exec)("getUserById @0", [parent.userId || 0], false);
            if (error)
                throw error;
            return data;
        },
    },
};
exports.logResolver = logResolver;
//# sourceMappingURL=logs.resolver.js.map