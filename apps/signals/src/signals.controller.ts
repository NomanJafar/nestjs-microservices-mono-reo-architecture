import { Controller, Get } from '@nestjs/common';
import { SignalsService } from './signals.service';

@Controller()
export class SignalsController {
  constructor(private readonly signalsService: SignalsService) {}

  @Get()
  getHello(): string {
    return this.signalsService.getHello();
  }
}
