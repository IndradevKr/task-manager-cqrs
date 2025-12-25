import { CommandHandler, ICommandHandler } from "@nestjs/cqrs";
import { CreateTaskCommand } from "../create-task";
import { TaskRepository } from "src/task/repositories/task.repository";
import { Task } from "src/task/types/task";

@CommandHandler(CreateTaskCommand)
export class CreateTaskHandler implements ICommandHandler<CreateTaskCommand> {
    constructor(private readonly taskRepository: TaskRepository){}

    async execute(command: CreateTaskCommand) {
        const {title, description} = command;
        const task: Task = {
            id: crypto.randomUUID(),
            title,
            description,
            status: 'open'
        }
        await this.taskRepository.create(task)
        return task;
    }
}