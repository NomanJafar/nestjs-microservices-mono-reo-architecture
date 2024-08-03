import { Controller, Get } from '@nestjs/common';
import { TtJobEstimationService } from './tt.job_estimation.service';

@Controller()
export class TtJobEstimationController {
  constructor(private readonly ttJobEstimationService: TtJobEstimationService) {}

  @Get()
  getHello(): string {
    return this.ttJobEstimationService.getHello();
  }
}
