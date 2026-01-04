import { Module } from "@nestjs/common";
import { CqrsModule } from "@nestjs/cqrs";
import { TaskRepository } from "./repositories/task.repository";
import { CreateTaskHandler } from "./commands/handlers/create-task.handler";
import { GetTasksHandler } from "./queries/handlers/get-tasks.handler";
import { TasksController } from "./tasks.controller";
import { TypeOrmModule } from "@nestjs/typeorm";
import { TaskEntity } from "./entities/task.entity";
import { TaskQueriesHandler } from "./queries/handlers";
import { TaskCommandsHandler } from "./commands/handlers";

@Module({
    imports: [CqrsModule, TypeOrmModule.forFeature([TaskEntity])],
    providers: [
        TaskRepository,
        ...TaskCommandsHandler,
        ...TaskQueriesHandler,
    ],
    controllers: [TasksController],
})
export class TasksModule {}