import { Injectable } from '@nestjs/common';

@Injectable()
export class TtTelemetryService {
  getHello(): string {
    return 'Hello World!';
  }
}
