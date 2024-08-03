import { Controller, Get } from '@nestjs/common';
import { TT_ApiService } from './tt.api.service';

@Controller()
export class TT_ApiController {
  constructor(private readonly ttApiService: TT_ApiService) { }

  @Get()
  getHello(): string {
    return this.ttApiService.getHello();
  }
}
