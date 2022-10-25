"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.authenticationResolver = void 0;
const graphql_1 = require("graphql");
const _helpers_1 = require("../helpers");
const authenticationResolver = {
    Query: {
        me: (_o, _args, context) => {
            return context.user;
        },
    },
    Mutation: {
        login: async (_o, params, _context) => {
            const [data, error] = await (0, _helpers_1.exec)("login @0, @1", [params.input.email || "", params.input.password || ""], false);
            if (error)
                throw error;
            return {
                token: data.sessionToken,
            };
        },
        changePassword: async (_o, args, context) => {
            if (!context.user)
                throw new graphql_1.GraphQLError("Sin autenticación");
            const [data, error] = await (0, _helpers_1.exec)("changePassword @0, @1, @2", [args.input.id, args.input.oldPassword, args.input.newPassword], false);
            if (error)
                throw error;
            if (data.result)
                return {
                    message: "La contraseña se ha cambiado correctamente.",
                };
            return {
                message: "La contraseña no se ha cambiado.",
            };
        },
    },
};
exports.authenticationResolver = authenticationResolver;
//# sourceMappingURL=authentication.resolver.js.map