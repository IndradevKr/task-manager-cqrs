import { TaskEntity } from "@/task/entities/task.entity";
import { IsIn, IsOptional, IsString } from "class-validator";
import {type TaskStatus } from "src/task/types/task";

export class UpdateTaskRequest {
    @IsOptional()
    @IsString()
    title?: string;

    @IsOptional()
    @IsString()
    description?: string;

    @IsOptional()
    @IsString()
    @IsIn(['open', 'in-progress', 'done'])
    status?: TaskStatus;
}