"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.messageResolver = void 0;
const graphql_1 = require("graphql");
const _helpers_1 = require("../helpers");
const messageResolver = {
    Query: {
        messages: async (_o, args, context) => {
            if (!context.user)
                throw new graphql_1.GraphQLError("Sin autenticación");
            const [data, error] = await (0, _helpers_1.exec)("allTicketMessages @0", [
                args.input.id || 0,
            ]);
            if (error)
                throw error;
            return data;
        },
    },
    ChatMessage: {
        user: async (parent) => {
            const [user, error] = await (0, _helpers_1.exec)("getUserById @0", [parent.userId || 0], false);
            if (error)
                throw error;
            return user;
        },
        ticket: async (parent) => {
            const [ticket, error] = await (0, _helpers_1.exec)("getTicketById @0", [parent.ticketId || 0], false);
            if (error)
                throw error;
            return ticket;
        },
    },
    Mutation: {
        createMessage: async (_o, args, context) => {
            if (!context.user)
                throw new graphql_1.GraphQLError("Sin autenticación");
            const [data, e1] = await (0, _helpers_1.exec)("createMessage @0, @1, @2", [
                args.input.message || "",
                args.input.userId || 0,
                args.input.ticketId || 0,
            ], false);
            if (e1)
                throw e1;
            const [message, e2] = await (0, _helpers_1.exec)("getMessageById @0", [data.id || 0], false);
            if (e2)
                throw e2;
            return message;
        },
    },
};
exports.messageResolver = messageResolver;
//# sourceMappingURL=messages.resolver.js.map