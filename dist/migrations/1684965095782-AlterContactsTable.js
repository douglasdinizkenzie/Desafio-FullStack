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
exports.AlterContactsTable1684965095782 = void 0;
class AlterContactsTable1684965095782 {
    constructor() {
        this.name = 'AlterContactsTable1684965095782';
    }
    up(queryRunner) {
        return __awaiter(this, void 0, void 0, function* () {
            yield queryRunner.query(`ALTER TABLE "contacts" DROP COLUMN "phone"`);
            yield queryRunner.query(`ALTER TABLE "contacts" ADD "phone" character varying(11) NOT NULL`);
        });
    }
    down(queryRunner) {
        return __awaiter(this, void 0, void 0, function* () {
            yield queryRunner.query(`ALTER TABLE "contacts" DROP COLUMN "phone"`);
            yield queryRunner.query(`ALTER TABLE "contacts" ADD "phone" character varying(9) NOT NULL`);
        });
    }
}
exports.AlterContactsTable1684965095782 = AlterContactsTable1684965095782;
