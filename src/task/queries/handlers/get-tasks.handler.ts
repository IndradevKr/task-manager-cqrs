import { IQueryHandler, QueryHandler } from "@nestjs/cqrs";
import { GetTaskQuery } from "../get-tasks.query";
import { TaskRepository } from "src/task/repositories/task.repository";
import { Task } from "src/task/types/task";

@QueryHandler(GetTaskQuery)
export class GetTasksHandler implements IQueryHandler<GetTaskQuery>{
    constructor(private readonly taskRepository: TaskRepository){}

    async execute(query: GetTaskQuery): Promise<Task[]> {
        return await this.taskRepository.findAll();
    }
}