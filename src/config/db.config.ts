import 'dotenv/config';

export const dbConfig = {
    type: 'postgres',
    host: process.env.DATABASE_HOST,
    port: process.env.DB_PORT ? parseInt(process.env.DB_PORT) : 5434,
    username: process.env.DB_USERNAME,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_DATABASE_NAME,
    synchronize: false,
    autoLoadEntitites: false
};