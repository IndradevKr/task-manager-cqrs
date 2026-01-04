import { Column, MigrationInterface, QueryRunner, Table } from "typeorm";

export class CreateTasksTable1767061042192 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE EXTENSION IF NOT EXISTS "uuid-ossp";`);
        await queryRunner.createTable(new Table({
            name: "tasks",
            columns: [
                {
                    name: 'id',
                    type: 'uuid',
                    isGenerated: true,
                    isPrimary: true,
                    generationStrategy: 'uuid',
                    default: 'uuid_generate_v4()'
                },
                {
                    name: 'title',
                    type: 'varchar',
                    length: '100',
                    isNullable: false
                },
                {
                    name: 'description',
                    type: 'varchar',
                    length: '250',
                    isNullable: true,
                },
                {
                    name: 'status',
                    type: 'enum',
                    enum: ['open', 'in-progress', 'done'],
                    enumName: 'task_status_enum',
                    isNullable: false,
                    default: `'open'`
                }
            ]
        }))
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable('tasks');
        await queryRunner.query(`DROP TYPE IF EXISTS "task_status_enum"`);
    }

}
