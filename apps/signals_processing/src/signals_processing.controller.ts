import { Controller, Get } from '@nestjs/common';
import { SignalsProcessingService } from './signals_processing.service';

@Controller()
export class SignalsProcessingController {
  constructor(private readonly signalsProcessingService: SignalsProcessingService) {}

  @Get()
  getHello(): string {
    return this.signalsProcessingService.getHello();
  }
}
