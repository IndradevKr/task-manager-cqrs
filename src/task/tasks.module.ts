import { Module } from "@nestjs/common";
import { CqrsModule } from "@nestjs/cqrs";
import { TaskRepository } from "./repositories/task.repository";
import { CreateTaskHandler } from "./commands/handlers/create-task.handler";
import { GetTasksHandler } from "./queries/handlers/get-tasks.handler";
import { TasksController } from "./tasks.controller";
import { TypeOrmModule } from "@nestjs/typeorm";
import { TaskEntity } from "./entities/task.entity";

@Module({
    imports: [CqrsModule, TypeOrmModule.forFeature([TaskEntity])],
    providers: [
        TaskRepository,
        CreateTaskHandler,
        GetTasksHandler,
    ],
    controllers: [TasksController],
})
export class TasksModule {}