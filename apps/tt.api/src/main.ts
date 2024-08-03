import { NestFactory } from '@nestjs/core';
import { TT_ApiModule } from './tt.api.module';

async function bootstrap() {
  const app = await NestFactory.create(TT_ApiModule);
  await app.listen(3001);
}
bootstrap();
