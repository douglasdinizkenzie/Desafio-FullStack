import { MigrationInterface, QueryRunner } from "typeorm";

export class AlterUpdatedAtColumn1684885464579 implements MigrationInterface {
    name = 'AlterUpdatedAtColumn1684885464579'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "users" ALTER COLUMN "updatedAt" DROP NOT NULL`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "users" ALTER COLUMN "updatedAt" SET NOT NULL`);
    }

}
