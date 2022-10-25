import { categoryResolver } from "@resolvers/categories.resolver";
import { authenticationResolver } from "@resolvers/authentication.resolver";
import { severityResolver } from "@resolvers/severities.resolver";
import { stateResolver } from "@resolvers/states.resolver";
import { logResolver } from "@resolvers/logs.resolver";
import { userResolver } from "@resolvers/users.resolver";
import { ticketResolver } from "@resolvers/tickets.resolver";
import { ratingResolver } from "@resolvers/ratings.resolver";
import { messageResolver } from "@resolvers/messages.resolver";

const main = {
  Query: {
    _: () => "",
  },
  Mutation: {
    _: () => "",
  },
};

const resolvers = [
  main,
  categoryResolver,
  authenticationResolver,
  severityResolver,
  stateResolver,
  logResolver,
  userResolver,
  ticketResolver,
  ratingResolver,
  messageResolver,
];

export { resolvers };
