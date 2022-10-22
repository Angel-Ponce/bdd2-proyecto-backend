"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.stateResolver = void 0;
const graphql_1 = require("graphql");
const _helpers_1 = require("../helpers");
const stateResolver = {
    Query: {
        states: async (_o, _args, context) => {
            if (!context.user)
                throw new graphql_1.GraphQLError("Sin autenticación.");
            const [data, error] = await (0, _helpers_1.exec)("allStates");
            if (error)
                throw error;
            return data;
        },
        state: async (_o, args, context) => {
            if (!context.user)
                throw new graphql_1.GraphQLError("Sin autenticación");
            const [data, error] = await (0, _helpers_1.exec)("getStateById @0", [args.input.id || 0], false);
            if (error)
                throw error;
            return data;
        },
    },
    Mutation: {
        createState: async (_o, args, context) => {
            if (!context.user)
                throw new graphql_1.GraphQLError("Sin autenticación");
            const [data, error] = await (0, _helpers_1.exec)("createState @0", [args.input.name || ""], false);
            if (error)
                throw error;
            const [state, error2] = await (0, _helpers_1.exec)("getStateById @0", [data.id || 0], false);
            if (error2)
                throw error2;
            return state;
        },
        updateState: async (_o, args, context) => {
            if (!context.user)
                throw new graphql_1.GraphQLError("Sin autenticación");
            const [data, error] = await (0, _helpers_1.exec)("updateState @0, @1", [args.input.id || 0, args.input.name || ""], false);
            if (error)
                throw error;
            const [state, error2] = await (0, _helpers_1.exec)("getStateById @0", [data.id || 0], false);
            if (error2)
                throw error2;
            return state;
        },
        deleteState: async (_o, args, context) => {
            if (!context.user)
                throw new graphql_1.GraphQLError("Sin autenticación");
            const [data, error] = await (0, _helpers_1.exec)("deleteState @0", [args.input.id || 0], false);
            if (error)
                throw error;
            if (data.result)
                return { message: "Estado eliminado correctamente." };
            return { message: "Estado no eliminado" };
        },
    },
};
exports.stateResolver = stateResolver;
//# sourceMappingURL=states.resolver.js.map