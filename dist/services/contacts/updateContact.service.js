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
exports.updateContactService = void 0;
const contacts_entity_1 = require("../../entities/contacts.entity");
const data_source_1 = require("../../data-source");
const contacts_schema_1 = require("../../schemas/contacts.schema");
const errors_1 = require("../../errors");
const updateContactService = (contactId, data, userId) => __awaiter(void 0, void 0, void 0, function* () {
    const contactRepository = data_source_1.AppDataSource.getRepository(contacts_entity_1.Contacts);
    const oldContact = yield contactRepository
        .createQueryBuilder("contacts")
        .leftJoinAndSelect("contacts.user", "user")
        .where("contacts.id = :idContact", { idContact: contactId })
        .andWhere("user.id = :idUser", { idUser: userId })
        .getOne();
    if (data.email && (oldContact === null || oldContact === void 0 ? void 0 : oldContact.email) !== data.email) {
        const contactEmailExist = yield contactRepository
            .createQueryBuilder("contacts")
            .where("contacts.email = :emailContact", { emailContact: data.email })
            .andWhere("contacts.user = :idUser", { idUser: userId })
            .getOne();
        if (contactEmailExist) {
            throw new errors_1.AppError("A contact with this email already registred", 409);
        }
    }
    const newContact = contactRepository.create(Object.assign(Object.assign({}, oldContact), data));
    yield contactRepository.save(newContact);
    return contacts_schema_1.contactsSchema.parse(newContact);
});
exports.updateContactService = updateContactService;
