"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.select = void 0;
const _db_1 = require("../db");
const graphql_1 = require("graphql");
const select = async (query, params, multiple = true) => {
    return new Promise(async (resolve) => {
        const data = await _db_1.db.query(`SELECT ${query}`, params);
        if (data?.[0]?.error) {
            resolve([null, new graphql_1.GraphQLError(data[0].error)]);
            return;
        }
        if (multiple) {
            resolve([data, null]);
            return;
        }
        resolve([data[0], null]);
    });
};
exports.select = select;
//# sourceMappingURL=select.js.map