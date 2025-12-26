import { registerAs } from "@nestjs/config";
import { dbConfig } from "./db.config";

export enum ConfigKey {
    Db = 'DB'
}

export const configurations = [
    registerAs(ConfigKey.Db, () => dbConfig)
]