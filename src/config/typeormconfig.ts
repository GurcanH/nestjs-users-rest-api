import { TypeOrmModuleOptions } from '@nestjs/typeorm';

/*
!!!Important!!!
The fields below should be changed with the installed PostgreSQL credentials
!!!Important!!!
*/

export const typeOrmConfig: TypeOrmModuleOptions = {
  type: 'postgres',
  host: 'localhost',
  port: 5432,
  username: 'postgres',
  password: '<password>',
  database: 'users',
  entities: [__dirname + '/../**/*.entity.{js,ts}'],
  synchronize: true,
};
