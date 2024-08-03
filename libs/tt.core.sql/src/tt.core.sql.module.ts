import { Module, DynamicModule } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigurationModule, ConfigurationService } from '@app/configuration';

@Module({})
export class TT_CoreSqlModule {
  static forRootAsync(): DynamicModule {
    return {
      module: TT_CoreSqlModule,
      imports: [
        TypeOrmModule.forRootAsync({
          imports: [ConfigurationModule],
          inject: [ConfigurationService],
          useFactory: async (configService: ConfigurationService) => ({
            type: 'postgres',
            host: configService.databaseHost,
            port: configService.databasePort,
            username: configService.databaseUsername,
            password: configService.databasePassword,
            database: configService.databaseName,
            entities: [__dirname + '/../**/*.entity{.ts,.js}'],
            synchronize: true,
          }),
        }),
      ],
    };
  }
}
