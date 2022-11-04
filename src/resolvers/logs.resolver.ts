import { GraphQLError } from "graphql";
import { Args, Context } from "@types";
import { exec } from "@helpers";

const logResolver = {
  Query: {
    logs: async (_o: any, _args: Args, context: Context) => {
      if (!context.user) throw new GraphQLError("Sin autenticación.");

      const [sessionLogsQuery, e1] = await exec("allSessionLogs");

      if (e1) throw e1;

      const [deletedTicketsLogsQuery, e2] = await exec("allTicketsDeleted");

      if (e2) throw e2;

      const [ticketChangeStatusLogsQuery, e3] = await exec(
        "allTicketChangesStatus"
      );

      if (e3) throw e3;

      let sessionLogs = sessionLogsQuery.map((l: Record<string, any>) => ({
        title: "Intento de inicio de sesión",
        description: `Un usuario ha intentado iniciar sesión en la aplicación.<br />Sesión <b>${
          l.sessionOk ? "éxitosa." : "fallida."
        }</b><br />Correo probado: ${l.emailAttemp}`,
        date: l.createdAt,
      }));

      let deletedTicketsLogs = deletedTicketsLogsQuery.map(
        (l: Record<string, any>) => {
          return {
            title: "Ticket eliminado",
            description: `El ticket <b>${l.ticketName}}</b> ha sido eliminado por el usuario <b>${l.userName} ${l.userLastname}</b>`,
            date: l.deletedAt,
          };
        }
      );

      let ticketChangeStatusLogs = ticketChangeStatusLogsQuery.map(
        (l: Record<string, any>) => {
          return {
            title: "Ticket modificado",
            description: `El usuario <b>${l.userName} ${l.userLastname}</b> cambio el estado del ticket <b>${l.ticketName}</b><br />Nuevo estado: ${l.stateName}`,
            date: l.createdAt,
          };
        }
      );

      return [
        ...sessionLogs,
        ...deletedTicketsLogs,
        ...ticketChangeStatusLogs,
      ].sort((a: Record<string, string>, b: Record<string, string>) => {
        return new Date(b.date).getTime() - new Date(a.date).getTime();
      });
    },
  },
};

export { logResolver };
