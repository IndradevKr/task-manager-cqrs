import { CommandHandler, ICommandHandler } from "@nestjs/cqrs";
import { UpdateTaskCommand } from "../update-task";
import { TaskRepository } from "@/task/repositories/task.repository";
import { UpdateResult } from "typeorm";
import { TaskEntity } from "@/task/entities/task.entity";

@CommandHandler(UpdateTaskCommand)
export class UpdateTaskHandler implements ICommandHandler<UpdateTaskCommand> {
    constructor(private readonly taskRepository: TaskRepository) {}

    async execute(command: UpdateTaskCommand): Promise<TaskEntity | null> {
        return await this.taskRepository.update(command.id, command.data)
    }
}