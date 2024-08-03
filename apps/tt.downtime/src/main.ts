import { NestFactory } from '@nestjs/core';
import { TtDowntimeModule } from './tt.downtime.module';

async function bootstrap() {
  const app = await NestFactory.create(TtDowntimeModule);
  await app.listen(3003);
}
bootstrap();
