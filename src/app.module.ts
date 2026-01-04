import { Module } from '@nestjs/common';
import { TasksModule } from './task/tasks.module';
import { DatabaseModule } from './database/database.module';

@Module({
  imports: [DatabaseModule, TasksModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
