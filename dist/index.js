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
Object.defineProperty(exports, "__esModule", { value: true });
const dotenv = __importStar(require("dotenv"));
dotenv.config();
const server_1 = require("@apollo/server");
const standalone_1 = require("@apollo/server/standalone");
const index_1 = require("./src/schemas/index");
const index_2 = require("./src/resolvers/index");
const graphql_tools_1 = require("graphql-tools");
const _helpers_1 = require("./src/helpers");
const server = new server_1.ApolloServer({
    schema: (0, graphql_tools_1.makeExecutableSchema)({
        typeDefs: index_1.typeDefs,
        resolvers: index_2.resolvers,
    }),
});
(0, standalone_1.startStandaloneServer)(server, {
    listen: {
        port: Number(process.env.PORT || 4010),
        // host: process.env.APP_HOST || "localhost",
    },
    context: async ({ req }) => {
        const token = req.headers.authorization || "";
        const [data, error] = await (0, _helpers_1.exec)("getUserByToken ?", [token], false);
        let user = null;
        if (error) {
            return { user: null };
        }
        user = data;
        return { user };
    },
}).then(({ url }) => {
    console.log(`🚀 Server ready at: ${url}`);
});
//# sourceMappingURL=index.js.map