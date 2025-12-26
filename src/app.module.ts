import { Module } from '@nestjs/common';
import { TasksModule } from './task/tasks.module';
import { ConfigModule } from '@nestjs/config';
import { configurations } from './config/configs';
import { TypeOrmModule } from '@nestjs/typeorm';
import { dbConfig } from './config/db.config';
import { dataSourceOptions } from './database/datasource';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      envFilePath: '.env',
      load: [...configurations]
    }),
    TypeOrmModule.forRoot(dataSourceOptions),
    TasksModule
  ],
  providers: [],
})
export class AppModule { }
