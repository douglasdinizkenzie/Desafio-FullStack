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
exports.deleteUserController = exports.updateUserController = exports.createUserController = void 0;
const CreateUsers_service_1 = require("../services/users/CreateUsers.service");
const UpdateUser_service_1 = require("../services/users/UpdateUser.service");
const deleteUser_service_1 = require("../services/users/deleteUser.service");
const createUserController = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const data = req.body;
    const newUser = yield (0, CreateUsers_service_1.createUserService)(data);
    return res.status(201).json(newUser);
});
exports.createUserController = createUserController;
const updateUserController = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const id = res.locals.userId;
    const data = req.body;
    const updatedUser = yield (0, UpdateUser_service_1.updateUserService)(id, data);
    return res.status(200).json(updatedUser);
});
exports.updateUserController = updateUserController;
const deleteUserController = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const id = res.locals.userId;
    yield (0, deleteUser_service_1.deleteUserService)(id);
    return res.status(204).json();
});
exports.deleteUserController = deleteUserController;
