import { MigrationInterface, QueryRunner, Table } from 'typeorm';

export class CreateProfiles1624666631268 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(new Table({
      name: 'profile',
      columns: [
        {
          name: 'id',
          type: 'uuid',
          isPrimary: true,
        },
        {
          name: 'name',
          type: 'varchar',
          isNullable: false,
        }, {
          name: 'is_active',
          type: 'boolean',
          default: true,
        }, {
          name: 'created_at',
          type: 'timestamp',
          default: 'now()',
        },
        {
          name: 'updated_at',
          type: 'timestamp',
          default: 'now()',
        },
      ],
    }));
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable('profile');
  }
}
