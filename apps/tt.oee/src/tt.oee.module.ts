import { Module } from '@nestjs/common';
import { TtOeeController } from './tt.oee.controller';
import { TtOeeService } from './tt.oee.service';

@Module({
  imports: [],
  controllers: [TtOeeController],
  providers: [TtOeeService],
})
export class TtOeeModule {}
