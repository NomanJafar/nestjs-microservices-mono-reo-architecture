import { Module } from '@nestjs/common';
import { SignalsSqlService } from './signals.sql.service';

@Module({
  providers: [SignalsSqlService],
  exports: [SignalsSqlService],
})
export class SignalsSqlModule {}
