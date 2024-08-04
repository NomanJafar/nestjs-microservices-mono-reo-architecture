import { Injectable } from '@nestjs/common';

@Injectable()
export class SignalsProcessingService {
  getHello(): string {
    return 'Hello World!';
  }
}
