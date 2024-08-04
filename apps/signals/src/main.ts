import { NestFactory } from '@nestjs/core';
import { SignalsModule } from './signals.module';

async function bootstrap() {
  const app = await NestFactory.create(SignalsModule);
  await app.listen(3000);
}
bootstrap();
