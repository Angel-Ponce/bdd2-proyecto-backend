"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.reportResolver = void 0;
const graphql_1 = require("graphql");
const _helpers_1 = require("../helpers");
const reportResolver = {
    Query: {
        reports: async (_o, _args, context) => {
            if (!context.user)
                throw new graphql_1.GraphQLError("Sin autenticación.");
            const [ticketsByCategory, e1] = await (0, _helpers_1.exec)("ticketsByCategory", []);
            if (e1)
                throw e1;
            const [ticketsBySeverity, e2] = await (0, _helpers_1.exec)("ticketsBySeverity", []);
            if (e2)
                throw e2;
            const [ticketsByStatus, e3] = await (0, _helpers_1.exec)("ticketsByStatus", []);
            if (e3)
                throw e3;
            const [usersHistory, e4] = await (0, _helpers_1.exec)("usersHistory", []);
            if (e4)
                throw e4;
            const [userWithMoreTicketsResolved, e5] = await (0, _helpers_1.exec)("userWithMoreTicketsResolved", [], false);
            if (e5)
                throw e5;
            const [userWithMoreTicketsReported, e6] = await (0, _helpers_1.exec)("userWithMoreTicketsReported", [], false);
            if (e6)
                throw e6;
            const [userWithLessTicketsResolved, e7] = await (0, _helpers_1.exec)("userWithLessTicketsResolved", [], false);
            if (e7)
                throw e7;
            const [userWithLessTicketsReported, e8] = await (0, _helpers_1.exec)("userWithLessTicketsReported", [], false);
            if (e8)
                throw e8;
            return {
                ticketsByCategory,
                ticketsBySeverity,
                ticketsByStatus,
                usersHistory,
                kpis: {
                    userWithMoreTicketsReported,
                    userWithMoreTicketsResolved,
                    userWithLessTicketsReported,
                    userWithLessTicketsResolved,
                },
            };
        },
    },
};
exports.reportResolver = reportResolver;
//# sourceMappingURL=reports.resolver.js.map