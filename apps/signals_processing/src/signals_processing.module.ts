import { Module } from '@nestjs/common';
import { SignalsProcessingController } from './signals_processing.controller';
import { SignalsProcessingService } from './signals_processing.service';

@Module({
  imports: [],
  controllers: [SignalsProcessingController],
  providers: [SignalsProcessingService],
})
export class SignalsProcessingModule {}
