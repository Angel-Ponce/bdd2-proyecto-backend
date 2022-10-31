"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.logResolver = void 0;
const graphql_1 = require("graphql");
const _helpers_1 = require("../helpers");
const logResolver = {
    Query: {
        logs: async (_o, _args, context) => {
            if (!context.user)
                throw new graphql_1.GraphQLError("Sin autenticación.");
            const [sessionLogsQuery, e1] = await (0, _helpers_1.exec)("allSessionLogs");
            if (e1)
                throw e1;
            const [deletedTicketsLogsQuery, e2] = await (0, _helpers_1.exec)("allTicketsDeleted");
            if (e2)
                throw e2;
            const [ticketChangeStatusLogsQuery, e3] = await (0, _helpers_1.exec)("allTicketChangesStatus");
            if (e3)
                throw e3;
            let sessionLogs = sessionLogsQuery.map((l) => ({
                title: "Intento de inicio de sesión",
                description: `Un usuario ha intentado iniciar sesión en la aplicación.<br />Sesión <b>${l.sessionOk ? "éxitosa." : "fallida."}</b><br />Correo probado: ${l.emailAttemp}`,
                date: l.createdAt,
            }));
            let deletedTicketsLogs = deletedTicketsLogsQuery.map((l) => {
                return {
                    title: "Ticket eliminado",
                    description: `El ticket <b>${l.ticketName}}</b> ha sido eliminado por el usuario <b>${l.userName} ${l.userLastname}</b>`,
                    date: l.deletedAt,
                };
            });
            let ticketChangeStatusLogs = ticketChangeStatusLogsQuery.map((l) => {
                return {
                    title: "Ticket modificado",
                    description: `El usuario <b>${l.userName} ${l.userLastname}</b> cambio el estado del ticket <b>${l.ticketName}</b><br />Nuevo estado: ${l.stateName}`,
                    date: l.createdAt,
                };
            });
            return [...sessionLogs, ...deletedTicketsLogs, ...ticketChangeStatusLogs];
        },
    },
};
exports.logResolver = logResolver;
//# sourceMappingURL=logs.resolver.js.map