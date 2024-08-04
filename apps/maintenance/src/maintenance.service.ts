import { Injectable } from '@nestjs/common';

@Injectable()
export class MaintenanceService {
  getHello(): string {
    return 'Hello World!';
  }
}
