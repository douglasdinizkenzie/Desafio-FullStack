"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppDataSource = exports.dataSourceConfig = void 0;
const path_1 = __importDefault(require("path"));
require("dotenv/config");
const typeorm_1 = require("typeorm");
const dataSourceConfig = () => {
    const entitiesPath = path_1.default.join(__dirname, "./entities/**.{ts,js}");
    const migrationsPath = path_1.default.join(__dirname, "./migrations/**.{ts,js}");
    const nodeEnv = process.env.NODE_ENV;
    if (nodeEnv === "test") {
        return {
            type: "sqlite",
            database: ":memory",
            synchronize: true,
            entities: [entitiesPath],
        };
    }
    const dbURL = process.env.DATABASE_URL;
    if (!dbURL) {
        throw new Error("Env var DATABASE_URL does not exists");
    }
    return {
        type: "postgres",
        url: dbURL,
        synchronize: false,
        logging: true,
        migrations: [migrationsPath],
        entities: [entitiesPath],
    };
};
exports.dataSourceConfig = dataSourceConfig;
exports.AppDataSource = new typeorm_1.DataSource((0, exports.dataSourceConfig)());
