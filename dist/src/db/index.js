"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.db = void 0;
const typeorm_1 = require("typeorm");
const db = new typeorm_1.DataSource({
    type: "mssql",
    host: process.env.DB_HOST || "",
    port: Number(process.env.DB_PORT || 1433),
    username: process.env.DB_USER || "",
    password: process.env.DB_PASSWORD || "",
    database: process.env.DB_DATABASE || "",
    // logging: true,
});
exports.db = db;
//# sourceMappingURL=index.js.map