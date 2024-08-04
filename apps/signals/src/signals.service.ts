import { Injectable } from '@nestjs/common';

@Injectable()
export class SignalsService {
  getHello(): string {
    return 'Hello World!';
  }
}
