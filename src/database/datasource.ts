import { config } from "dotenv";
import { dbConfig } from "src/config/db.config";
import { DataSource, DataSourceOptions } from "typeorm";

config();

export const dataSourceOptions: DataSourceOptions = {
    type: 'postgres',
    host: dbConfig.host,
    port: dbConfig.port,
    username: dbConfig.username,
    password: dbConfig.password,
    database: dbConfig.database,
    synchronize: dbConfig.synchronize,
    entities: ['src/**/entities/*.entity.ts'],
    migrations: ['src/database/migrations/*.ts'],
    migrationsRun: false,
    logging: true,
    migrationsTableName: 'migrations',
}

const dataSource = new DataSource(dataSourceOptions);

export default dataSource;