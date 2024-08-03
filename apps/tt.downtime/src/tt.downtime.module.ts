import { Module } from '@nestjs/common';
import { TtDowntimeController } from './tt.downtime.controller';
import { TtDowntimeService } from './tt.downtime.service';

@Module({
  imports: [],
  controllers: [TtDowntimeController],
  providers: [TtDowntimeService],
})
export class TtDowntimeModule {}
