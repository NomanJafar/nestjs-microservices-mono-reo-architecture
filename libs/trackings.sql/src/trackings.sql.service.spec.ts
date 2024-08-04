import { Test, TestingModule } from '@nestjs/testing';
import { TrackingsSqlService } from './trackings.sql.service';

describe('TrackingsSqlService', () => {
  let service: TrackingsSqlService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [TrackingsSqlService],
    }).compile();

    service = module.get<TrackingsSqlService>(TrackingsSqlService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
