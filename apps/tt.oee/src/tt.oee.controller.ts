import { Controller, Get } from '@nestjs/common';
import { TtOeeService } from './tt.oee.service';

@Controller()
export class TtOeeController {
  constructor(private readonly ttOeeService: TtOeeService) {}

  @Get()
  getHello(): string {
    return this.ttOeeService.getHello();
  }
}
