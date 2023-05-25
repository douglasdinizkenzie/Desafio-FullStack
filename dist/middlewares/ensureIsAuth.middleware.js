"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ensureIsAuthMiddleware = void 0;
require("dotenv/config");
const errors_1 = require("../errors");
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const ensureIsAuthMiddleware = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    const token = req.headers.authorization;
    if (!token) {
        throw new errors_1.AppError("Missing bearer token", 401);
    }
    const splitToken = token.split(" ")[1];
    jsonwebtoken_1.default.verify(splitToken, process.env.SECRET_KEY, (error, decoded) => {
        if (error) {
            throw new errors_1.AppError(error.message, 401);
        }
        res.locals.userId = decoded.sub;
        return next();
    });
});
exports.ensureIsAuthMiddleware = ensureIsAuthMiddleware;
