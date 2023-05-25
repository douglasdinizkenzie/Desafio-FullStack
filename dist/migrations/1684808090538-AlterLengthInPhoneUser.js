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
exports.AlterLengthInPhoneUser1684808090538 = void 0;
class AlterLengthInPhoneUser1684808090538 {
    constructor() {
        this.name = 'AlterLengthInPhoneUser1684808090538';
    }
    up(queryRunner) {
        return __awaiter(this, void 0, void 0, function* () {
            yield queryRunner.query(`ALTER TABLE "users" DROP COLUMN "phone"`);
            yield queryRunner.query(`ALTER TABLE "users" ADD "phone" character varying(11) NOT NULL`);
        });
    }
    down(queryRunner) {
        return __awaiter(this, void 0, void 0, function* () {
            yield queryRunner.query(`ALTER TABLE "users" DROP COLUMN "phone"`);
            yield queryRunner.query(`ALTER TABLE "users" ADD "phone" character varying(9) NOT NULL`);
        });
    }
}
exports.AlterLengthInPhoneUser1684808090538 = AlterLengthInPhoneUser1684808090538;
