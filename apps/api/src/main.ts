import { NestFactory } from '@nestjs/core';
import { WinstonModule } from 'nest-winston';
import { setLoggerOptions } from '../../api/logger_config';
import { ApiModule } from './api.module';

async function bootstrap() {
  const app = await NestFactory.create(ApiModule, {
    logger: WinstonModule.createLogger(setLoggerOptions({
      console: {
        level: 'debug'
      }
    })),
  });
  await app.listen(3001);
}
bootstrap();
