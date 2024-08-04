import { Module } from '@nestjs/common';
import { SignalsController } from './signals.controller';
import { SignalsService } from './signals.service';

@Module({
  imports: [],
  controllers: [SignalsController],
  providers: [SignalsService],
})
export class SignalsModule {}
