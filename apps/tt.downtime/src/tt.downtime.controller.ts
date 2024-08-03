import { Controller, Get } from '@nestjs/common';
import { TtDowntimeService } from './tt.downtime.service';

@Controller()
export class TtDowntimeController {
  constructor(private readonly ttDowntimeService: TtDowntimeService) {}

  @Get()
  getHello(): string {
    return this.ttDowntimeService.getHello();
  }
}
