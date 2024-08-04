import { WinstonModuleOptions } from 'nest-winston';
import * as winston from 'winston';
import 'winston-mongodb';

winston.addColors({
    error: 'bold red',
    warn: 'italic yellow',
    info: 'green',
    debug: 'blue',
    verbose: 'magenta',
});

type loggerConfig = {
    console: {
        level: 'info' | 'warn' | 'error' | 'verbose' | 'debug'
    },
    file?: {
        path: string,
        level: 'info' | 'warn' | 'error' | 'verbose' | 'debug'
    },
    mongo?: {
        uri: string,
        collectionName: string
        level: 'info' | 'warn' | 'error' | 'verbose' | 'debug'
    }
}

const defaultOptions: loggerConfig = {
    console: {
        level: 'debug'
    }
}

export const setLoggerOptions = (options: loggerConfig = defaultOptions): WinstonModuleOptions => {
    const winstonConfig: WinstonModuleOptions = {
        levels: winston.config.npm.levels,
        transports: [
            new winston.transports.Console({
                level: options.console.level,
                format: winston.format.combine(
                    winston.format.timestamp({ format: 'YYYY-MM-DD HH:mm:ss' }),
                    winston.format.colorize({ all: true }),
                    winston.format.printf(({ timestamp, level, message, ...meta }) => {
                        let logOutput = `${timestamp} [${level}]: ${message}`;
                        if (Object.keys(meta).length) {
                            logOutput += ` ${JSON.stringify(meta)}`;
                        }
                        return logOutput;
                    }),
                ),
            }),
            options.file && new winston.transports.File({
                filename: options.file.path,
                level: options.file.level,
                format: winston.format.combine(
                    winston.format.timestamp({ format: 'YYYY-MM-DD HH:mm:ss' }),
                    winston.format.json(),
                ),
            }),
            options.mongo && new winston.transports.MongoDB({
                level: options.mongo.level,
                db: options.mongo.uri,
                collection: options.mongo.collectionName,
                format: winston.format.combine(
                    winston.format.timestamp({ format: 'YYYY-MM-DD HH:mm:ss' }),
                    winston.format.json(),
                ),
                options: { useUnifiedTopology: true },
            }),
        ].filter(Boolean),
    };
    return winstonConfig;
};