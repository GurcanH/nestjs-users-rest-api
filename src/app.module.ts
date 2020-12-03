import { UsersModule } from './users/users.module';
import { Module } from '@nestjs/common';
import { typeOrmConfig } from './config/typeormconfig';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forRoot(typeOrmConfig), UsersModule],
})
export class AppModule {}
