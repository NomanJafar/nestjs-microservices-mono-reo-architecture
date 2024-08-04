import { Module, Global, DynamicModule } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { ConfigurationService } from './configuration.service';

@Global()
@Module({})
export class ConfigurationModule {
  static forRoot(options: { envFilePath: string, isGlobal: boolean }): DynamicModule {
    console.log(`Loading environment variables from: ${options.envFilePath}`);
    return {
      module: ConfigurationModule,
      imports: [
        ConfigModule.forRoot({
          envFilePath: options.envFilePath,
          isGlobal: options.isGlobal,
        }),
      ],
      providers: [ConfigService, ConfigurationService],
      exports: [ConfigService, ConfigurationService],
    };
  }
}
