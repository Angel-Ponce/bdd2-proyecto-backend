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
            const [data, e1] = await (0, _helpers_1.exec)("getUserById @0", [args.input.id || 0], false);
            if (e1)
                throw e1;
            return data;
        },
    },
    Mutation: {
        createUser: async (_o, args, context) => {
            if (!context.user)
                throw new graphql_1.GraphQLError("Sin autenticación");
            const [data, e1] = await (0, _helpers_1.exec)("createUser @0, @1, @2, @3, @4", [
                args.input.name || "",
                args.input.lastname || "",
                args.input.email || "",
                args.input.password || "",
                args.input.photoURL || null,
            ], false);
            if (e1)
                throw e1;
            const [user, e2] = await (0, _helpers_1.exec)("getUserById @0", [data.id || 0], false);
            if (e2)
                throw e2;
            return user;
        },
        updateUser: async (_o, args, context) => {
            if (!context.user)
                throw new graphql_1.GraphQLError("Sin autenticación");
            const [data, e1] = await (0, _helpers_1.exec)("updateUser @0, @1, @2, @3, @4", [
                args.input.id || 0,
                args.input.name || null,
                args.input.lastname || null,
                args.input.email || null,
                args.input.photoURL || null,
            ], false);
            if (e1)
                throw e1;
            const [user, e2] = await (0, _helpers_1.exec)("getUserById @0", [data.id || 0], false);
            if (e2)
                throw e2;
            return user;
        },
        deleteUser: async (_o, args, context) => {
            if (!context.user)
                throw new graphql_1.GraphQLError("Sin autenticación");
            const [data, e1] = await (0, _helpers_1.exec)("deleteUser @0", [args.input.id || 0], false);
            if (e1)
                throw e1;
            if (data.result)
                return { message: "Usuario eliminado correctamente." };
            return { message: "Ususario no eliminado" };
        },
        restoreUser: async (_o, args, context) => {
            if (!context.user)
                throw new graphql_1.GraphQLError("Sin autenticación");
            const [data, e1] = await (0, _helpers_1.exec)("restoreUser @0", [args.input.id || 0], false);
            if (e1)
                throw e1;
            if (data.result)
                return { message: "Usuario restablecido correctamente." };
            return { message: "Ususario no restablecido" };
        },
    },
    User: {
        ticketsResolvedCount: async (parent) => {
            const [data, e1] = await (0, _helpers_1.select)("dbo.ticketsResolvedByUserId (@0) AS count", [parent.id || 0], false);
            if (e1)
                throw e1;
            return data.count;
        },
        ticketsReportedCount: async (parent) => {
            const [data, e1] = await (0, _helpers_1.select)("dbo.ticketsReportedByUserId (@0) AS count", [parent.id || 0], false);
            if (e1)
                throw e1;
            return data.count;
        },
    },
};
exports.userResolver = userResolver;
//# sourceMappingURL=users.resolver.js.map