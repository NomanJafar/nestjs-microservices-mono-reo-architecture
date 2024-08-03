import { Injectable } from '@nestjs/common';

@Injectable()
export class TtOeeService {
  getHello(): string {
    return 'Hello World!';
  }
}
