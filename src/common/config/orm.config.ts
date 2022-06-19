import { TypeOrmModuleOptions } from '@nestjs/typeorm';
import { getEnvPath } from 'src/common/helper/env.helper';
const dotenv = require('dotenv');
const envFilePath: string = getEnvPath(
  `${__dirname.replace('config', '')}/envs`,
);

dotenv.config({ path: envFilePath });
export const typeOrmModuleOptions: TypeOrmModuleOptions = {
  type: 'mysql',
  host: process.env.DATABASE_HOST,
  port: parseInt(<string>process.env.DATABASE_PORT),
  username: process.env.DATABASE_USERNAME,
  password: process.env.DATABASE_PASSWORD,
  database: process.env.DATABASE,
  entities: ['dist/**/*.entity.{ts,js}'],
  migrationsRun: true,
  logger: 'file',
  logging: true,
  synchronize: false, // never use TRUE in production!
};

export const OrmConfig = {
  ...typeOrmModuleOptions,
  migrationsTableName: 'migrations',
  migrations: ['src/migrations/*.ts'],
  cli: {
    migrationsDir: 'src/migrations',
  },
};
export default OrmConfig;
