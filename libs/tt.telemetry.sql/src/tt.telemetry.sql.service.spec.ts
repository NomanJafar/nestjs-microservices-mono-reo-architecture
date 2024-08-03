import { Test, TestingModule } from '@nestjs/testing';
import { TT_TelemetrySqlService } from './tt.telemetry.sql.service';

describe('TtTelemetrySqlService', () => {
  let service: TT_TelemetrySqlService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [TT_TelemetrySqlService],
    }).compile();

    service = module.get<TT_TelemetrySqlService>(TT_TelemetrySqlService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
