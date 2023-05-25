"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.loginRoutes = void 0;
const express_1 = require("express");
const ensureDataIsValid_middleware_1 = require("../middlewares/ensureDataIsValid.middleware");
const login_schemas_1 = require("../schemas/login.schemas");
const login_controller_1 = require("../controllers/login.controller");
exports.loginRoutes = (0, express_1.Router)();
exports.loginRoutes.post("", (0, ensureDataIsValid_middleware_1.ensureDataIsValidMiddleware)(login_schemas_1.loginSchema), login_controller_1.loginController);
