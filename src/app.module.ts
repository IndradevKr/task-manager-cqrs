import { Module } from '@nestjs/common';
import { TasksModule } from './task/tasks.module';

@Module({
  imports: [TasksModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
