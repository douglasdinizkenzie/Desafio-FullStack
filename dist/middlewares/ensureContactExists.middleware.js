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
Object.defineProperty(exports, "__esModule", { value: true });
exports.ensureContactExistsMiddleware = void 0;
const errors_1 = require("../errors");
const data_source_1 = require("../data-source");
const contacts_entity_1 = require("../entities/contacts.entity");
const uuid_1 = require("uuid");
const ensureContactExistsMiddleware = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    const contactRepository = data_source_1.AppDataSource.getRepository(contacts_entity_1.Contacts);
    const contactId = req.params.id;
    if (!(0, uuid_1.validate)(contactId)) {
        throw new errors_1.AppError("Invalid contact id", 400);
    }
    const contact = yield contactRepository.findOne({
        where: { id: contactId },
    });
    if (!contact) {
        throw new errors_1.AppError("Contact not found", 404);
    }
    return next();
});
exports.ensureContactExistsMiddleware = ensureContactExistsMiddleware;
