import { Body, Controller, Get, Post } from "@nestjs/common";
import { CommandBus, QueryBus } from "@nestjs/cqrs";
import {CreateTaskRequest} from "./commands/requests/create-task.request";
import { CreateTaskCommand } from "./commands/create-task";
import { GetTaskQuery } from "./queries/get-tasks.query";

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
    async getAllTasks(){
        return this.queryBus.execute(new GetTaskQuery())
    }
}