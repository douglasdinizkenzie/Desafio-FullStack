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
exports.ensureContactUserAlreadyAddedMiddleware = void 0;
const data_source_1 = require("../data-source");
const contacts_entity_1 = require("../entities/contacts.entity");
const errors_1 = require("../errors");
const ensureContactUserAlreadyAddedMiddleware = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    const contactsRepository = data_source_1.AppDataSource.getRepository(contacts_entity_1.Contacts);
    const existingContact = yield contactsRepository
        .createQueryBuilder("contacts")
        .where("contacts.email = :email", { email: req.body.email })
        .andWhere("contacts.user = :userId", { userId: res.locals.userId })
        .getOne();
    if (existingContact) {
        throw new errors_1.AppError("A contact with this email has already been added", 409);
    }
    return next();
});
exports.ensureContactUserAlreadyAddedMiddleware = ensureContactUserAlreadyAddedMiddleware;
