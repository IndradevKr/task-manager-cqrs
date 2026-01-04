import { HttpException, HttpStatus, Injectable, NotFoundException } from "@nestjs/common";
import { DeleteResult, Repository, UpdateResult } from "typeorm";
import dataSource from "src/db/datasource";
import { TaskEntity } from "../entities/task.entity";
import { InjectRepository } from "@nestjs/typeorm";
import { Task } from "../types/task";
import { CreateTaskRequest } from "../commands/requests/create-task.request";
import { UpdateTaskRequest } from "../commands/requests/update-task.request";
import { ITaskRepository } from "../types/task-repository.type";
import { HttpErrorByCode } from "@nestjs/common/utils/http-error-by-code.util";

@Injectable()
export class TaskRepository implements ITaskRepository {
    constructor(
        @InjectRepository(TaskEntity)
        private taskRepository: Repository<TaskEntity>
    ) { }

    create(data: CreateTaskRequest): Promise<TaskEntity> {
        return this.taskRepository.save(data);
    }

    async update(id: string, data: UpdateTaskRequest): Promise<TaskEntity | null> {
        const task = await this.taskRepository.findOneBy({ id: id });
        if (!task) {
            throw new NotFoundException(`Task with ID "${id}" not found`);
        }
        const updatedTask = this.taskRepository.create({
            ...task,
            ...data
        });

        return await this.taskRepository.save(updatedTask)
    }

    findAll(): Promise<TaskEntity[]> {
        return this.taskRepository.find();
    }

    findOne(id: string): Promise<TaskEntity | null> {
        return this.taskRepository.findOneBy({ id: id })
    }

    async delete(id: string): Promise<TaskEntity> {
        const task = await this.taskRepository.findOne({ where: { id } });
        console.log("task data: ", task)
        if (!task) {
            throw new NotFoundException(`Task with ID "${id}" not found`);
        }

        return await this.taskRepository.remove(task);

    }
}