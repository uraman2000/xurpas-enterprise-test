import { MigrationInterface, QueryRunner } from 'typeorm';

export class PopulateUser1655573835908 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    for (let i = 0; i < 3; i++) {
      await queryRunner.query(
        `INSERT INTO user (first_name,last_name,address,postal_code,email,username,password,contact_phone_number) VALUES ('test${i}', 'string${i}', 'string', '0912', '094747151155', 'string@gmail.com', 'string', 'string')`,
      );
    }
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    for (let i = 0; i < 3; i++) {
      await queryRunner.query(
        `DELETE FROM user WHERE first_name='test${i}' and last_name='string${i}'`,
      );
    }
  }
}
