import { IsNotEmpty, IsOptional, IsString } from "class-validator";

export class CreateTaskRequest {
    @IsNotEmpty()
    @IsString()
    title: string;

    @IsOptional()
    @IsString()
    description: string;
}