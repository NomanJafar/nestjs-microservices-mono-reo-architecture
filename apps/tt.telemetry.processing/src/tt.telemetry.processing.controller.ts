import { Controller, Get } from '@nestjs/common';
import { TtTelemetryProcessingService } from './tt.telemetry.processing.service';

@Controller()
export class TtTelemetryProcessingController {
  constructor(private readonly ttTelemetryProcessingService: TtTelemetryProcessingService) {}

  @Get()
  getHello(): string {
    return this.ttTelemetryProcessingService.getHello();
  }
}
