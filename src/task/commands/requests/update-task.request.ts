import { TaskStatus } from "src/task/types/task";

export class UpdateTaskRequest {
    title?: string;
    description?: string;
    status?: TaskStatus;
}