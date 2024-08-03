import { NestFactory } from '@nestjs/core';
import { TtOeeModule } from './tt.oee.module';

async function bootstrap() {
  const app = await NestFactory.create(TtOeeModule);
  await app.listen(3002);
}
bootstrap();
