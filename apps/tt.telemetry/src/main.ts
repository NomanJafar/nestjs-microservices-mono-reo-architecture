import { NestFactory } from '@nestjs/core';
import { TtTelemetryModule } from './tt.telemetry.module';

async function bootstrap() {
  const app = await NestFactory.create(TtTelemetryModule);
  await app.listen(3004);
}
bootstrap();
