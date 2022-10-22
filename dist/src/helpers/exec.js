"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.exec = void 0;
const graphql_1 = require("graphql");
const _db_1 = require("../db");
const exec = (query, params = [], multiple = true) => {
    return new Promise(async (resolve) => {
        const data = await _db_1.db.query(`exec ${query}`, params);
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
exports.exec = exec;
//# sourceMappingURL=exec.js.map