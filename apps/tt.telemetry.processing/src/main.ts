import { NestFactory } from '@nestjs/core';
import { TtTelemetryProcessingModule } from './tt.telemetry.processing.module';

async function bootstrap() {
  const app = await NestFactory.create(TtTelemetryProcessingModule);
  await app.listen(3006);
}
bootstrap();
