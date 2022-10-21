"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const dotenv = __importStar(require("dotenv"));
dotenv.config();
const server_1 = require("@apollo/server");
const index_1 = require("./src/schemas/index");
const index_2 = require("./src/resolvers/index");
const graphql_tools_1 = require("graphql-tools");
const default_1 = require("@apollo/server/plugin/landingPage/default");
const drainHttpServer_1 = require("@apollo/server/plugin/drainHttpServer");
const express4_1 = require("@apollo/server/express4");
const express_1 = __importDefault(require("express"));
const http_1 = __importDefault(require("http"));
const cors_1 = __importDefault(require("cors"));
const initServer = async () => {
    const app = (0, express_1.default)();
    const httpServer = http_1.default.createServer(app);
    const server = new server_1.ApolloServer({
        schema: (0, graphql_tools_1.makeExecutableSchema)({
            typeDefs: index_1.typeDefs,
            resolvers: index_2.resolvers,
        }),
        plugins: [
            (0, default_1.ApolloServerPluginLandingPageLocalDefault)(),
            (0, drainHttpServer_1.ApolloServerPluginDrainHttpServer)({ httpServer }),
        ],
        introspection: process.env.NODE_ENV == "production",
    });
    await server.start();
    app.use((0, cors_1.default)(), express_1.default.json(), (0, express4_1.expressMiddleware)(server));
    await new Promise((resolve) => httpServer.listen({ port: process.env.PORT || 4010 }, resolve));
};
initServer();
//# sourceMappingURL=index.js.map