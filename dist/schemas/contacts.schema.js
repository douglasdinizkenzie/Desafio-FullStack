"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AllContactsSchemaResponse = exports.contactsSchemaRequestUpdate = exports.contactsSchemaRequest = exports.contactsSchema = void 0;
const zod_1 = require("zod");
const users_schemas_1 = require("./users.schemas");
exports.contactsSchema = zod_1.z.object({
    id: zod_1.z.string(),
    name: zod_1.z.string().max(80),
    email: zod_1.z.string().max(45).email(),
    phone: zod_1.z.string().max(11),
    registered: zod_1.z.string(),
    user: users_schemas_1.userSchemaResponse,
});
exports.contactsSchemaRequest = exports.contactsSchema.omit({
    id: true,
    registered: true,
    user: true,
});
exports.contactsSchemaRequestUpdate = exports.contactsSchemaRequest.deepPartial();
exports.AllContactsSchemaResponse = exports.contactsSchema
    .omit({ user: true })
    .array();
