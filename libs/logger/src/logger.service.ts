// src/logger/logger.service.ts
import { Injectable, Inject, Scope } from '@nestjs/common';
import { Logger } from 'winston';

@Injectable({ scope: Scope.TRANSIENT })
export class LoggerService {
    private context: string;

    constructor(@Inject('winston') private readonly logger: Logger) { }

    setContext(context: string) {
        this.context = context;
    }

    private getContextLogger() {
        return {
            log: (level: string, message: string) => this.logger.log(level, `[${this.context}] ${message}`),
            error: (message: string, trace?: string) => this.logger.error(`[${this.context}] ${message}`, { trace }),
            warn: (message: string) => this.logger.warn(`[${this.context}] ${message}`),
            debug: (message: string) => this.logger.debug(`[${this.context}] ${message}`),
            verbose: (message: string) => this.logger.verbose(`[${this.context}] ${message}`),
        };
    }

    log(message: string) {
        this.getContextLogger().log('info', message);
    }

    error(message: string, trace?: string) {
        this.getContextLogger().error(message, trace);
    }

    warn(message: string) {
        this.getContextLogger().warn(message);
    }

    debug(message: string) {
        this.getContextLogger().debug(message);
    }

    verbose(message: string) {
        this.getContextLogger().verbose(message);
    }
}
