import { Controller, Get } from '@nestjs/common';
import { TtTelemetryService } from './tt.telemetry.service';

@Controller()
export class TtTelemetryController {
  constructor(private readonly ttTelemetryService: TtTelemetryService) {}

  @Get()
  getHello(): string {
    return this.ttTelemetryService.getHello();
  }
}
