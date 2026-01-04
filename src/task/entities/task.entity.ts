import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

export type TaskStatus = 'open' | 'in-progress' | 'done';

@Entity('tasks')
export class TaskEntity {
    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column()
    title: string;

    @Column()
    description: string;

    @Column({type: 'enum', enumName: 'task_status_enum'})
    status: TaskStatus
}