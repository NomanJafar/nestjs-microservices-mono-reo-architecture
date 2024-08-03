import { Module } from '@nestjs/common';
import { TtTelemetryProcessingController } from './tt.telemetry.processing.controller';
import { TtTelemetryProcessingService } from './tt.telemetry.processing.service';

@Module({
  imports: [],
  controllers: [TtTelemetryProcessingController],
  providers: [TtTelemetryProcessingService],
})
export class TtTelemetryProcessingModule {}
