import { Injectable } from "@nestjs/common";
import { Task } from "../types/task";

@Injectable()
export class TaskRepository {
    private tasks: Task[] = [];

    async create(task: Task) {
        this.tasks.push(task);
        return task;
    }

    async findAll(): Promise<Task[]> {
        return this.tasks;
    }
}