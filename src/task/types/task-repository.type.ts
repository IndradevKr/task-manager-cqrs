import { DeleteResult, UpdateResult } from "typeorm";
import { CreateTaskRequest } from "../commands/requests/create-task.request";
import { UpdateTaskRequest } from "../commands/requests/update-task.request";
import { TaskEntity } from "../entities/task.entity";
import { TaskRepository } from "../repositories/task.repository";

export interface ITaskRepository {
    create(data: CreateTaskRequest): Promise<TaskEntity>;
    update(id: string, data: UpdateTaskRequest): Promise<UpdateResult>;
    delete(id: string): Promise<DeleteResult>;
    findOne(id: string): Promise<TaskEntity | null>,
    findAll(): Promise<TaskEntity[]>;
}