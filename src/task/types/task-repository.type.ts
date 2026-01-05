import { CreateTaskRequest } from "../commands/requests/create-task.request";
import { UpdateTaskRequest } from "../commands/requests/update-task.request";
import { TaskEntity } from "../entities/task.entity";

export interface ITaskRepository {
    create(data: CreateTaskRequest): Promise<TaskEntity>;
    update(id: string, data: UpdateTaskRequest): Promise<TaskEntity | null>;
    delete(id: string): Promise<TaskEntity>;
    findOne(id: string): Promise<TaskEntity | null>,
    findAll(): Promise<TaskEntity[]>;
}