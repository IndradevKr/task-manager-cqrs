import { Body, Controller, Delete, Get, Param, ParseUUIDPipe, Post, Put } from "@nestjs/common";
import { CommandBus, QueryBus } from "@nestjs/cqrs";
import {CreateTaskRequest} from "./commands/requests/create-task.request";
import { CreateTaskCommand } from "./commands/create-task";
import { GetTasksQuery } from "./queries/get-tasks.query";
import { Task } from "./types/task";
import { FindTaskByIdQuery } from "./queries/find-task-by-id.query";
import { UpdateTaskRequest } from "./commands/requests/update-task.request";
import { UpdateTaskCommand } from "./commands/update-task";
import { DeleteTaskCommand } from "./commands/delete-task";

@Controller('tasks') 
export class TasksController {
    constructor(
        private readonly commandBus: CommandBus,
        private readonly queryBus: QueryBus
    ){}

    @Post()
    async createTask(@Body() body: CreateTaskRequest){
        return this.commandBus.execute(new CreateTaskCommand(body.title, body.description))
    }

    @Get()
    async getAllTasks(): Promise<Task[]>{
        return this.queryBus.execute(new GetTasksQuery())
    }

    @Get(':id')
    async findOne(@Param('id', new ParseUUIDPipe()) id: string) {
        return this.queryBus.execute(new FindTaskByIdQuery(id))
    }

    @Put(':id')
    async updateTask(@Param('id') id: string, @Body() body: UpdateTaskRequest) {
        return this.commandBus.execute(new UpdateTaskCommand(id, body))
    }

    @Delete(':id')
    async deleteTask(@Param('id') id: string) {
        console.log("id: ", id)
        return this.commandBus.execute(new DeleteTaskCommand(id))
    }
}