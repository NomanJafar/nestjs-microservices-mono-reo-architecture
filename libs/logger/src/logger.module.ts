import { Module, Global, DynamicModule } from '@nestjs/common';
import { WinstonModule, WinstonModuleOptions } from "nest-winston";
import { LoggerService } from "./logger.service";
import * as winston from 'winston';
import { TypeORMLoggerService } from './typeorm.logger.service';

@Global()
@Module({})
export class LoggerModule {
  static forRoot(options: WinstonModuleOptions): DynamicModule {
    return {
      module: LoggerModule,
      imports: [
        WinstonModule.forRoot(options),
      ],
      providers: [
        LoggerService,
        TypeORMLoggerService,
        {
          provide: 'winston',
          useFactory: () => winston.createLogger(options),
        },
      ],
      exports: [LoggerService],
    };
  }
}