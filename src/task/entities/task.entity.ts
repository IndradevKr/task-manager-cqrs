import { IsEnum, IsNotEmpty, IsOptional } from "class-validator";
import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

export const TaskStatusEnum = ['open', 'in-progress', 'done'] as const;
export type TaskStausEnumType = (typeof TaskStatusEnum)[number]


@Entity('task')
export class User{
    @PrimaryGeneratedColumn('uuid')
    id: string;

    @IsNotEmpty()
    @Column()
    title: string;

    @IsOptional()
    @Column()
    description: string;

    @IsOptional()
    @Column({
        type: "enum",
        enum: TaskStatusEnum,
        default: 'open'
    })
    status: TaskStausEnumType
    
}