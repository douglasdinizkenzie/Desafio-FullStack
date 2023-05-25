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
exports.listContactPerIdService = void 0;
const contacts_entity_1 = require("../../entities/contacts.entity");
const data_source_1 = require("../../data-source");
const contacts_schema_1 = require("../../schemas/contacts.schema");
const listContactPerIdService = (contactId) => __awaiter(void 0, void 0, void 0, function* () {
    const contactRepository = data_source_1.AppDataSource.getRepository(contacts_entity_1.Contacts);
    const contact = yield contactRepository.findOne({
        where: { id: contactId },
        relations: { user: true },
    });
    return contacts_schema_1.contactsSchema.parse(contact);
});
exports.listContactPerIdService = listContactPerIdService;
