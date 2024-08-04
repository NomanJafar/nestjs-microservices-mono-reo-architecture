import { NestFactory } from '@nestjs/core';
import { SignalsProcessingModule } from './signals_processing.module';

async function bootstrap() {
  const app = await NestFactory.create(SignalsProcessingModule);
  await app.listen(3000);
}
bootstrap();
