import { CommandHandler, ICommandHandler } from "@nestjs/cqrs";
import { DeleteTaskCommand } from "../delete-task";
import { TaskRepository } from "@/task/repositories/task.repository";
import { TaskEntity } from "@/task/entities/task.entity";

@CommandHandler(DeleteTaskCommand)
export class DeleteTaskHandler implements ICommandHandler<DeleteTaskCommand> {
    constructor(private readonly taskRepository: TaskRepository) { }

    async execute(command: DeleteTaskCommand): Promise<TaskEntity> {
        return await this.taskRepository.delete(command.id)
    }
}