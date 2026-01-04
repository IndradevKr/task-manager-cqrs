import { IQueryHandler, QueryHandler } from "@nestjs/cqrs";
import { FindTaskByIdQuery } from "../find-task-by-id.query";
import { TaskRepository } from "@/task/repositories/task.repository";
import { TaskEntity } from "@/task/entities/task.entity";

@QueryHandler(FindTaskByIdQuery)
export class FindTaskByIdQueryHandler implements IQueryHandler<FindTaskByIdQuery> {
    constructor(private readonly taskRepository: TaskRepository) { }

    async execute(query: FindTaskByIdQuery): Promise<TaskEntity | null> {
        return await this.taskRepository.findOne(query.id)
    }
}