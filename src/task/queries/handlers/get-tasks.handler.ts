import { IQueryHandler, QueryHandler } from "@nestjs/cqrs";
import { GetTasksQuery } from "../get-tasks.query";
import { TaskRepository } from "src/task/repositories/task.repository";
import { Task } from "src/task/types/task";

@QueryHandler(GetTasksQuery)
export class GetTasksHandler implements IQueryHandler<GetTasksQuery>{
    constructor(private readonly taskRepository: TaskRepository){}

    async execute(query: GetTasksQuery): Promise<Task[]> {
        return await this.taskRepository.findAll();
    }
}