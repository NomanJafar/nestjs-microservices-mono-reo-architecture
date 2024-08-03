import { Injectable } from '@nestjs/common';

@Injectable()
export class TtDowntimeService {
  getHello(): string {
    return 'Hello World!';
  }
}
