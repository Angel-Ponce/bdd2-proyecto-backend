"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.userResolver = void 0;
const graphql_1 = require("graphql");
const _helpers_1 = require("../helpers");
const userResolver = {
    Query: {
        users: async (_o, _args, context) => {
            if (!context.user)
                throw new graphql_1.GraphQLError("Sin autenticación");
            const [data, e1] = await (0, _helpers_1.exec)("allUsers");
            if (e1)
                throw e1;
            return data;
        },
        user: async (_o, args, context) => {
            if (!context.user)
                throw new graphql_1.GraphQLError("Sin autenticación");
            const [data, e1] = await (0, _helpers_1.exec)("getUserById ?", [args.input.id || 0], false);
            if (e1)
                throw e1;
            return data;
        },
    },
    Mutation: {
        createUser: async (_o, args, context) => {
            if (!context.user)
                throw new graphql_1.GraphQLError("Sin autenticación");
            const [data, e1] = await (0, _helpers_1.exec)("createUser ?, ?, ?, ?, ?", [
                args.input.name || "",
                args.input.lastname || "",
                args.input.email || "",
                args.input.password || "",
                args.input.photoURL || null,
            ], false);
            if (e1)
                throw e1;
            const [user, e2] = await (0, _helpers_1.exec)("getUserById ?", [data.id || 0], false);
            if (e2)
                throw e2;
            return user;
        },
        updateUser: async (_o, args, context) => {
            if (!context.user)
                throw new graphql_1.GraphQLError("Sin autenticación");
            const [data, e1] = await (0, _helpers_1.exec)("updateUser ?, ?, ?, ?, ?", [
                args.input.id || 0,
                args.input.name || null,
                args.input.lastname || null,
                args.input.email || null,
                args.input.photoURL || null,
            ], false);
            if (e1)
                throw e1;
            const [user, e2] = await (0, _helpers_1.exec)("getUserById ?", [data.id || 0], false);
            if (e2)
                throw e2;
            return user;
        },
        deleteUser: async (_o, args, context) => {
            if (!context.user)
                throw new graphql_1.GraphQLError("Sin autenticación");
            const [data, e1] = await (0, _helpers_1.exec)("deleteUser ?", [args.input.id || 0], false);
            if (e1)
                throw e1;
            if (data.result)
                return { message: "Usuario eliminado correctamente." };
            return { message: "Ususario no eliminado" };
        },
    },
    User: {
        ticketsResolvedCount: async (parent) => {
            const [data, e1] = await (0, _helpers_1.exec)("ticketsResolvedByUserId ?", [parent.id || 0], false);
            if (e1)
                throw e1;
            return data.count;
        },
        ticketsReportedCount: async (parent) => {
            const [data, e1] = await (0, _helpers_1.exec)("ticketsReportedByUserId ?", [parent.id || 0], false);
            if (e1)
                throw e1;
            return data.count;
        },
    },
};
exports.userResolver = userResolver;
//# sourceMappingURL=users.resolver.js.map