import { Module, DynamicModule } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigurationModule, ConfigurationService } from '@app/configuration';
import { LoggerModule, LoggerService } from '@app/logger';
import { TypeORMLoggerService } from '@app/logger/typeorm.logger.service';
import { User } from './entities/user.entity';
import { Role } from './entities/role.entity';

@Module({})
export class TrackingsSqlModule {
  static forRootAsync(): DynamicModule {
    return {
      module: TrackingsSqlModule,
      imports: [
        TypeOrmModule.forRootAsync({
          inject: [ConfigurationService, LoggerService],
          useFactory: async (configService: ConfigurationService, loggerService: LoggerService) => ({
            type: 'postgres',
            host: configService.databaseHost,
            port: configService.databasePort,
            username: configService.databaseUsername,
            password: configService.databasePassword,
            database: configService.databaseName,
            entities: [
              User,
              Role
            ],
            synchronize: false,
            logging: ['query', 'error', 'schema', 'migration'],
            logger: new TypeORMLoggerService((() => { loggerService.setContext(TrackingsSqlModule.name); return loggerService })()),
          }),
        }),
        TypeOrmModule.forFeature([User, Role]),
      ],
      exports: [TypeOrmModule],
    };
  }
}
