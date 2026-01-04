import { Injectable } from "@nestjs/common";
import { DeleteResult, Repository, UpdateResult } from "typeorm";
import dataSource from "src/db/datasource";
import { TaskEntity } from "../entities/task.entity";
import { InjectRepository } from "@nestjs/typeorm";
import { Task } from "../types/task";
import { CreateTaskRequest } from "../commands/requests/create-task.request";
import { UpdateTaskRequest } from "../commands/requests/update-task.request";
import { ITaskRepository } from "../types/task-repository.type";

@Injectable()
export class TaskRepository implements ITaskRepository {
    constructor(
        @InjectRepository(TaskEntity)
        private taskRepository: Repository<TaskEntity>
    ) { }

    create(data: CreateTaskRequest): Promise<TaskEntity> {
        return this.taskRepository.save(data);
    }

    update(id: string, data: UpdateTaskRequest): Promise<UpdateResult> {
        return this.taskRepository.update(id, data);
    }

    findAll(): Promise<TaskEntity[]> {
        return this.taskRepository.find();
    }

    findOne(id: string): Promise<TaskEntity | null> {
        return this.taskRepository.findOneBy({ id: id })
    }

    delete(id: string): Promise<DeleteResult> {
        return this.taskRepository.delete(id);
    }
}