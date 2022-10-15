"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.categoryResolver = void 0;
const _db_1 = require("@db");
const categoryResolver = {
    Query: {
        categories: async () => {
            const data = await _db_1.db.query("EXEC dbo.allCategories");
            return data[0];
        },
    },
};
exports.categoryResolver = categoryResolver;
//# sourceMappingURL=categories.resolver.js.map