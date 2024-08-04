import { ConfigurationModule } from '@app/configuration';
import { LoggerModule } from '@app/logger';
import { setLoggerOptions } from '../../api/logger_config';
import { UsersModule } from '@app/features/users/users.module';
import { RequestLoggerMiddleware } from '@app/common/middlewares/RequestLogger.middleware';
import { MiddlewareConsumer, Module } from '@nestjs/common';
import { ApiController } from './api.controller';
import { ApiService } from './api.service';

@Module({
  imports: [
    ConfigurationModule.forRoot({
      envFilePath: process.env.NODE_ENV === 'production' ? '.env.production' : '.env.development',
      isGlobal: true,
    }),
    LoggerModule.forRoot(setLoggerOptions({ console: { level: 'debug' } })),
    UsersModule,
  ],
  controllers: [ApiController],
  providers: [ApiService],
})
export class ApiModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(RequestLoggerMiddleware).forRoutes("*");
  }
}
