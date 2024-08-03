import { Injectable } from '@nestjs/common';

@Injectable()
export class TtTelemetryProcessingService {
  getHello(): string {
    return 'Hello World!';
  }
}
