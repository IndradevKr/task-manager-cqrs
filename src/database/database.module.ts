import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { TypeOrmModule, TypeOrmModuleOptions } from '@nestjs/typeorm';
import { dataSourceOptions } from 'src/db/datasource';
import { TaskEntity } from 'src/task/entities/task.entity';

@Module({
    imports: [
        ConfigModule.forRoot({
            isGlobal: true,
        }),
        TypeOrmModule.forRoot({
            ...dataSourceOptions,
            entities: [TaskEntity]
        })
    ]
})

export class DatabaseModule { }
