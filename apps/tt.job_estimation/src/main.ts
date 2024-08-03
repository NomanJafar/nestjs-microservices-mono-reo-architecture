import { NestFactory } from '@nestjs/core';
import { TtJobEstimationModule } from './tt.job_estimation.module';

async function bootstrap() {
  const app = await NestFactory.create(TtJobEstimationModule);
  await app.listen(3005);
}
bootstrap();
