"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
require("reflect-metadata");
require("express-async-errors");
const express_1 = __importDefault(require("express"));
const errors_1 = require("./errors");
const users_routes_1 = require("./routes/users.routes");
const login_routes_1 = require("./routes/login.routes");
const contacts_routes_1 = require("./routes/contacts.routes");
const app = (0, express_1.default)();
app.use(express_1.default.json());
app.use("/users", users_routes_1.usersRoutes);
app.use("/login", login_routes_1.loginRoutes);
app.use("/contacts", contacts_routes_1.contactsRoutes);
app.use(errors_1.handleErrors);
exports.default = app;
