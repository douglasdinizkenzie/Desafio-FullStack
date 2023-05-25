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
exports.deleteContactController = exports.updateContactController = exports.listContactPerIdController = exports.ListAllContactsController = exports.CreateContactsController = void 0;
const createContacts_service_1 = require("../services/contacts/createContacts.service");
const listAllContacts_service_1 = require("../services/contacts/listAllContacts.service");
const listContactPerId_service_1 = require("../services/contacts/listContactPerId.service");
const updateContact_service_1 = require("../services/contacts/updateContact.service");
const deleteContact_service_1 = require("../services/contacts/deleteContact.service");
const CreateContactsController = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const id = res.locals.userId;
    const data = req.body;
    const newContact = yield (0, createContacts_service_1.createContactsService)(id, data);
    return res.status(201).json(newContact);
});
exports.CreateContactsController = CreateContactsController;
const ListAllContactsController = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const id = res.locals.userId;
    const allContacts = yield (0, listAllContacts_service_1.listAllContactsService)(id);
    return res.status(200).json(allContacts);
});
exports.ListAllContactsController = ListAllContactsController;
const listContactPerIdController = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const contactId = req.params.id;
    const contact = yield (0, listContactPerId_service_1.listContactPerIdService)(contactId);
    return res.status(200).json(contact);
});
exports.listContactPerIdController = listContactPerIdController;
const updateContactController = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const userId = res.locals.userId;
    const contactId = req.params.id;
    const data = req.body;
    const newContact = yield (0, updateContact_service_1.updateContactService)(contactId, data, userId);
    return res.status(200).json(newContact);
});
exports.updateContactController = updateContactController;
const deleteContactController = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const contactId = req.params.id;
    const userId = res.locals.userId;
    yield (0, deleteContact_service_1.deleteContactService)(userId, contactId);
    return res.status(204).json();
});
exports.deleteContactController = deleteContactController;
