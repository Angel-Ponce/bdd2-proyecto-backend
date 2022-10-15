"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const server_1 = require("@apollo/server");
const standalone_1 = require("@apollo/server/standalone");
const index_1 = require("@schemas/index");
const index_2 = require("@resolvers/index");
const server = new server_1.ApolloServer({
    typeDefs: [index_1.main],
    resolvers: index_2.resolvers,
});
(0, standalone_1.startStandaloneServer)(server, {
    listen: {
        port: 4000,
    },
}).then(({ url }) => {
    console.log(`🚀 Server ready at: ${url}`);
});
//# sourceMappingURL=index.js.map