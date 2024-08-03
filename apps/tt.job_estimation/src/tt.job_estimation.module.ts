import { Module } from '@nestjs/common';
import { TtJobEstimationController } from './tt.job_estimation.controller';
import { TtJobEstimationService } from './tt.job_estimation.service';

@Module({
  imports: [],
  controllers: [TtJobEstimationController],
  providers: [TtJobEstimationService],
})
export class TtJobEstimationModule {}
