import { MigrationInterface, QueryRunner } from "typeorm";

export class AlterLengthInPhoneUser1684808090538 implements MigrationInterface {
    name = 'AlterLengthInPhoneUser1684808090538'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "users" DROP COLUMN "phone"`);
        await queryRunner.query(`ALTER TABLE "users" ADD "phone" character varying(11) NOT NULL`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "users" DROP COLUMN "phone"`);
        await queryRunner.query(`ALTER TABLE "users" ADD "phone" character varying(9) NOT NULL`);
    }

}
