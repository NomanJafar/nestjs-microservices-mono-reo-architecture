import { NestFactory } from '@nestjs/core';
import { MaintenanceModule } from './maintenance.module';

async function bootstrap() {
  const app = await NestFactory.create(MaintenanceModule);
  await app.listen(3000);
}
bootstrap();
