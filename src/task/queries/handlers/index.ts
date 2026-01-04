import { FindTaskByIdQueryHandler } from "./find-task-by-id.handler";
import { GetTasksHandler } from "./get-tasks.handler";

export const TaskQueriesHandler = [
    FindTaskByIdQueryHandler,
    GetTasksHandler
]