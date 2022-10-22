"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.categoryResolver = void 0;
const graphql_1 = require("graphql");
const _helpers_1 = require("../helpers");
const categoryResolver = {
    Query: {
        categories: async (_o, _args, context) => {
            if (!context.user)
                throw new graphql_1.GraphQLError("Sin autenticación.");
            const [data, error] = await (0, _helpers_1.exec)("allCategories");
            if (error)
                throw error;
            return data;
        },
        category: async (_o, args, context) => {
            if (!context.user)
                throw new graphql_1.GraphQLError("Sin autenticación");
            const [data, error] = await (0, _helpers_1.exec)("getCategoryById @0", [args.input.id || 0], false);
            if (error)
                throw error;
            return data;
        },
    },
    Mutation: {
        createCategory: async (_o, args, context) => {
            if (!context.user)
                throw new graphql_1.GraphQLError("Sin autenticación");
            const [data, error] = await (0, _helpers_1.exec)("createCategory @0", [args.input.name || ""], false);
            if (error)
                throw error;
            const [category, error2] = await (0, _helpers_1.exec)("getCategoryById @0", [data.id || 0], false);
            if (error2)
                throw error2;
            return category;
        },
        updateCategory: async (_o, args, context) => {
            if (!context.user)
                throw new graphql_1.GraphQLError("Sin autenticación");
            const [data, error] = await (0, _helpers_1.exec)("updateCategory @0, @1", [args.input.id || 0, args.input.name || ""], false);
            if (error)
                throw error;
            const [category, error2] = await (0, _helpers_1.exec)("getCategoryById @0", [data.id || 0], false);
            if (error2)
                throw error2;
            return category;
        },
        deleteCategory: async (_o, args, context) => {
            if (!context.user)
                throw new graphql_1.GraphQLError("Sin autenticación");
            const [data, error] = await (0, _helpers_1.exec)("deleteCategory @0", [args.input.id || 0], false);
            if (error)
                throw error;
            if (data.result)
                return { message: "Categoria eliminada correctamente." };
            return { message: "Categoria no eliminada" };
        },
    },
};
exports.categoryResolver = categoryResolver;
//# sourceMappingURL=categories.resolver.js.map