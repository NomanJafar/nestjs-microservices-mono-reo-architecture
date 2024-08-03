import { Injectable } from '@nestjs/common';

@Injectable()
export class TT_ApiService {
  getHello(): string {
    return 'Hello World!';
  }
}
