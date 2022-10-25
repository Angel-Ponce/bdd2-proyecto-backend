"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ratingResolver = void 0;
const graphql_1 = require("graphql");
const _helpers_1 = require("../helpers");
const ratingResolver = {
    Query: {
        ratings: async (_o, args, context) => {
            if (!context.user)
                throw new graphql_1.GraphQLError("Sin autenticación");
            const [data, error] = await (0, _helpers_1.exec)("allTicketRatings @0", [
                args.input.id || 0,
            ]);
            if (error)
                throw error;
            return data;
        },
    },
    Rating: {
        ticket: async (parent) => {
            const [ticket, error] = await (0, _helpers_1.exec)("getTicketById @0", [parent.ticketId || 0], false);
            if (error)
                throw error;
            return ticket;
        },
        user: async (parent) => {
            const [user, error] = await (0, _helpers_1.exec)("getUserById @0", [parent.userId || 0], false);
            if (error)
                throw error;
            return user;
        },
    },
    Mutation: {
        createRating: async (_o, args, context) => {
            if (!context.user)
                throw new graphql_1.GraphQLError("Sin autenticación");
            const [data, e1] = await (0, _helpers_1.exec)("createTicketRating @0, @1, @2", [args.input.rating, args.input.ticketId, args.input.userId], false);
            if (e1)
                throw e1;
            const [rating, e2] = await (0, _helpers_1.exec)("getTicketRatingById @0", [data.id || 0], false);
            if (e2)
                throw e2;
            return rating;
        },
        updateRating: async (_o, args, context) => {
            if (!context.user)
                throw new graphql_1.GraphQLError("Sin autenticación");
            const [data, e1] = await (0, _helpers_1.exec)("updateTicketRating @0, @1", [args.input.id, args.input.rating], false);
            if (e1)
                throw e1;
            const [rating, e2] = await (0, _helpers_1.exec)("getTicketRatingById @0", [data.id || 0], false);
            if (e2)
                throw e2;
            return rating;
        },
        deleteRating: async (_o, args, context) => {
            if (!context.user)
                throw new graphql_1.GraphQLError("Sin autenticación");
            const [data, error] = await (0, _helpers_1.exec)("deleteTicketRating @0", [args.input.id], false);
            if (error)
                throw error;
            if (data.result)
                return {
                    message: "Calificación eliminada correctamente.",
                };
            return {
                message: "Calificación no eliminada.",
            };
        },
    },
};
exports.ratingResolver = ratingResolver;
//# sourceMappingURL=ratings.resolver.js.map