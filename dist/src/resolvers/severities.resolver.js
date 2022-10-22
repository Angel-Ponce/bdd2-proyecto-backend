"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.severityResolver = void 0;
const graphql_1 = require("graphql");
const _helpers_1 = require("../helpers");
const severityResolver = {
    Query: {
        severities: async (_o, _args, context) => {
            if (!context.user)
                throw new graphql_1.GraphQLError("Sin autenticación.");
            const [data, error] = await (0, _helpers_1.exec)("allSeverities");
            if (error)
                throw error;
            return data;
        },
        severity: async (_o, args, context) => {
            if (!context.user)
                throw new graphql_1.GraphQLError("Sin autenticación");
            const [data, error] = await (0, _helpers_1.exec)("getSeverityById @0", [args.input.id || 0], false);
            if (error)
                throw error;
            return data;
        },
    },
    Mutation: {
        createSeverity: async (_o, args, context) => {
            if (!context.user)
                throw new graphql_1.GraphQLError("Sin autenticación");
            const [data, error] = await (0, _helpers_1.exec)("createSeverity @0", [args.input.name || ""], false);
            if (error)
                throw error;
            const [severity, error2] = await (0, _helpers_1.exec)("getSeverityById @0", [data.id || 0], false);
            if (error2)
                throw error2;
            return severity;
        },
        updateSeverity: async (_o, args, context) => {
            if (!context.user)
                throw new graphql_1.GraphQLError("Sin autenticación");
            const [data, error] = await (0, _helpers_1.exec)("updateSeverity @0, @1", [args.input.id || 0, args.input.name || ""], false);
            if (error)
                throw error;
            const [severity, error2] = await (0, _helpers_1.exec)("getSeverityById @0", [data.id || 0], false);
            if (error2)
                throw error2;
            return severity;
        },
        deleteSeverity: async (_o, args, context) => {
            if (!context.user)
                throw new graphql_1.GraphQLError("Sin autenticación");
            const [data, error] = await (0, _helpers_1.exec)("deleteSeverity @0", [args.input.id || 0], false);
            if (error)
                throw error;
            if (data.result)
                return { message: "Severidad eliminada correctamente." };
            return { message: "Severidad no eliminada" };
        },
    },
};
exports.severityResolver = severityResolver;
//# sourceMappingURL=severities.resolver.js.map