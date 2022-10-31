import { GraphQLError } from "graphql";
import { Args, Context, Parent } from "@types";
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
        async (l: Record<string, any>) => {
          const [user] = await exec("getUserById @0", [l.userId || 0], false);

          return {
            title: "Ticket eliminado",
            description: `El ticket <b>${l.ticketName}}</b> ha sido eliminado por el usuario <b>${user.name} ${user.lastname}</b>`,
            date: l.deletedAt,
          };
        }
      );

      let ticketChangeStatusLogs = ticketChangeStatusLogsQuery.map(
        async (l: Record<string, any>) => {
          const [ticket] = await exec(
            "getTicketById @0",
            [l.ticketId || 0],
            false
          );
          const [user] = await exec("getUserById @0", [l.userId || 0], false);
          const [status] = await exec(
            "getStateById @0",
            [l.statusId || 0],
            false
          );

          return {
            title: "Ticket modificado",
            description: `El usuario <b>${user.name} ${user.lastname}</b> cambio el estado del ticket <b>${ticket.name}</b><br />Nuevo estado: ${status.name}`,
            date: l.createdAt,
          };
        }
      );

      return [...sessionLogs, ...deletedTicketsLogs, ...ticketChangeStatusLogs];
    },
  },
};

export { logResolver };
