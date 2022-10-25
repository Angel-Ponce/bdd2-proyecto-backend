"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ticketResolver = void 0;
const graphql_1 = require("graphql");
const _helpers_1 = require("../helpers");
const ticketResolver = {
    Query: {
        tickets: async (_o, _args, context) => {
            if (!context.user)
                throw new graphql_1.GraphQLError("Sin autenticación");
            const [data, error] = await (0, _helpers_1.exec)("allTickets");
            if (error)
                throw error;
            return data;
        },
        ticket: async (_o, args, context) => {
            if (!context.user)
                throw new graphql_1.GraphQLError("Sin autenticación");
            const [data, error] = await (0, _helpers_1.exec)("getTicketById @0", [args.input.id], false);
            if (error)
                throw error;
            return data;
        },
    },
    Ticket: {
        userReporter: async (parent) => {
            const [data, error] = await (0, _helpers_1.exec)("getUserById @0", [parent.userReporterId || 0], false);
            if (error)
                throw error;
            return data;
        },
        userResolver: async (parent) => {
            const [data, error] = await (0, _helpers_1.exec)("getUserById @0", [parent.userResolverId || 0], false);
            if (error)
                throw error;
            return data;
        },
        category: async (parent) => {
            const [data, error] = await (0, _helpers_1.exec)("getCategoryById @0", [parent.categoryId || 0], false);
            if (error)
                throw error;
            return data;
        },
        status: async (parent) => {
            const [data, error] = await (0, _helpers_1.exec)("getStateById @0", [parent.statusId || 0], false);
            if (error)
                throw error;
            return data;
        },
        severity: async (parent) => {
            const [data, error] = await (0, _helpers_1.exec)("getSeverityById @0", [parent.severityId || 0], false);
            if (error)
                throw error;
            return data;
        },
    },
    Mutation: {
        createTicket: async (_o, args, context) => {
            if (!context.user)
                throw new graphql_1.GraphQLError("Sin autenticación");
            const [data, e1] = await (0, _helpers_1.exec)("createTicket @0, @1, @2, @3, @4, @5", [
                args.input.name || "",
                args.input.userReporterId || 0,
                args.input.userResolverId || 0,
                args.input.categoryId || 0,
                args.input.statusId || 0,
                args.input.severityId || 0,
            ], false);
            if (e1)
                throw e1;
            const [ticket, e2] = await (0, _helpers_1.exec)("getTicketById @0", [data.id || 0], false);
            if (e2)
                throw e2;
            return ticket;
        },
        updateTicket: async (_o, args, context) => {
            if (!context.user)
                throw new graphql_1.GraphQLError("Sin autenticación");
            const [data, e1] = await (0, _helpers_1.exec)("updateTicket @0, @1, @2, @3, @4, @5", [
                args.input.id || 0,
                args.input.name || null,
                args.input.userReporterId || null,
                args.input.userResolverId || null,
                args.input.categoryId || null,
                args.input.severityId || null,
            ], false);
            if (e1)
                throw e1;
            const [ticket, e2] = await (0, _helpers_1.exec)("getTicketById @0", [data.id || 0], false);
            if (e2)
                throw e2;
            return ticket;
        },
    },
};
exports.ticketResolver = ticketResolver;
//# sourceMappingURL=tickets.resolver.js.map