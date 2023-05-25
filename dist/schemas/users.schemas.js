"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.userSchemaUpdate = exports.userSchemaResponse = exports.userSchemaRequest = exports.userSchema = void 0;
const zod_1 = require("zod");
exports.userSchema = zod_1.z.object({
    id: zod_1.z.string(),
    name: zod_1.z.string().max(80),
    email: zod_1.z.string().max(45).email(),
    password: zod_1.z.string().max(25),
    phone: zod_1.z.string().max(11),
    createdAt: zod_1.z.string(),
    updatedAt: zod_1.z.string(),
});
exports.userSchemaRequest = exports.userSchema.omit({
    id: true,
    createdAt: true,
    updatedAt: true,
});
exports.userSchemaResponse = exports.userSchema.omit({
    password: true,
});
exports.userSchemaUpdate = exports.userSchemaRequest.deepPartial();
