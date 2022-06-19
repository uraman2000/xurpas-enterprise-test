import { TypeOrmModuleOptions } from '@nestjs/typeorm';
import { getEnvPath } from 'src/common/helper/env.helper';
const dotenv = require('dotenv');
const envFilePath: string = getEnvPath(
  `${__dirname.replace('config', '')}/envs`,
);

dotenv.config({ path: envFilePath });

const connection = () => {
  if (process.env.CLEARDB_DATABASE_URL) {
    return { url: process.env.CLEARDB_DATABASE_URL };
  }
  return {
    host: process.env.DATABASE_HOST,
    port: parseInt(<string>process.env.DATABASE_PORT),
    username: process.env.DATABASE_USERNAME,
    password: process.env.DATABASE_PASSWORD,
    database: process.env.DATABASE,
  };
};
console.log(connection());
export const typeOrmModuleOptions: TypeOrmModuleOptions = {
  type: 'mysql',
  ...connection(),
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
