import { Module } from '@nestjs/common';
import { TtTelemetryController } from './tt.telemetry.controller';
import { TtTelemetryService } from './tt.telemetry.service';

@Module({
  imports: [],
  controllers: [TtTelemetryController],
  providers: [TtTelemetryService],
})
export class TtTelemetryModule {}
