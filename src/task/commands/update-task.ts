import { UpdateTaskRequest } from "./requests/update-task.request";

export class UpdateTaskCommand {
    constructor(
        public readonly id: string,
        public readonly data: UpdateTaskRequest
    ) { }
}