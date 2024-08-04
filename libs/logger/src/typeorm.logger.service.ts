import { Logger } from 'typeorm';
import { LoggerService } from '@app/logger';

export class TypeORMLoggerService implements Logger {
    constructor(private readonly loggerService: LoggerService) { }

    logQuery(query: string, parameters?: any[]) {
        this.loggerService.log(`Query: ${query}, Parameters: ${JSON.stringify(parameters)}`);
    }

    logQueryError(error: string, query: string, parameters?: any[]) {
        this.loggerService.error(`Query Error: ${error}, Query: ${query}, Parameters: ${JSON.stringify(parameters)}`);
    }

    logQuerySlow(time: number, query: string, parameters?: any[]) {
        this.loggerService.warn(`Query Slow: Time: ${time}ms, Query: ${query}, Parameters: ${JSON.stringify(parameters)}`);
    }

    logSchemaBuild(message: string) {
        this.loggerService.log(`Schema Build: ${message}`);
    }

    logMigration(message: string) {
        this.loggerService.log(`Migration: ${message}`);
    }

    log(level: "log" | "info" | "warn" | "error", message: any, ...optionalParams: any[]) {
        this.loggerService.log(message);
    }
}
