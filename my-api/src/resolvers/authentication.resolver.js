"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.authenticationResolver = void 0;
const _helpers_1 = require("../helpers");
const authenticationResolver = {
    Query: {
        me: (_o, _args, context) => {
            return context.user;
        },
    },
    Mutation: {
        login: async (_o, params, _context) => {
            const [data, error] = await (0, _helpers_1.exec)("login ?, ?", [params.input.email || "", params.input.password || ""], false);
            if (error)
                throw error;
            return {
                token: data.sessionToken,
            };
        },
        changePassword: async () => ({ message: "Unavailable" }),
    },
};
exports.authenticationResolver = authenticationResolver;
//# sourceMappingURL=authentication.resolver.js.map