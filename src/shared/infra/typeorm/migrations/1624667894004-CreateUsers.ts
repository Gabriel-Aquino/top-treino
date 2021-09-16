import { MigrationInterface, QueryRunner, Table } from 'typeorm';

export class CreateUsers1624667894004 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(new Table({
      name: 'users',
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
          name: 'email',
          type: 'varchar',
          isNullable: false,
        }, {
          name: 'password',
          type: 'varchar',
          isNullable: false,
        }, {
          name: 'is_active',
          type: 'boolean',
          default: true,
        }, {
          name: 'profile_id',
          type: 'uuid',
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
      foreignKeys: [
        {
          name: 'FKProfile',
          referencedTableName: 'profile',
          referencedColumnNames: ['id'],
          columnNames: ['profile_id'],
        },
      ],
    }));
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable('users');
  }
}
